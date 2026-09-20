// Types: widths, records, projections. Each analysis gets its own TypeEnv,
// holding the TYPEs declared in that file and the ones it imports.

export const BASE_WIDTH: Record<string, number> = {
  bit: 1,
  strength: 1,
  tuple: 2,
  nibble: 4,
  byte: 8,
  vibration: 1,
};

/** The largest value each type can hold. */
export const LEVELS: Record<string, number> = { bit: 1, strength: 15, tuple: 3, nibble: 15, byte: 255 };

export const BUILTIN_TYPES = ['bit', 'strength', 'byte', 'nibble', 'tuple', 'int', 'unknown', 'vibration'];

const NAME = '[A-Za-z_&][A-Za-z0-9_&]*';
const RANGE_ARG = /^\{\s*(\d+)\s*\.\.\s*(\d+)\s*\}$/;

export function norm(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

/** Splits "a, b{c, d}, e" at its top-level commas. */
export function splitTop(text: string): string[] {
  const parts: string[] = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '{') {
      depth++;
    } else if (c === '}') {
      depth--;
    } else if (c === ',' && depth === 0) {
      parts.push(text.slice(start, i).trim());
      start = i + 1;
    }
  }
  parts.push(text.slice(start).trim());
  return parts;
}

/** "name{...}" where the braces are one balanced group reaching the end. */
function nameWithArg(text: string): [string, string] | undefined {
  const m = new RegExp(`^(${NAME})(\\{.*\\})$`).exec(text);
  if (!m || !balancedWhole(m[2])) {
    return undefined;
  }
  return [m[1], m[2]];
}

/** True when `s` is one brace group: "{...}" whose first brace closes at the end. */
function balancedWhole(s: string): boolean {
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '{') {
      depth++;
    } else if (s[i] === '}') {
      depth--;
      if (depth === 0 && i !== s.length - 1) {
        return false;
      }
    }
  }
  return depth === 0 && s.startsWith('{');
}

/** The balanced "{...}" at the very end of a string, or ''. */
export function trailingGroup(s: string): string {
  if (!s.endsWith('}')) {
    return '';
  }
  let depth = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '}') {
      depth++;
    } else if (s[i] === '{') {
      depth--;
      if (depth === 0) {
        return s.slice(i);
      }
    }
  }
  return '';
}

export interface RecordField {
  name: string;
  type: string;
}

export class TypeEnv {
  /** TYPE name -> definition text */
  defs = new Map<string, string>();
  /** TYPE name -> where it was declared, for go-to-definition and hover */
  origins = new Map<string, { path?: string; range?: import('./tree').Range; from?: string }>();

  /** The fields of a record type, in order, or undefined if it isn't one. */
  recordFields(text: string | undefined): RecordField[] | undefined {
    if (typeof text !== 'string') {
      return undefined;
    }
    const m = /^\{(.*)\}$/s.exec(text.trim());
    if (!m || !new RegExp(`^\\s*${NAME}\\s*:`).test(m[1])) {
      return undefined;
    }
    const out: RecordField[] = [];
    for (const part of splitTop(m[1])) {
      const pm = new RegExp(`^(${NAME})\\s*:\\s*(.*?)\\s*$`, 's').exec(part);
      if (!pm) {
        return undefined;
      }
      out.push({ name: pm[1], type: pm[2] });
    }
    return out;
  }

  /**
   * transmission.data{vibration} -> ['nibble', '{vibration}', 'transmission'].
   * Returns { ok: false, reason } when the path doesn't work, and undefined
   * when the text isn't a projection at all.
   */
  resolveProjection(
    text: string | undefined,
  ): { ok: true; type: string; arg: string; head: string } | { ok: false; reason: string } | undefined {
    if (typeof text !== 'string') {
      return undefined;
    }
    text = norm(text);
    const hm = new RegExp(`^${NAME}`).exec(text);
    if (!hm || text[hm[0].length] !== '.') {
      return undefined;
    }
    const head = hm[0];
    if (!this.defs.has(head)) {
      if (BASE_WIDTH[head] !== undefined) {
        return { ok: false, reason: `"${head}" is a built-in type, not a record, so it has no fields` };
      }
      return { ok: false, reason: `unknown type "${head}"; declare it with TYPE or import it with USE` };
    }
    let rest = text.slice(head.length);
    let current = head;
    let shown = head;
    for (;;) {
      const fm = new RegExp(`^\\.(${NAME})(.*)$`, 's').exec(rest);
      if (!fm) {
        break;
      }
      const fname = fm[1];
      const flds = this.recordFields(this.defs.get(current) ?? current);
      if (!flds) {
        return { ok: false, reason: `"${shown}" is not a record, so it has no field "${fname}"` };
      }
      const found = flds.find((f) => f.name === fname);
      if (!found) {
        return {
          ok: false,
          reason: `${shown} has no field "${fname}"; its fields are: ${flds.map((f) => f.name).join(', ')}`,
        };
      }
      current = found.type;
      shown = `${shown}.${fname}`;
      rest = fm[2];
    }
    return { ok: true, type: current, arg: rest, head };
  }

  /** Pin width of a type written as text, or undefined when it has none fixed. */
  width(text: string | undefined | false | null, depth = 0): number | undefined {
    if (typeof text !== 'string') {
      return undefined;
    }
    if (depth > 16) {
      return undefined; // a type defined in terms of itself
    }
    text = norm(text);
    if (BASE_WIDTH[text] !== undefined) {
      return BASE_WIDTH[text];
    }
    const proj = this.resolveProjection(text);
    if (proj && proj.ok) {
      const w = this.width(proj.type, depth + 1);
      if (proj.arg === '') {
        return w;
      }
      const rm = RANGE_ARG.exec(proj.arg);
      if (rm) {
        return w !== undefined ? w * (Math.abs(Number(rm[2]) - Number(rm[1])) + 1) : undefined;
      }
      const lane = this.width(proj.arg.slice(1, -1), depth + 1);
      return w !== undefined && lane !== undefined ? w * lane : undefined;
    } else if (new RegExp(`^${NAME}\\.`).test(text)) {
      return undefined; // a projection that doesn't resolve; reported elsewhere
    }
    const im = /^\{(.*)\}$/s.exec(text);
    if (im) {
      const inner = im[1];
      const parts = splitTop(inner);
      if (inner.includes(':') && new RegExp(`^${NAME}\\s*:`).test(parts[0])) {
        let total = 0; // a record
        for (const part of parts) {
          const pm = new RegExp(`^${NAME}\\s*:\\s*(.*)$`, 's').exec(part);
          const w = this.width(pm ? pm[1] : undefined, depth + 1);
          if (w === undefined) {
            return undefined;
          }
          total += w;
        }
        return total;
      } else if (parts.length > 1) {
        return undefined; // an enum: one name at a time, not pins
      } else if (/\{\s*\d+\s*\.\.\s*\d+\s*\}$/.test(inner)) {
        return this.width(inner, depth + 1); // a bundle with its size given
      }
      return undefined; // a bundle each part decides
    }
    const na = nameWithArg(text);
    if (na) {
      const [name, arg] = na;
      const base = this.width(name, depth + 1);
      const rm = RANGE_ARG.exec(arg);
      if (rm) {
        return base !== undefined ? base * (Math.abs(Number(rm[2]) - Number(rm[1])) + 1) : undefined;
      }
      const lane = this.width(arg.slice(1, -1), depth + 1);
      return base !== undefined && lane !== undefined ? base * lane : undefined;
    }
    const def = this.defs.get(text);
    if (def !== undefined) {
      return this.width(def, depth + 1);
    }
    return undefined;
  }

  /** A bundle whose size each part decides, like {bit}. */
  isVariadic(text: string | undefined): boolean {
    if (typeof text !== 'string' || !/^\{.*\}$/s.test(text)) {
      return false;
    }
    const inner = text.slice(1, -1);
    if (splitTop(inner).length > 1 || new RegExp(`^\\s*${NAME}\\s*:`).test(inner)) {
      return false;
    }
    return this.width(text) === undefined;
  }
}
