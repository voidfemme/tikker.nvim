#!/usr/bin/env node
// Checks .tkr files from the command line, printing one line per problem:
//   file:line:col [ERROR|WARN] message
// Handy in scripts and CI, and used to compare against the Neovim checker.

import * as path from 'path';
import { analyze, ERROR } from './analyze';
import { initParser } from './parser';
import { FileWorkspace } from './workspace';

async function main() {
  const files = process.argv.slice(2);
  if (files.length === 0) {
    console.error('usage: tikker-check FILE.tkr...');
    process.exit(2);
  }
  await initParser();
  const ws = new FileWorkspace();
  let errors = 0;
  for (const f of files) {
    const p = path.resolve(f);
    const text = ws.textOf(p);
    if (text === undefined) {
      console.error(`${f}: cannot read`);
      errors++;
      continue;
    }
    const model = analyze(text, p, ws);
    const ds = [...model.diagnostics].sort(
      (a, b) => a.range.start.line - b.range.start.line || a.range.start.character - b.range.start.character,
    );
    for (const d of ds) {
      const sev = d.severity === ERROR ? 'ERROR' : 'WARN';
      if (d.severity === ERROR) {
        errors++;
      }
      console.log(`${f}:${d.range.start.line + 1}:${d.range.start.character + 1} [${sev}] ${d.message}`);
    }
  }
  process.exit(errors > 0 ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(2);
});
