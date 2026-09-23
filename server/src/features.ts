// Hover, go-to-definition, completion, outline, and colors, built on the model
// the checker produces.

import * as fs from 'fs';
import * as path from 'path';
import {
  CompletionItem,
  CompletionItemKind,
  DocumentSymbol,
  InsertTextFormat,
  MarkupKind,
  SymbolKind,
} from 'vscode-languageserver';
import { Instance, Model, OPERATOR_INFO, pinSpan, Port, readableFields, ScopeInfo, SettingDef, showDelays, Sig, Value } from './analyze';
import { field, fields, first, kids, Node, Range, rangeOf } from './tree';
import { BUILTIN_TYPES, MEDIA, MEDIUM_NAMES, TypeEnv } from './types';
import { EXTENSIONS, FileWorkspace } from './workspace';

// ---------------------------------------------------------------------------
// Describing things
// ---------------------------------------------------------------------------

function pinsOf(p: Port): string {
  if (p.s === undefined) {
    return '';
  }
  if (p.e === undefined) {
    return `${p.s}..*`;
  }
  return p.s === p.e ? `${p.s}` : `${p.s}..${p.e}`;
}

function portLine(p: Port, arrow: string): string {
  const pins = pinsOf(p);
  const body = `${p.name}: ${p.type ?? '?'}`;
  const name = pins ? `${pins}[${body}]` : body;
  const hear = p.hearText !== undefined ? ` ~: ${p.hearText}` : '';
  return `${arrow} ${name}${p.optional ? ' = 0' : ''}${hear}`;
}

function settingLine(d: SettingDef): string {
  return `SETTING ${d.name}: ${d.allowedText ?? '?'}${d.default !== undefined ? ` = ${d.default}` : ''}`;
}

export function sigCode(sig: Sig): string {
  const lines = [sig.declText];
  for (const name of sig.settingOrder) {
    lines.push(settingLine(sig.settings.get(name)!));
  }
  for (const p of sig.inPorts) {
    lines.push(portLine(p, '->'));
  }
  for (const p of sig.outPorts) {
    if (!p.implicit) {
      lines.push(portLine(p, p.emits ? '~>' : '=>'));
    }
  }
  return lines.join('\n');
}

function code(text: string): string {
  return '```tikker\n' + text + '\n```';
}

/**
 * How long this component takes, per path. Not one number: latency belongs to
 * a path from the event that starts the clock to the output that changes.
 */
export function timingTable(sig: Sig): string | undefined {
  const paths = sig.timing ?? [];
  if (paths.length === 0) {
    return undefined;
  }
  const rows = paths.map((p) => [`${p.from} → ${p.to}`, showDelays(p.delays)]);
  const w = Math.max(...rows.map((r) => r[0].length));
  return ['**Timing**', code(rows.map((r) => `${r[0].padEnd(w)}   ${r[1]}`).join('\n'))].join('\n\n');
}

function sigMarkdown(sig: Sig, extra?: string): string {
  const parts = [code(sigCode(sig))];
  if (extra) {
    parts.push(extra);
  }
  if (sig.origin) {
    parts.push(`*${sig.origin}*`);
  }
  return parts.join('\n\n');
}

function widthNote(types: TypeEnv, ty: string | undefined): string {
  const medium = types.mediumOf(ty);
  const how =
    medium === 'vibration'
      ? 'through the air'
      : medium === 'contact'
        ? 'by contact'
        : undefined;
  const w = types.width(ty);
  if (w === undefined) {
    const v = types.isVariadic(ty) ? 'as many pins as each part is given' : '';
    return how ? [v, how].filter(Boolean).join(', ') : v;
  }
  const points = how ? `${w} connection point${w === 1 ? '' : 's'}` : `${w} pin${w === 1 ? '' : 's'}`;
  return how ? `${points}, ${how}` : points;
}

/**
 * The type a `name.field` reads from: what a HEAR caught, or a value in this
 * component. The payload's record fields and the medium's delivery facts are
 * both read this way, so both come out of readableFields on this type.
 */
function fieldSourceType(fa: Node, scope: ScopeInfo | undefined): string | undefined {
  const obj = field(fa, 'object');
  if (!obj) {
    return undefined;
  }
  let p: Node | null = fa;
  while (p) {
    if (p.type === 'hear_block' && field(p, 'var')?.text === obj.text) {
      const src = field(p, 'source')?.text;
      return src ? scope?.values.get(src)?.type : undefined;
    }
    p = p.parent;
  }
  return scope?.values.get(obj.text)?.type;
}

// ---------------------------------------------------------------------------
// What's under the cursor
// ---------------------------------------------------------------------------

export type Target =
  | { kind: 'component'; sig: Sig }
  | { kind: 'instance'; name: string; inst: Instance }
  | { kind: 'port'; sig: Sig; port: Port; side: 'in' | 'out' }
  | { kind: 'value'; name: string; value: Value }
  | { kind: 'type'; name: string }
  | { kind: 'type_field'; text: string; type: string }
  | { kind: 'setting'; sig: Sig; def: SettingDef }
  | { kind: 'operator'; name: string }
  | { kind: 'read_field'; name: string; what: string }
  | { kind: 'medium'; name: string }
  | { kind: 'module'; path: string; name: string };

export function scopeAt(model: Model, line: number): ScopeInfo | undefined {
  let found: ScopeInfo | undefined;
  for (const sc of model.scopes) {
    if (line >= sc.startLine && line <= sc.endLine) {
      found = sc;
    }
  }
  return found;
}

/** The part or component a bracket reference names. */
function partOf(name: string, scope: ScopeInfo | undefined, model: Model): { inst?: Instance; sig?: Sig } | undefined {
  const inst = scope?.instances.get(name);
  if (inst) {
    return { inst, sig: inst.sig };
  }
  const sig = model.known.get(name);
  return sig ? { sig } : undefined;
}

function refName(ref: Node): string | undefined {
  if (ref.type === 'instance_ref') {
    return field(ref, 'name')?.text;
  }
  return ref.type === 'identifier' ? ref.text : undefined;
}

function bracketRefs(arr: Node): Node[] {
  const out: Node[] = [];
  for (const child of kids(arr)) {
    const inner = first(child);
    if (inner && (inner.type === 'identifier' || inner.type === 'instance_ref')) {
      out.push(inner);
    }
  }
  return out;
}

export function targetAt(model: Model, ws: FileWorkspace, docPath: string | undefined, line: number, character: number): Target | undefined {
  const n = model.root.namedDescendantForPosition({ row: line, column: character });
  if (!n) {
    return undefined;
  }
  const scope = scopeAt(model, line);
  const parent = n.parent;

  if (n.type === 'port_name' && parent) {
    let refs: Node[] = [];
    let side: 'in' | 'out' = 'in';
    if (parent.type === 'parameter_ref') {
      refs = kids(parent).filter((c) => c.type === 'identifier' || c.type === 'instance_ref');
    } else if (parent.type === 'output_ref') {
      side = 'out';
      const arr = first(parent, 'component_array');
      refs = arr ? bracketRefs(arr) : [];
    }
    for (const ref of refs) {
      const name = refName(ref);
      const part = name ? partOf(name, scope, model) : undefined;
      const ports = side === 'in' ? part?.sig?.inPorts : part?.sig?.outPorts;
      const port = ports?.find((p) => p.name === n.text);
      if (part?.sig && port) {
        return { kind: 'port', sig: part.sig, port, side };
      }
    }
    return undefined;
  }

  if (n.type === 'medium') {
    return { kind: 'medium', name: n.text };
  }

  if (n.type === 'field_name' && parent) {
    if (parent.type === 'field_access') {
      const flds = readableFields(model.types, fieldSourceType(parent, scope));
      return n.text in flds ? { kind: 'read_field', name: n.text, what: flds[n.text] } : undefined;
    }
    if (parent.type === 'type') {
      // transmission.data: the path up to and including this field
      const upto = parent.text.slice(0, n.endIndex - parent.startIndex);
      const r = model.types.resolveProjection(upto);
      return r && r.ok ? { kind: 'type_field', text: upto, type: r.type } : undefined;
    }
    return undefined;
  }

  if (n.type !== 'identifier' || !parent) {
    return undefined;
  }
  const name = n.text;
  const pt = parent.type;

  if (pt === 'function_declaration') {
    const sig = model.known.get(name);
    return sig ? { kind: 'component', sig } : undefined;
  }
  if (pt === 'instance_declaration') {
    const sig = model.known.get(name);
    return sig ? { kind: 'component', sig } : undefined;
  }
  if (pt === 'operator_call' && field(parent, 'name')?.id === n.id) {
    return OPERATOR_INFO[name] ? { kind: 'operator', name } : undefined;
  }
  if (pt === 'type' || pt === 'type_declaration') {
    return model.types.defs.has(name) ? { kind: 'type', name } : undefined;
  }
  if (pt === 'module_path') {
    const imp = parent.parent;
    const mod = imp ? field(imp, 'module')?.text : undefined;
    const p = mod ? ws.findModule(mod, docPath) : undefined;
    return p ? { kind: 'module', path: p, name: mod! } : undefined;
  }
  if (pt === 'import_item') {
    const localName = field(parent, 'alias')?.text ?? field(parent, 'name')?.text ?? name;
    const sig = model.known.get(localName);
    if (sig) {
      return { kind: 'component', sig };
    }
    return model.types.defs.has(localName) ? { kind: 'type', name: localName } : undefined;
  }
  if (pt === 'setting_value' && field(parent, 'name')?.id === n.id) {
    const decl = parent.parent?.parent;
    const typeName = decl && decl.type === 'instance_declaration' ? field(decl, 'type')?.text : undefined;
    const sig = typeName ? model.known.get(typeName) : undefined;
    const def = sig?.settings.get(name);
    return sig && def ? { kind: 'setting', sig, def } : undefined;
  }
  if (pt === 'setting_declaration' && scope?.sig) {
    const def = scope.sig.settings.get(name);
    return def ? { kind: 'setting', sig: scope.sig, def } : undefined;
  }
  if ((pt === 'input_parameter' || pt === 'output_parameter' || pt === 'emission_parameter') && scope?.sig) {
    const side = pt === 'input_parameter' ? 'in' : 'out';
    const port = (side === 'in' ? scope.sig.inPorts : scope.sig.outPorts).find((p) => p.name === name);
    return port ? { kind: 'port', sig: scope.sig, port, side } : undefined;
  }
  if (pt === 'instance_ref' || pt === 'component_content' || pt === 'flow_destination_item' || pt === 'parameter_ref') {
    const inst = scope?.instances.get(name);
    if (inst) {
      return { kind: 'instance', name, inst };
    }
    const value = scope?.values.get(name);
    if (value) {
      return { kind: 'value', name, value };
    }
    const sig = model.known.get(name);
    return sig ? { kind: 'component', sig } : undefined;
  }
  const value = scope?.values.get(name);
  if (value) {
    return { kind: 'value', name, value };
  }
  const inst = scope?.instances.get(name);
  if (inst) {
    return { kind: 'instance', name, inst };
  }
  const sig = model.known.get(name);
  if (sig) {
    return { kind: 'component', sig };
  }
  if (model.types.defs.has(name)) {
    return { kind: 'type', name };
  }
  return undefined;
}

// ---------------------------------------------------------------------------
// Hover and definition
// ---------------------------------------------------------------------------

export function hoverFor(t: Target, model: Model): string | undefined {
  const types = model.types;
  switch (t.kind) {
    case 'component':
      return sigMarkdown(t.sig, timingTable(t.sig));
    case 'instance': {
      const dims = t.inst.dims ? `{${t.inst.dims.map(([a, b]) => `${a}..${b}`).join(', ')}}` : '';
      const head = code(`[${t.name}${dims}]: ${t.inst.type ?? '?'}`);
      return t.inst.sig ? head + '\n\n' + sigMarkdown(t.inst.sig, timingTable(t.inst.sig)) : head;
    }
    case 'port': {
      const arrow = t.side === 'in' ? '->' : t.port.emits ? '~>' : '=>';
      const note = widthNote(types, t.port.type);
      const pins = pinsOf(t.port);
      const where = pins ? `pin${pins.includes('.') ? 's' : ''} ${pins} of ${t.sig.name}` : `a port of ${t.sig.name}`;
      return [code(portLine(t.port, arrow)), [where, note].filter(Boolean).join(' · ')].join('\n\n');
    }
    case 'value': {
      const what = {
        input: 'input',
        output: 'output',
        setting: 'setting, fixed when the part is built',
        state: 'state',
        wire: 'wire',
      }[t.value.kind];
      const ty = t.value.setting?.allowedText ?? t.value.type;
      const note = t.value.kind === 'setting' ? '' : widthNote(types, t.value.type);
      const opts = t.value.enumDef ? `one of: ${t.value.enumDef.options.join(', ')}` : '';
      return [code(`${t.name}: ${ty ?? '?'}`), [what, note, opts].filter(Boolean).join(' · ')].join('\n\n');
    }
    case 'type': {
      const def = types.defs.get(t.name);
      const o = types.origins.get(t.name);
      const w = widthNote(types, t.name);
      const fieldsList = types.recordFields(def);
      const lines = [code(`TYPE ${t.name}: ${def}`)];
      const facts = [w];
      if (fieldsList) {
        facts.push(
          'fields: ' +
            fieldsList
              .map((f) => {
                const fw = types.width(f.type);
                return `${f.name} (${f.type}${fw !== undefined ? `, ${fw} pin${fw === 1 ? '' : 's'}` : ''})`;
              })
              .join(', '),
        );
      }
      lines.push(facts.filter(Boolean).join(' · '));
      if (o?.from) {
        lines.push(`*imported from ${o.from}*`);
      }
      return lines.join('\n\n');
    }
    case 'type_field':
      return [code(`${t.text}: ${t.type}`), widthNote(types, t.type)].filter(Boolean).join('\n\n');
    case 'setting': {
      const d = t.def;
      const facts = [
        d.kind === 'time' ? 'a time' : d.kind === 'number' ? 'a number' : `one of: ${d.options.join(', ')}`,
        d.default !== undefined ? `defaults to ${d.default}` : `has no default, so every ${t.sig.name} must choose one`,
      ];
      return [code(settingLine(d)), `A setting of ${t.sig.name} · ${facts.join(' · ')}`].join('\n\n');
    }
    case 'operator': {
      const op = OPERATOR_INFO[t.name];
      const count = op.max === op.min ? `${op.min}` : `${op.min} or more`;
      return [code(`${t.name}{...}`), `${op.what}. Takes ${count} value${op.min === 1 && op.max === 1 ? '' : 's'}.`].join('\n\n');
    }
    case 'read_field':
      return [code(`.${t.name}`), t.what].join('\n\n');
    case 'medium': {
      const m = MEDIA[t.name];
      const facts = [
        m.what,
        m.kind === 'event'
          ? 'An event: it exists only in the tick it arrives, so it is read with HEAR.'
          : 'A level: it persists, so it can be watched with WAIT or CHANGE.',
      ];
      const delivery = Object.entries(m.delivery);
      if (delivery.length > 0) {
        facts.push(`The link fills in: ${delivery.map(([k, v]) => `\`${k}\` (${v})`).join(', ')}.`);
      }
      return [code(`strength{${t.name}}`), facts.join(' ')].join('\n\n');
    }
    case 'module':
      return code(`USE ${t.name}`) + `\n\n${t.path}`;
  }
  return undefined;
}

export interface Loc {
  path?: string;
  range: Range;
}

export function definitionFor(t: Target, model: Model, docPath: string | undefined): Loc | undefined {
  switch (t.kind) {
    case 'component':
      return t.sig.defRange ? { path: t.sig.defPath ?? docPath, range: t.sig.defRange } : undefined;
    case 'instance':
      return { path: docPath, range: t.inst.defRange };
    case 'port':
      return t.port.defRange ? { path: t.sig.defPath ?? docPath, range: t.port.defRange } : undefined;
    case 'value':
      return t.value.defRange ? { path: docPath, range: t.value.defRange } : undefined;
    case 'type': {
      const o = model.types.origins.get(t.name);
      return o?.range ? { path: o.path ?? docPath, range: o.range } : undefined;
    }
    case 'setting':
      return t.def.defRange ? { path: t.sig.defPath ?? docPath, range: t.def.defRange } : undefined;
    case 'module':
      return { path: t.path, range: { start: { line: 0, character: 0 }, end: { line: 0, character: 0 } } };
  }
  return undefined;
}

// ---------------------------------------------------------------------------
// Completion
// ---------------------------------------------------------------------------

const KEYWORDS: [string, string, string?][] = [
  ['WAIT', 'WAIT(${1:signal}):\n\t$0', 'runs its body on a rising edge'],
  ['CHANGE', 'CHANGE(${1:signal}):\n\t$0', 'runs its body on either edge'],
  ['AFTER', 'AFTER(${1:1rt}):\n\t$0', 'runs its body that long after the event around it'],
  ['HEAR', 'HEAR(${1:vib} IN ${2:heard}):\n\t$0', 'runs when an arrival gets through'],
  ['ACCEPT', 'ACCEPT', 'on a filter arm: this arrival is a candidate'],
  ['EACH', 'EACH ${1:i} IN ${2:0..3}:\n\t$0', 'builds its body once per value'],
  ['SEQ', 'SEQ(${1:1rt}):\n\t$0', 'each line fires that long after the last'],
  ['SETTING', 'SETTING ${1:name}: ${2:0..15} = ${3:0}', 'a build-time setting'],
  ['INVENTORY', 'INVENTORY ${1|slots,output,capacity|}: $0', 'an inventory property'],
  ['TYPE', 'TYPE ${1:name}: ${2:{bit{0..3\\}\\}}', 'a named type'],
  ['USE', 'USE ${1:module}: [$0]', 'import components and types'],
  ['NOP', 'NOP', 'does nothing'],
];

function item(label: string, kind: CompletionItemKind, detail?: string, extra: Partial<CompletionItem> = {}): CompletionItem {
  return { label, kind, detail, ...extra };
}

function componentItem(sig: Sig): CompletionItem {
  return item(sig.name, CompletionItemKind.Class, sig.declText, {
    documentation: { kind: MarkupKind.Markdown, value: sigMarkdown(sig) },
  });
}

function typeItems(types: TypeEnv): CompletionItem[] {
  const out = BUILTIN_TYPES.map((t) => item(t, CompletionItemKind.Keyword, 'built-in type'));
  for (const [name, def] of types.defs) {
    out.push(item(name, CompletionItemKind.Struct, def));
  }
  return out;
}

/**
 * The HEAR variables in effect on this line, each with the port it listens
 * on: `vib` -> `heard`, from HEAR(vib IN heard).
 */
function hearVarsAbove(lines: string[], line: number): Map<string, string> {
  const out = new Map<string, string>();
  const indent = (s: string) => s.length - s.trimStart().length;
  const here = indent(lines[line] ?? '');
  for (let i = line - 1; i >= 0; i--) {
    const m = /^\s*HEAR\s*\(\s*([A-Za-z_&][\w&]*)\s+IN\s+([A-Za-z_&][\w&]*)/.exec(lines[i]);
    if (m && indent(lines[i]) < here) {
      out.set(m[1], m[2]);
    }
    if (/^[\d*]*\[[A-Za-z_&][\w&]*\][\d*]*\s*[=~]>/.test(lines[i])) {
      break;
    }
  }
  return out;
}

function moduleCandidates(ws: FileWorkspace, docPath: string | undefined): string[] {
  if (!docPath) {
    return [];
  }
  const out = new Set<string>();
  const dir = path.dirname(docPath);
  const walkDir = (base: string, rel: string, depth: number) => {
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(path.join(base, rel), { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      if (e.name.startsWith('.') || e.name === 'node_modules') {
        continue;
      }
      const r = rel ? `${rel}/${e.name}` : e.name;
      if (e.isDirectory() && depth < 3) {
        walkDir(base, r, depth + 1);
      } else {
        const m = new RegExp(`^(.*)\\.(${EXTENSIONS.join('|')})$`).exec(r);
        if (m && path.join(base, r) !== docPath) {
          out.add(m[1]);
        }
      }
    }
  };
  walkDir(dir, '', 0);
  return [...out].sort();
}

export function completionsAt(
  model: Model,
  ws: FileWorkspace,
  docPath: string | undefined,
  text: string,
  line: number,
  character: number,
  /** true when a trigger character (like `:` or a space) opened completion:
   *  then only suggestions specific to that spot are offered, never the
   *  everything-list, which would pop up on every space. */
  onlySpecific = false,
): CompletionItem[] {
  const lines = text.split('\n');
  const full = lines[line] ?? '';
  const before = full.slice(0, character);
  const after = full.slice(character);
  const scope = scopeAt(model, line);
  const NAME = '[A-Za-z_&][\\w&]*';

  // USE module: [ ... ]   names declared there
  let m = new RegExp(`^\\s*USE\\s+([\\w/]+)\\s*:\\s*\\[([^\\]]*)$`).exec(before);
  if (m) {
    const p = ws.findModule(m[1], docPath);
    const got = p ? ws.declsIn(p) : undefined;
    if (!got) {
      return [];
    }
    const listed = new Set(m[2].split(',').map((x) => x.trim().split(':')[0].trim()));
    const out: CompletionItem[] = [];
    for (const sig of got.decls.values()) {
      if (!listed.has(sig.name)) {
        out.push(componentItem({ ...sig, origin: `in ${m[1]}` }));
      }
    }
    for (const [name, def] of got.types) {
      if (!listed.has(name)) {
        out.push(item(name, CompletionItemKind.Struct, `TYPE ${name}: ${def}`));
      }
    }
    return out;
  }
  // USE path   files next to this one
  if (/^\s*USE\s+[\w/]*$/.test(before)) {
    return moduleCandidates(ws, docPath).map((mod) => item(mod, CompletionItemKind.Module, 'module'));
  }

  // [part]: Type{name: value, ...}
  m = new RegExp(`\\]\\s*:\\s*(${NAME})\\{([^{}]*)$`).exec(before);
  if (m) {
    const sig = model.known.get(m[1]);
    if (!sig) {
      return [];
    }
    const inside = m[2];
    const vm = new RegExp(`(?:^|,)\\s*(${NAME})\\s*:\\s*[\\w.]*$`).exec(inside);
    if (vm) {
      const def = sig.settings.get(vm[1]);
      if (!def) {
        return [];
      }
      const vals =
        def.kind === 'choice'
          ? def.options
          : def.kind === 'time'
            ? ['1rt', '2rt', '3rt', '4rt', '1gt', '2gt'].filter((t) => {
                const gt = /rt$/.test(t) ? Number(t.slice(0, -2)) * 2 : Number(t.slice(0, -2));
                return (def.lo === undefined || gt >= def.lo) && (def.hi === undefined || gt <= def.hi);
              })
            : def.lo !== undefined
              ? [String(def.lo), ...(def.hi !== undefined ? [String(def.hi)] : [])]
              : [];
      const out = vals.map((v) => item(v, CompletionItemKind.Value, settingLine(def)));
      if (scope?.sig) {
        for (const [name, own] of scope.sig.settings) {
          if (own.kind === def.kind) {
            out.push(item(name, CompletionItemKind.Variable, `this component's own setting (${own.allowedText})`));
          }
        }
      }
      return out;
    }
    const chosen = new Set([...inside.matchAll(new RegExp(`(${NAME})\\s*:`, 'g'))].map((x) => x[1]));
    return sig.settingOrder
      .filter((n) => !chosen.has(n))
      .map((n) => {
        const def = sig.settings.get(n)!;
        return item(n, CompletionItemKind.Property, settingLine(def), {
          insertText: `${n}: `,
          sortText: def.default === undefined ? '0' + n : '1' + n,
        });
      });
  }

  // [part]: Type   component names
  if (new RegExp(`^\\s*\\[[^\\]]*\\]\\s*:\\s*(${NAME})?$`).test(before)) {
    return [...model.known.values()].map(componentItem);
  }

  // [part]port   output ports, right after the bracket
  m = new RegExp(`\\[([^\\[\\]]*)\\](${NAME})?$`).exec(before);
  if (m && !/^\s*\[[^\]]*\]\s*$/.test(before.trim() === '' ? 'x' : '')) {
    const refs = m[1].split(',').map((r) => r.trim().replace(/\{.*$/, ''));
    if (refs.length === 1 && refs[0]) {
      const part = partOf(refs[0], scope, model);
      const outs = part?.sig?.outPorts.filter((p) => !p.implicit) ?? [];
      if (outs.length > 0 || m[2]) {
        return outs.map((p) =>
          item(p.name, CompletionItemKind.Field, portLine(p, p.emits ? '~>' : '=>'), {
            documentation: { kind: MarkupKind.Markdown, value: `output of ${part!.sig!.name}` },
          }),
        );
      }
    }
  }

  // port[part]   when the part is already written after the cursor
  const am = new RegExp(`^(${NAME})?\\[([^\\]]*)\\]`).exec(after);
  const bm = new RegExp(`(${NAME})?$`).exec(before);
  if (am && bm && /(?:->|~>|\s)$|^$/.test(before.slice(0, before.length - (bm[1]?.length ?? 0)).trimEnd() + ' ')) {
    const refName0 = am[2].split(',')[0].trim().replace(/\{.*$/, '');
    const part = partOf(refName0, scope, model);
    if (part?.sig) {
      return part.sig.inPorts.map((p) =>
        item(p.name, CompletionItemKind.Field, portLine(p, '->'), {
          documentation: { kind: MarkupKind.Markdown, value: `input of ${part.sig!.name}` },
        }),
      );
    }
  }

  // Types: after the colon of a port, state, or TYPE declaration
  if (
    new RegExp(`^\\s*(?:->|=>|~>)\\s*(?:\\d+(?:\\.\\.(?:\\d+|\\*))?\\[${NAME}\\]|${NAME})\\s*:\\s*[\\w.{}]*$`).test(before) ||
    new RegExp(`^\\s*TYPE\\s+${NAME}\\s*:\\s*[\\w.{}]*$`).test(before) ||
    new RegExp(`^[\\d*]+\\[${NAME}\\][\\d*]+\\s*[=~]>\\s*[\\w.{}]*$`).test(before) ||
    new RegExp(`^\\s*${NAME}\\s*:\\s*[\\w.{}]*$`).test(before)
  ) {
    // strength{   how it travels, or how many lanes
    if (new RegExp(`${NAME}\\{${NAME}?$`).test(before)) {
      return MEDIUM_NAMES.map((name) =>
        item(name, CompletionItemKind.EnumMember, MEDIA[name].what, {
          documentation: {
            kind: MarkupKind.Markdown,
            value:
              MEDIA[name].kind === 'event'
                ? 'An event: read it with HEAR.'
                : 'A level: it persists, like a wire.',
          },
        }),
      );
    }
    const tm = new RegExp(`(${NAME}(?:\\.${NAME})*)\\.(${NAME})?$`).exec(before);
    if (tm) {
      const r = model.types.resolveProjection(tm[1] + '.x');
      const headDef = model.types.defs.get(tm[1]);
      let recordText: string | undefined;
      if (headDef !== undefined) {
        recordText = headDef;
      } else {
        const inner = model.types.resolveProjection(tm[1]);
        if (inner && inner.ok) {
          recordText = model.types.defs.get(inner.type) ?? inner.type;
        }
      }
      void r;
      const flds = model.types.recordFields(recordText);
      return (flds ?? []).map((f) => item(f.name, CompletionItemKind.Field, f.type));
    }
    return typeItems(model.types);
  }

  // vib.dist   what a HEAR's arrival lets you read
  m = new RegExp(`(${NAME})\\.(${NAME})?$`).exec(before);
  if (m) {
    const source = hearVarsAbove(lines, line).get(m[1]);
    const ty = source !== undefined ? scope?.values.get(source)?.type : scope?.values.get(m[1])?.type;
    return Object.entries(readableFields(model.types, ty)).map(([k, v]) =>
      item(k, CompletionItemKind.Field, v),
    );
  }

  // Durations: AFTER( and -(
  if (/(?:AFTER|SEQ)\s*\(\s*[\w]*$/.test(before) || /-\(\s*\w*$/.test(before)) {
    const out = ['1rt', '2rt', '4rt', '1gt', '2gt'].map((t) => item(t, CompletionItemKind.Constant, 'a time'));
    if (scope?.sig) {
      for (const [name, def] of scope.sig.settings) {
        if (def.kind === 'time') {
          out.unshift(item(name, CompletionItemKind.Variable, settingLine(def)));
        }
      }
    }
    return out;
  }

  // WAIT( CHANGE( HEAR(x IN   signals
  if (/(?:WAIT|CHANGE)\s*\(\s*\w*$/.test(before) || new RegExp(`HEAR\\s*\\(\\s*${NAME}\\s+IN\\s+\\w*$`).test(before)) {
    const wantVib = /HEAR/.test(before);
    const out: CompletionItem[] = [];
    for (const [name, v] of scope?.values ?? []) {
      if (v.kind === 'setting') {
        continue;
      }
      const isVib = /vibration/.test(v.type ?? '');
      if (wantVib === isVib || !wantVib) {
        out.push(item(name, CompletionItemKind.Variable, `${v.kind}: ${v.type ?? ''}`));
      }
    }
    return out;
  }

  // Anything else: values, parts, components, operators, keywords. Not after
  // a trigger character, and not at the end of a line that opens a block
  // (WAIT(a):  {x}?), where the next thing typed is a new line.
  if (onlySpecific || /[:?]\s*$/.test(before)) {
    return [];
  }
  const out: CompletionItem[] = [];
  for (const [name, v] of scope?.values ?? []) {
    out.push(item(name, v.kind === 'setting' ? CompletionItemKind.Constant : CompletionItemKind.Variable, `${v.kind}: ${v.setting?.allowedText ?? v.type ?? ''}`));
  }
  for (const [name, inst] of scope?.instances ?? []) {
    const idx = inst.dims ? `{${inst.dims.map(() => '').join(', ')}}` : '';
    out.push(
      item(`[${name}${inst.dims ? '{…}' : ''}]`, CompletionItemKind.Variable, inst.type, {
        filterText: `[${name}`,
        insertText: inst.dims ? `[${name}{$1}]` : `[${name}]`,
        insertTextFormat: InsertTextFormat.Snippet,
        documentation: inst.sig ? { kind: MarkupKind.Markdown, value: sigMarkdown(inst.sig) } : undefined,
      }),
    );
    void idx;
    for (const p of inst.sig?.inPorts ?? []) {
      out.push(
        item(`${p.name}[${name}${inst.dims ? '{…}' : ''}]`, CompletionItemKind.Field, portLine(p, '->'), {
          filterText: `${p.name}[${name}`,
          insertText: inst.dims ? `${p.name}[${name}{$1}]` : `${p.name}[${name}]`,
          insertTextFormat: InsertTextFormat.Snippet,
          sortText: 'z' + p.name,
        }),
      );
    }
  }
  for (const sig of model.known.values()) {
    out.push({ ...componentItem(sig), sortText: 'y' + sig.name });
  }
  for (const [name, op] of Object.entries(OPERATOR_INFO)) {
    out.push(
      item(`${name}{…}`, CompletionItemKind.Function, op.what, {
        filterText: name,
        insertText: `${name}{$1}`,
        insertTextFormat: InsertTextFormat.Snippet,
      }),
    );
  }
  for (const [kw, snippet, what] of KEYWORDS) {
    out.push(
      item(kw, CompletionItemKind.Keyword, what, {
        insertText: snippet,
        insertTextFormat: InsertTextFormat.Snippet,
      }),
    );
  }
  return out;
}

// ---------------------------------------------------------------------------
// Outline
// ---------------------------------------------------------------------------

export function symbolsFor(model: Model): DocumentSymbol[] {
  const out: DocumentSymbol[] = [];
  for (const td of kids(model.root, 'type_declaration')) {
    const n = field(td, 'name');
    if (n) {
      out.push({
        name: n.text,
        detail: field(td, 'definition')?.text,
        kind: SymbolKind.Struct,
        range: rangeOf(td),
        selectionRange: rangeOf(n),
      });
    }
  }
  const lines = model.lines;
  for (const sc of model.scopes) {
    const sig = sc.sig;
    if (!sig || !sig.defRange || sig.origin !== 'declared in this file') {
      continue;
    }
    let endLine = sc.endLine;
    while (endLine > sc.startLine && (lines[endLine] ?? '').trim() === '') {
      endLine--;
    }
    const range: Range = {
      start: { line: sc.startLine, character: 0 },
      end: { line: endLine, character: (lines[endLine] ?? '').length },
    };
    const children: DocumentSymbol[] = [];
    const push = (name: string, detail: string, kind: SymbolKind, r?: Range) => {
      if (r) {
        children.push({ name, detail, kind, range: r, selectionRange: r });
      }
    };
    for (const name of sig.settingOrder) {
      const d = sig.settings.get(name)!;
      push(name, `SETTING ${d.allowedText ?? ''}`, SymbolKind.Constant, d.defRange);
    }
    for (const p of sig.inPorts) {
      push(p.name, `-> ${p.type ?? ''}`, SymbolKind.Field, p.defRange);
    }
    for (const p of sig.outPorts) {
      if (!p.implicit) {
        push(p.name, `${p.emits ? '~>' : '=>'} ${p.type ?? ''}`, SymbolKind.Field, p.defRange);
      }
    }
    for (const [name, inst] of sc.instances) {
      push(name, inst.type ?? '', SymbolKind.Object, inst.defRange);
    }
    out.push({
      name: sig.name,
      detail: sig.declText,
      kind: SymbolKind.Class,
      range,
      selectionRange: sig.defRange,
      children,
    });
  }
  return out;
}

// ---------------------------------------------------------------------------
// Colors (semantic tokens)
// ---------------------------------------------------------------------------

export const TOKEN_TYPES = ['class', 'property', 'function', 'type'];
export const TOKEN_MODIFIERS = ['defaultLibrary'];

export function tokensFor(model: Model): number[] {
  const kindIndex: Record<string, [number, number]> = {
    component: [0, 0],
    port: [1, 0],
    operator: [2, 1],
    type: [3, 0],
  };
  const marks = model.marks
    .filter((mk) => mk.range.start.line === mk.range.end.line && mk.range.end.character > mk.range.start.character)
    .sort((a, b) => a.range.start.line - b.range.start.line || a.range.start.character - b.range.start.character);
  const data: number[] = [];
  let prevLine = 0;
  let prevChar = 0;
  let lastEnd = { line: -1, character: -1 };
  for (const mk of marks) {
    const { line, character } = mk.range.start;
    // No overlaps: a name marked twice is colored once.
    if (line < lastEnd.line || (line === lastEnd.line && character < lastEnd.character)) {
      continue;
    }
    const [type, mods] = kindIndex[mk.kind];
    data.push(line - prevLine, line === prevLine ? character - prevChar : character, mk.range.end.character - character, type, mods);
    prevLine = line;
    prevChar = character;
    lastEnd = mk.range.end;
  }
  return data;
}

export { fields };
