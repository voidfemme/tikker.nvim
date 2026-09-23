#!/usr/bin/env node
// Checks .tkr files from the command line, printing one line per problem:
//   file:line:col [ERROR|WARN] message
// Handy in scripts and CI, and used to compare against the Neovim checker.
//
// With --timing it prints each component's latencies instead: how long every
// event takes to reach every output.

import * as path from 'path';
import { analyze, ERROR, showDelays } from './analyze';
import { initParser } from './parser';
import { FileWorkspace } from './workspace';

async function main() {
  const args = process.argv.slice(2);
  const timing = args.includes('--timing');
  const files = args.filter((a) => !a.startsWith('--'));
  if (files.length === 0) {
    console.error('usage: tikker-check [--timing] FILE.tkr...');
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
    if (timing) {
      for (const scope of model.scopes) {
        const sig = scope.sig;
        if (!sig) {
          continue;
        }
        const paths = sig.timing ?? [];
        console.log(`${sig.name}:${paths.length === 0 ? ' no timed path from an event to an output' : ''}`);
        const rows = paths.map((t) => [`${t.from} -> ${t.to}`, showDelays(t.delays)] as [string, string]);
        const w = rows.length > 0 ? Math.max(...rows.map((r) => r[0].length)) : 0;
        for (const r of rows) {
          console.log(`  ${r[0].padEnd(w)}   ${r[1]}`);
        }
      }
      continue;
    }
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
