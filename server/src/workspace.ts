// How the analysis finds and reads other files: `USE circuits/tff` is
// tried next to the current file, then at the git root. Open documents win
// over what's on disk, so unsaved edits are seen by the files importing them.

import * as fs from 'fs';
import * as path from 'path';
import { Decls, readDecls, Workspace } from './analyze';

export const EXTENSIONS = ['tkr', 'tikker'];

export class FileWorkspace implements Workspace {
  /** path -> text of documents open in the editor */
  open = new Map<string, string>();
  private cache = new Map<string, { key: string; decls: Decls }>();

  constructor(public extensions: string[] = EXTENSIONS) {}

  findModule(modpath: string, fromPath: string | undefined): string | undefined {
    if (!fromPath) {
      return undefined;
    }
    const dir = path.dirname(fromPath);
    const bases = [dir];
    const root = gitRoot(dir);
    if (root && root !== dir) {
      bases.push(root);
    }
    for (const base of bases) {
      for (const ext of this.extensions) {
        const p = path.join(base, `${modpath}.${ext}`);
        if (this.open.has(p) || fs.existsSync(p)) {
          return p;
        }
      }
    }
    return undefined;
  }

  declsIn(p: string): Decls | undefined {
    let text: string | undefined;
    let key: string;
    const openText = this.open.get(p);
    if (openText !== undefined) {
      text = openText;
      key = 'open:' + hash(openText);
    } else {
      let st: fs.Stats;
      try {
        st = fs.statSync(p);
      } catch {
        return undefined;
      }
      key = `disk:${st.mtimeMs}:${st.size}`;
    }
    const cached = this.cache.get(p);
    if (cached && cached.key === key) {
      return cached.decls;
    }
    if (text === undefined) {
      try {
        text = fs.readFileSync(p, 'utf8');
      } catch {
        return undefined;
      }
    }
    const decls = readDecls(text, p);
    this.cache.set(p, { key, decls });
    return decls;
  }

  /** The text of a file, open or on disk. */
  textOf(p: string): string | undefined {
    const t = this.open.get(p);
    if (t !== undefined) {
      return t;
    }
    try {
      return fs.readFileSync(p, 'utf8');
    } catch {
      return undefined;
    }
  }
}

function gitRoot(dir: string): string | undefined {
  let d = dir;
  for (;;) {
    if (fs.existsSync(path.join(d, '.git'))) {
      return d;
    }
    const up = path.dirname(d);
    if (up === d) {
      return undefined;
    }
    d = up;
  }
}

function hash(s: string): string {
  let h = 5381;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  }
  return `${s.length}:${h}`;
}
