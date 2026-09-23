#!/usr/bin/env node
// The Tikker language server. Editors start it with `tikker-language-server --stdio`.

import { fileURLToPath, pathToFileURL } from 'url';
import {
  CompletionTriggerKind,
  createConnection,
  Diagnostic,
  DiagnosticSeverity,
  InitializeResult,
  ProposedFeatures,
  TextDocuments,
  TextDocumentSyncKind,
} from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { analyze, Config, DEFAULT_CONFIG, ERROR, Model, WARN } from './analyze';
import {
  completionsAt,
  definitionFor,
  hoverFor,
  symbolsFor,
  targetAt,
  TOKEN_MODIFIERS,
  TOKEN_TYPES,
  tokensFor,
} from './features';
import { initParser } from './parser';
import { FileWorkspace } from './workspace';

const connection = createConnection(ProposedFeatures.all);
const documents = new TextDocuments(TextDocument);
const ws = new FileWorkspace();
const models = new Map<string, Model>(); // uri -> latest model
let config: Config = { ...DEFAULT_CONFIG };

function pathOf(uri: string): string | undefined {
  try {
    return uri.startsWith('file:') ? fileURLToPath(uri) : undefined;
  } catch {
    return undefined;
  }
}

function sevOf(v: unknown, fallback: 1 | 2): 1 | 2 {
  if (v === 'error' || v === 1) {
    return ERROR;
  }
  if (v === 'warning' || v === 'warn' || v === 2) {
    return WARN;
  }
  return fallback;
}

function readConfig(s: any) {
  const c = s ?? {};
  config = {
    unknownComponentSeverity: sevOf(c.unknownComponentSeverity, DEFAULT_CONFIG.unknownComponentSeverity),
    undeclaredSignalSeverity: sevOf(c.undeclaredSignalSeverity, DEFAULT_CONFIG.undeclaredSignalSeverity),
    wiredOrSeverity: sevOf(c.wiredOrSeverity, DEFAULT_CONFIG.wiredOrSeverity),
    unusedPinSeverity: sevOf(c.unusedPinSeverity, DEFAULT_CONFIG.unusedPinSeverity),
    unreadWireSeverity: sevOf(c.unreadWireSeverity, DEFAULT_CONFIG.unreadWireSeverity),
    unclosedBlockSeverity: sevOf(c.unclosedBlockSeverity, DEFAULT_CONFIG.unclosedBlockSeverity),
  };
}

/** Analyze a document now, keeping the model for hover and friends. */
function modelFor(doc: TextDocument): Model {
  const old = models.get(doc.uri);
  if (old && (old as any).__version === doc.version) {
    return old;
  }
  const model = analyze(doc.getText(), pathOf(doc.uri), ws, config);
  (model as any).__version = doc.version;
  old?.tree.delete();
  models.set(doc.uri, model);
  return model;
}

function publish(doc: TextDocument) {
  const model = modelFor(doc);
  const diagnostics: Diagnostic[] = model.diagnostics.map((d) => ({
    range: d.range,
    message: d.message,
    severity: d.severity === ERROR ? DiagnosticSeverity.Error : DiagnosticSeverity.Warning,
    source: 'tikker',
  }));
  connection.sendDiagnostics({ uri: doc.uri, version: doc.version, diagnostics });
}

// Edits in one file can change what another file sees (through USE), so after
// a short pause every open document is checked again.
let timer: NodeJS.Timeout | undefined;
function scheduleAll() {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    timer = undefined;
    for (const doc of documents.all()) {
      try {
        publish(doc);
      } catch (e) {
        connection.console.error(`tikker: ${String((e as Error)?.stack ?? e)}`);
      }
    }
  }, 200);
}

function track(doc: TextDocument) {
  const p = pathOf(doc.uri);
  if (p) {
    ws.open.set(p, doc.getText());
  }
}

connection.onInitialize(async (params): Promise<InitializeResult> => {
  await initParser();
  readConfig(params.initializationOptions);
  return {
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Incremental,
      hoverProvider: true,
      definitionProvider: true,
      documentSymbolProvider: true,
      completionProvider: { triggerCharacters: ['[', ']', '.', '{', ':', '(', ' ', ','] },
      semanticTokensProvider: {
        legend: { tokenTypes: TOKEN_TYPES, tokenModifiers: TOKEN_MODIFIERS },
        full: true,
      },
    },
    serverInfo: { name: 'tikker-language-server' },
  };
});

connection.onDidChangeConfiguration((change) => {
  const s = (change.settings as any)?.tikker;
  if (s) {
    readConfig(s);
    for (const m of models.values()) {
      (m as any).__version = undefined;
    }
    scheduleAll();
  }
});

documents.onDidOpen((e) => {
  track(e.document);
  scheduleAll();
});
documents.onDidChangeContent((e) => {
  track(e.document);
  scheduleAll();
});
documents.onDidClose((e) => {
  const p = pathOf(e.document.uri);
  if (p) {
    ws.open.delete(p);
  }
  models.get(e.document.uri)?.tree.delete();
  models.delete(e.document.uri);
  connection.sendDiagnostics({ uri: e.document.uri, diagnostics: [] });
  scheduleAll();
});
// A save on disk can change what USE finds for files that aren't open.
documents.onDidSave(() => scheduleAll());

connection.onHover((p) => {
  const doc = documents.get(p.textDocument.uri);
  if (!doc) {
    return null;
  }
  const model = modelFor(doc);
  const t = targetAt(model, ws, pathOf(doc.uri), p.position.line, p.position.character);
  const md = t && hoverFor(t, model);
  return md ? { contents: { kind: 'markdown', value: md } } : null;
});

connection.onDefinition((p) => {
  const doc = documents.get(p.textDocument.uri);
  if (!doc) {
    return null;
  }
  const model = modelFor(doc);
  const docPath = pathOf(doc.uri);
  const t = targetAt(model, ws, docPath, p.position.line, p.position.character);
  const loc = t && definitionFor(t, model, docPath);
  if (!loc) {
    return null;
  }
  const uri = loc.path ? pathToFileURL(loc.path).href : doc.uri;
  return { uri, range: loc.range };
});

connection.onCompletion((p) => {
  const doc = documents.get(p.textDocument.uri);
  if (!doc) {
    return [];
  }
  // A half-typed line can swallow the rest of the file during error recovery,
  // so completion reads declarations from the text with that line left out.
  const text = doc.getText();
  const lines = text.split('\n');
  const line = p.position.line;
  let model: Model;
  let temp: Model | undefined;
  if (lines[line] !== undefined && lines[line].trim() !== '') {
    lines[line] = '';
    temp = analyze(lines.join('\n'), pathOf(doc.uri), ws, config);
    model = temp;
  } else {
    model = modelFor(doc);
  }
  try {
    const onlySpecific = p.context?.triggerKind === CompletionTriggerKind.TriggerCharacter;
    return completionsAt(model, ws, pathOf(doc.uri), text, line, p.position.character, onlySpecific);
  } finally {
    temp?.tree.delete();
  }
});

connection.onDocumentSymbol((p) => {
  const doc = documents.get(p.textDocument.uri);
  return doc ? symbolsFor(modelFor(doc)) : [];
});

connection.languages.semanticTokens.on((p) => {
  const doc = documents.get(p.textDocument.uri);
  return { data: doc ? tokensFor(modelFor(doc)) : [] };
});

documents.listen(connection);
connection.listen();
