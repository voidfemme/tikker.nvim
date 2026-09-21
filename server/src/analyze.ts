// The Tikker checker (first written in Lua as sculknet.lua, then ported here).
// It reports diagnostics, marks names for coloring, and keeps a model of
// what every name means, which hover, go-to-definition, and completion use.

import { parse } from './parser';
import { field, fields, first, hasAncestor, kids, Node, Range, rangeOf, spanOf, walk } from './tree';
import { BASE_WIDTH, LEVELS, norm, trailingGroup, TypeEnv } from './types';

export const ERROR = 1;
export const WARN = 2;
export type Severity = typeof ERROR | typeof WARN;

export interface Config {
  unknownComponentSeverity: Severity;
  undeclaredSignalSeverity: Severity;
  wiredOrSeverity: Severity;
  unusedPinSeverity: Severity;
}

export const DEFAULT_CONFIG: Config = {
  unknownComponentSeverity: ERROR,
  undeclaredSignalSeverity: ERROR,
  wiredOrSeverity: WARN,
  unusedPinSeverity: WARN,
};

export interface Diag {
  range: Range;
  message: string;
  severity: Severity;
  /** [name, base] for "unknown name" errors, which a syntax error nearby can explain */
  unknown?: [string, string];
  syntax?: boolean;
}

export type MarkKind = 'component' | 'port' | 'operator' | 'type';
export interface Mark {
  range: Range;
  kind: MarkKind;
}

export interface Port {
  name: string;
  idNode?: Node;
  pinsNode?: Node;
  unwiredNode?: Node;
  type?: string;
  variadic: boolean;
  emits: boolean;
  open: boolean;
  optional: boolean;
  implicit?: boolean;
  s?: number;
  e?: number;
  min?: number;
  max?: number;
  /** where it's declared, for go-to-definition */
  defRange?: Range;
}

export interface SettingDef {
  name: string;
  kind: 'time' | 'number' | 'choice';
  lo?: number;
  hi?: number;
  loName?: string;
  hiName?: string;
  /** a default written as another setting's name: SETTING page: ... = book */
  defaultName?: string;
  options: string[];
  optionSet: Set<string>;
  default?: string;
  /** the allowed values as written: 1rt..4rt, 0..15, {compare, subtract} */
  allowedText?: string;
  node?: Node;
  defRange?: Range;
}

export interface Sig {
  name: string;
  emits: boolean;
  inputs: number | '*';
  inMin?: number;
  inMax?: number;
  outputs: number | '*';
  outMin?: number;
  outMax?: number;
  ret: string;
  declText: string;
  inPorts: Port[];
  outPorts: Port[];
  settings: Map<string, SettingDef>;
  settingOrder: string[];
  varIn?: Port;
  varOut?: Port;
  declaredOutputs: number;
  origin?: string;
  /** file and range of the declaration, for go-to-definition */
  defPath?: string;
  defRange?: Range;
}

export interface Value {
  kind: 'input' | 'output' | 'setting' | 'state' | 'wire';
  type?: string;
  setting?: SettingDef;
  enumDef?: EnumDef;
  driven?: boolean;
  defRange?: Range;
}

export interface EnumDef {
  name: string;
  options: string[];
  optionSet: Set<string>;
}

export interface Instance {
  sig?: Sig;
  type?: string;
  dims?: [number, number][];
  dimsBad?: boolean;
  node: Node;
  used: boolean;
  defRange: Range;
}

export interface ScopeInfo {
  sig?: Sig;
  /** first and last line the component covers */
  startLine: number;
  endLine: number;
  values: Map<string, Value>;
  instances: Map<string, Instance>;
}

export interface ImportInfo {
  module: string;
  path?: string;
  range: Range;
}

export interface Model {
  tree: import('web-tree-sitter').Tree;
  diagnostics: Diag[];
  marks: Mark[];
  known: Map<string, Sig>;
  types: TypeEnv;
  scopes: ScopeInfo[];
  imports: ImportInfo[];
  root: Node;
  lines: string[];
}

/** What another file makes available to `USE`. */
export interface Decls {
  decls: Map<string, Sig>;
  broken: boolean;
  types: Map<string, string>;
  typeRanges: Map<string, Range>;
}

/** How the analysis reaches other files. */
export interface Workspace {
  findModule(modpath: string, fromPath: string | undefined): string | undefined;
  declsIn(path: string): Decls | undefined;
}

const OPERATORS: Record<
    string, 
    { min: number; max?: number; what: string; wide?: boolean; wideUnlessSignal?: boolean }
    > = {
  max: { min: 2, what: 'the strongest of its values' },
  min: { min: 2, what: 'the least of its values' },
  sub: { min: 2, max: 2, what: 'the first value minus the second, never below 0' },
  sum: { 
      min: 2, 
      what: 'the total of its values, never above 15 once a value travels on a pin', 
      wideUnlessSignal: true 
  },
  mod: { min: 2, max: 2, what: 'the remainder of the first value divided by the second' },
  mul: { min: 2, what: 'the product of its values', wide: true },
  div: { min: 2, max: 2, what: 'the first value divided by the second', wide: true },
  floor: { min: 1, max: 1, what: 'its value rounded down to a whole number', wide: true },
};
export const OPERATOR_INFO = OPERATORS;

/** Fields of structured values, read as vib.freq and built as {freq: ...}. */
export const FIELDS: Record<string, Record<string, string>> = {
  vibration: {
    freq: 'its frequency, 1..15',
    dist: 'how far it traveled, in blocks',
  },
};

function fieldList(ty: string): string {
  return Object.keys(FIELDS[ty] ?? {})
    .sort()
    .join(', ');
}

/** "2gt" -> 2, "1rt" -> 2 (a redstone tick is 2 game ticks). */
export function parseTime(text: string): number | undefined {
  const m = /^(\d+)([A-Za-z]{2})$/.exec(text);
  if (!m) {
    return undefined;
  }
  const n = Number(m[1]);
  if (m[2] === 'gt') {
    return n;
  } else if (m[2] === 'rt') {
    return n * 2;
  }
  return undefined;
}

/** 5 game ticks -> "5gt"; even counts also show redstone ticks: "4gt (2rt)". */
export function showTime(gt: number | undefined): string {
  if (gt === undefined) {
    return '?';
  }
  if (gt % 2 === 0) {
    return `${gt}gt (${Math.floor(gt / 2)}rt)`;
  }
  return `${gt}gt`;
}

/** "5", "5..6", or "2, 5..7" for a sorted list of pin numbers. */
function describePins(pins: number[]): string {
  const parts: string[] = [];
  let i = 0;
  while (i < pins.length) {
    let j = i;
    while (j < pins.length - 1 && pins[j + 1] === pins[j] + 1) {
      j++;
    }
    parts.push(i === j ? String(pins[i]) : `${pins[i]}..${pins[j]}`);
    i = j + 1;
  }
  return parts.join(', ');
}

/** "pins 0..8", "pin 0", or "no pins" for a component with n pins. */
export function pinSpan(n: number): string {
  if (n <= 0) {
    return 'no pins';
  } else if (n === 1) {
    return 'pin 0';
  }
  return `pins 0..${n - 1}`;
}

const s = (n: number) => (n === 1 ? '' : 's');

// ---------------------------------------------------------------------------
// Syntax errors
// ---------------------------------------------------------------------------

/** Older syntax the grammar rejects; the first match on a broken line becomes the hint. */
const HINTS: [RegExp, string][] = [
  [/^\s*[\d*]+\s*\[[^\]]*\]\s*[\d*]+\s*->/, 'declarations use "=>" for the return type, e.g. 1[NOT]1 => bit:'],
  [/^\s*-\[/, 'pattern arms use braces, e.g. -{0}-> instead of -[0]->'],
  [/^\s*\[.*\]\s*\?/, 'match subjects use braces, e.g. {a, b}? instead of [a, b]?'],
  [/->\s*\{\s*$/, 'arm bodies use ":" and an indented block instead of { ... }'],
  [/^\s*\}/, 'arm bodies use ":" and an indented block instead of { ... }'],
  [/^\s*USE\s/, 'USE must come before every other statement (comments above it are fine)'],
  [/->\s*[A-Za-z_&][A-Za-z0-9_&]*[ \t]+\[/, 'a port name must touch its bracket: param1[X], not param1 [X]'],
  [/\][ \t]+[A-Za-z_&][A-Za-z0-9_&]*\s*$/, 'a named output must touch its bracket: [X]low, not [X] low'],
  [/\][ \t]+[A-Za-z_&][A-Za-z0-9_&]*\s*->/, 'a named output must touch its bracket: [X]low, not [X] low'],
  [/^\s*WAIT\s*\([^()]*\)\s*->/, 'WAIT(x) starts a block, not a flow: write WAIT(x): and indent the flows under it'],
  [
    /[A-Za-z0-9_}]\s+[*/]\s+[A-Za-z0-9_{]/,
    'arithmetic is written as operator calls: mul{a, b} and div{a, b} instead of a * b and a / b',
  ],
];

const MISSING_NAMES: Record<string, string> = {
  _indent: 'an indented block',
  _dedent: 'the end of a block',
};

function isBlankOrComment(line: string): boolean {
  return /^\s*$/.test(line) || /^\s*\/\//.test(line);
}

function hintFor(lines: string[], sr: number, er: number): string | undefined {
  const order = [sr];
  for (let row = sr + 1; row <= er; row++) {
    order.push(row);
  }
  order.push(sr - 1, er + 1);
  for (const row of order) {
    const line = row >= 0 ? lines[row] : undefined;
    if (line !== undefined) {
      for (const [re, hint] of HINTS) {
        if (re.test(line)) {
          return row === sr ? hint : `${hint} (line ${row + 1})`;
        }
      }
    }
  }
  return undefined;
}

function snippet(node: Node): string {
  let text = (node.text.split('\n')[0] ?? '').trim();
  if ([...text].length > 30) {
    text = [...text].slice(0, 29).join('') + '…';
  }
  return text;
}

function collectSyntaxErrors(root: Node, lines: string[]): { diags: Diag[]; rows: Set<number> } {
  const byRow = new Map<number, Diag>();
  const rows = new Set<number>();

  const record = (node: Node, msg: string) => {
    const r = rangeOf(node);
    const sr = r.start.line;
    const er = r.end.line;
    for (let row = sr; row <= er; row++) {
      rows.add(row);
    }
    const existing = byRow.get(sr);
    if (existing) {
      const e = existing.range.end;
      if (er > e.line || (er === e.line && r.end.character > e.character)) {
        existing.range.end = { ...r.end };
      }
      return;
    }
    let end = r.end;
    if (er > sr) {
      end = { line: sr, character: (lines[sr] ?? '').length };
    }
    const hint = hintFor(lines, sr, er);
    byRow.set(sr, {
      range: { start: r.start, end },
      message: hint ? `${msg}; hint: ${hint}` : msg,
      severity: ERROR,
      syntax: true,
    });
  };

  const visit = (node: Node) => {
    if (node.type === 'ERROR') {
      const text = snippet(node);
      record(node, text !== '' ? `syntax error near "${text}"` : 'syntax error');
      return;
    }
    if (node.isMissing) {
      const hidden = MISSING_NAMES[node.type];
      record(
        node,
        hidden
          ? `syntax error: expected ${hidden} here`
          : `syntax error: something is missing here, such as "${node.type}"`,
      );
      return;
    }
    if (!node.hasError) {
      return;
    }
    for (const child of node.children) {
      if (child) {
        visit(child);
      }
    }
  };
  visit(root);

  const diags = [...byRow.values()].sort((a, b) => a.range.start.line - b.range.start.line);
  const runStart = new Map<number, number>();
  for (const d of diags) {
    const line = d.range.start.line;
    let prev = line - 1;
    while (prev >= 0 && lines[prev] !== undefined && isBlankOrComment(lines[prev])) {
      prev--;
    }
    if (prev >= 0 && byRow.has(prev)) {
      runStart.set(line, runStart.get(prev) ?? prev);
      if (!d.message.includes('; hint: ')) {
        d.message = `${d.message} (probably caused by the error on line ${(runStart.get(line) ?? prev) + 1})`;
      }
    }
  }
  return { diags, rows };
}

// ---------------------------------------------------------------------------
// Declarations and ports
// ---------------------------------------------------------------------------

function parseSignature(node: Node): Sig | undefined {
  const text = node.text;
  const m = /^([\d*]+)\s*\[\s*(.*?)\s*\]\s*([\d*]+)\s*([=~])>\s*(.*?)\s*:$/s.exec(text);
  if (!m) {
    return undefined;
  }
  const arity = (t: string): [number | '*', number | undefined, number | undefined] => {
    if (/^\d+$/.test(t)) {
      return [Number(t), undefined, undefined];
    }
    const am = /^(\d*)\*(\d*)$/.exec(t);
    return ['*', am && am[1] ? Number(am[1]) : undefined, am && am[2] ? Number(am[2]) : undefined];
  };
  const [inputs, inMin, inMax] = arity(m[1]);
  const [outputs, outMin, outMax] = arity(m[3]);
  const id = first(node, 'identifier');
  return {
    name: m[2],
    emits: m[4] === '~',
    inputs,
    inMin,
    inMax,
    outputs,
    outMin,
    outMax,
    ret: m[5],
    declText: text,
    inPorts: [],
    outPorts: [],
    settings: new Map(),
    settingOrder: [],
    declaredOutputs: 0,
    defRange: rangeOf(id ?? node),
  };
}

interface Component {
  decl?: Node;
  nodes: Node[];
}

/** A component runs from its declaration line to the next declaration. */
function splitComponents(root: Node): Component[] {
  const prelude: Component = { nodes: [] };
  const comps: Component[] = [prelude];
  let current = prelude;
  for (const child of root.children) {
    if (!child || !child.isNamed) {
      continue;
    }
    if (child.type === 'function_declaration') {
      current = { decl: child, nodes: [] };
      comps.push(current);
    } else if (child.type !== 'import_statement' && child.type !== 'comment') {
      current.nodes.push(child);
    }
  }
  return comps;
}

function readPorts(nodes: Node[], types: TypeEnv): [Port[], Port[]] {
  const inputs: Port[] = [];
  const outputs: Port[] = [];
  for (const n of nodes) {
    let holder: Node | undefined;
    let list: Port[] | undefined;
    if (n.type === 'input_parameter') {
      [holder, list] = [n, inputs];
    } else if (n.type === 'timing_parameter') {
      [holder, list] = [first(n, 'timing_annotation'), inputs];
    } else if (n.type === 'output_parameter' || n.type === 'emission_parameter') {
      [holder, list] = [n, outputs];
    }
    if (!holder || !list) {
      continue;
    }
    const ty = first(holder, 'type');
    const tytext = ty ? ty.text : undefined;
    let pending: Node | undefined;
    for (const child of kids(holder)) {
      if (child.type === 'pin_range') {
        pending = child;
      } else if (child.type === 'identifier') {
        const end = pending ? field(pending, 'end') : undefined;
        const unwired = field(holder, 'unwired');
        list.push({
          name: child.text,
          idNode: child,
          pinsNode: pending,
          type: tytext,
          variadic: types.isVariadic(tytext),
          emits: n.type === 'emission_parameter',
          open: !!end && end.type === 'open_end',
          optional: !!unwired,
          unwiredNode: unwired,
          defRange: rangeOf(child),
        });
        pending = undefined;
      }
    }
  }
  return [inputs, outputs];
}

type Report = (node: Node, msg: string, severity?: Severity) => void;
const quiet: Report = () => undefined;

function readSettings(nodes: Node[], report: Report): [Map<string, SettingDef>, string[]] {
  const settings = new Map<string, SettingDef>();
  const order: string[] = [];
  for (const n of nodes) {
    if (n.type !== 'setting_declaration') {
      continue;
    }
    const nameNode = field(n, 'name');
    const allowed = field(n, 'allowed');
    const dflt = field(n, 'default');
    const name = nameNode?.text;
    if (!name || !allowed || !nameNode) {
      continue;
    }
    const def: SettingDef = {
      name,
      kind: 'choice',
      options: [],
      optionSet: new Set(),
      node: nameNode,
      defRange: rangeOf(nameNode),
      allowedText: allowed.text,
    };
    if (allowed.type === 'time_range') {
      def.kind = 'time';
      const a = field(allowed, 'start');
      const b = field(allowed, 'end');
      def.lo = a ? parseTime(a.text) : undefined;
      def.hi = b ? parseTime(b.text) : undefined;
    } else if (allowed.type === 'range') {
      def.kind = 'number';
      const a = field(allowed, 'start');
      const b = field(allowed, 'end');
      def.lo = a ? Number(a.text) : undefined;
      def.hi = b ? Number(b.text) : undefined;
    } else {
      for (const id of kids(allowed, 'identifier')) {
        const o = id.text;
        if (def.optionSet.has(o)) {
          report(id, `"${o}" is listed twice`);
        }
        def.optionSet.add(o);
        def.options.push(o);
      }
    }
    if (def.lo !== undefined && def.hi !== undefined && def.hi < def.lo) {
      report(allowed, `${allowed.text} runs backwards; write it smallest first`);
      [def.lo, def.hi] = [def.hi, def.lo];
    }
    if (dflt) {
      def.default = dflt.text;
      // For a number or time setting, a name here is another setting of this
      // component, not a value: SETTING current_page: book..num_pages = book.
      if (dflt.type === 'identifier' && def.kind !== 'choice') {
          def.defaultName = dflt.text;
      }
    }
    if (settings.has(name)) {
      report(nameNode, `setting "${name}" is declared twice`);
    } else {
      settings.set(name, def);
      order.push(name);
    }
  }
  return [settings, order];
}

/** "0 to 15", "0 or more", "15 or less", "any" - whichever ends are bounded */
function allowsText(lo: string | undefined, hi: string | undefined): string {
    if (lo !== undefined && hi !== undefined) {
        return `${lo} to ${hi}`;
    }
    if (lo !== undefined) {
        return `${lo} or more`;
    }
    if (hi !== undefined) {
        return `${hi} or less`;
    }
    return 'any value';
}

function settingValueProblem(
    def: SettingDef,
    text: string,
    /** the value of another setting here, for bounds written as a name*/
    resolve?: (name: string) => number | undefined,
): string | undefined {
        if (def.kind === 'time') {
            const gt = parseTime(text);
            if (gt === undefined) {
                return `"${def.name}" is a time setting; give a time like 2gt or 1rt`;
            }
            if ((def.lo !== undefined && gt < def.lo) || (def.hi !== undefined && gt > def.hi)) {
                return `${text} is outside ${def.name}, which allows ${allowsText(
                    def.lo === undefined ? undefined : showTime(def.lo),
                    def.hi === undefined ? undefined : showTime(def.hi),
                )}`;
            }
        } else if (def.kind === 'number') {
            // A bound written as another setting's name is only a number once that
            // setting has a value here: until then it is shown but not compared.
            const lo = def.lo ?? (def.loName !== undefined ? resolve?.(def.loName) : undefined);
            const hi = def.hi ?? (def.hiName !== undefined ? resolve?.(def.hiName) : undefined);
            const loText = def.lo?.toString() ?? def.loName;
            const hiText = def.hi?.toString() ?? def.hiName;
            if (!/^\d+$/.test(text)) {
                return `"${def.name}" is a number setting: give a number: ${allowsText(loText, hiText)}`;
            }
            const n = Number(text);
            if ((lo !== undefined && n < lo) || (hi !== undefined && n > hi)) {
                const shown = allowsText(
                    lo !== undefined && def.loName ? `${def.loName} (${lo})` : loText,
                    hi !== undefined && def.hiName ? `${def.hiName} (${hi})` : hiText,
                );
                return `${text} is outside ${def.name}, which allows ${shown}`;
            }
        } else if (!def.optionSet.has(text)) {
            return `"${text}" is not an option for ${def.name}; its options are: ${def.options.join(', ')}`;
        }
        return undefined;
    }

interface Layout {
  known: boolean;
  used: Set<number>;
  n?: number;
}

function num(node: Node | undefined): number | undefined {
  if (!node || !/^\d+$/.test(node.text)) {
    return undefined;
  }
  return Number(node.text);
}

/** The `*` end of a range, if it has one. Ranges are shared, so each place
 * that uses one decides whether an open end makes sense there. */
function openEnd(node: Node | undefined): Node | undefined {
    if (!node) {
        return undefined;
    }
    const r = node.type === 'index' ? first(node, 'range') ?? node : node;
    const s = field(r, 'start');
    const e = field(r, 'end');
    if (s?.type === 'open_end') {
        return s;
    }
    return e?.type === 'open_end' ? e : undefined;
}

/** Gives each port its pins (s..e). Explicit ranges as written; the rest take the next free pins. */
function placePorts(
  ports: Port[],
  nPins: number | undefined,
  compName: string,
  types: TypeEnv,
  report: Report,
): Layout {
  const used = new Set<number>();
  let cursor = 0;
  let cursorKnown = true;
  let allKnown = true;
  let openPort: Port | undefined;

  for (const port of ports) {
    const width = types.width(port.type);
    if (port.variadic || port.open) {
      let st: number | undefined;
      if (port.pinsNode) {
        st = num(field(port.pinsNode, 'start'));
        if (!port.open) {
          report(
            port.pinsNode,
            `"${port.name}" is variadic (${port.type}), so its pins are decided per part; write ${st ?? 0}..*[${port.name}]`,
          );
        }
      } else if (cursorKnown) {
        st = cursor;
      }
      if (port.open && !port.variadic && port.pinsNode) {
        report(
          port.pinsNode,
          `"${port.name}" is a ${port.type ?? 'value'}; only a variadic port like {bit} can run to the end with ..*`,
        );
      }
      port.s = st;
      port.e = undefined;
      if (st !== undefined) {
        used.add(st);
      }
      openPort = openPort ?? port;
      allKnown = false;
      cursorKnown = false;
    } else if (port.pinsNode) {
      const sNode = field(port.pinsNode, 'start');
      const eNode = field(port.pinsNode, 'end') ?? sNode;
      let st = num(sNode);
      let en = num(eNode);
      if (st !== undefined && en !== undefined) {
        if (en < st) {
          report(port.pinsNode, `pin range ${st}..${en} runs backwards; write ${en}..${st}`);
          [st, en] = [en, st];
        }
        const count = en - st + 1;
        if (width !== undefined && count !== width) {
          report(
            port.pinsNode,
            `"${port.name}" is a ${port.type} (${width} pin${s(width)}), but ${port.pinsNode.text} covers ${count}`,
          );
        }
        if (nPins !== undefined && en > nPins - 1) {
          report(port.pinsNode, `${compName} has ${pinSpan(nPins)}; pin ${en} does not exist`);
        }
        port.s = st;
        port.e = en;
        for (let p = st; p <= en; p++) {
          used.add(p);
        }
        cursor = Math.max(cursor, en + 1);
      } else {
        allKnown = false;
      }
    } else if (openPort) {
      if (port.idNode) {
        report(
          port.idNode,
          `"${port.name}" comes after the variadic port "${openPort.name}", which takes every pin after it; move "${port.name}" before it, or give it explicit pins`,
        );
      }
      allKnown = false;
    } else if (width === undefined) {
      allKnown = false;
      cursorKnown = false;
    } else if (cursorKnown) {
      const st = cursor;
      const en = cursor + width - 1;
      if (nPins !== undefined && en > nPins - 1 && port.idNode) {
        report(
          port.idNode,
          `"${port.name}" needs ${st === en ? `pin ${st}` : `pins ${st}..${en}`}, but ${compName} has ${pinSpan(nPins)}`,
        );
      }
      port.s = st;
      port.e = en;
      for (let p = st; p <= en; p++) {
        used.add(p);
      }
      cursor = en + 1;
    } else {
      allKnown = false;
    }
  }
  return { known: allKnown, used, n: nPins };
}

function checkVariadic(
  ports: Port[],
  count: number | '*',
  min: number | undefined,
  max: number | undefined,
  sig: Sig,
  side: 'input' | 'output',
  decl: Node | undefined,
  report: Report,
): Port | undefined {
  const varPorts = ports.filter((p) => p.variadic);
  if (varPorts.length > 1) {
    const at = varPorts[1].idNode ?? decl;
    if (at) {
      report(
        at,
        `only one variadic port per side: "${varPorts[0].name}" and "${varPorts[1].name}" would have no boundary between them`,
      );
    }
  }
  const vp = varPorts[0];
  if (count === '*') {
    if (!vp) {
      if (decl) {
        report(
          decl,
          `the declaration gives a variable number of ${side} pins, but no ${side} port is variadic; add one like ${side === 'input' ? '->' : '=>'} inputs: {bit}`,
        );
      }
      return undefined;
    }
    const fixed = vp.s ?? 0;
    if (min !== undefined && max !== undefined && max < min) {
      if (decl) {
        report(decl, `${min}*${max} runs backwards; write ${max}*${min}`);
      }
      [min, max] = [max, min];
    }
    if (min !== undefined && min < fixed && decl) {
      report(
        decl,
        `${sig.name} has ${fixed} fixed ${side} pin${s(fixed)} before "${vp.name}", so its minimum can't be below ${fixed}; write ${fixed}* or more`,
      );
    }
    if (max !== undefined && max < fixed && decl) {
      report(
        decl,
        `${sig.name} has ${fixed} fixed ${side} pin${s(fixed)} before "${vp.name}", so its maximum can't be below ${fixed}`,
      );
    }
    vp.min = Math.max((min ?? 0) - fixed, 0);
    vp.max = max !== undefined ? Math.max(max - fixed, 0) : undefined;
    return vp;
  } else if (vp && vp.idNode) {
    report(
      vp.idNode,
      `"${vp.name}" is variadic (${vp.type}), but the declaration gives an exact pin count; write N* (at least N), *N (at most N), or N*M on the declaration`,
    );
  }
  return undefined;
}

function attachPorts(sig: Sig, nodes: Node[], types: TypeEnv, report: Report, decl?: Node): [Layout, Layout] {
  let [inputs, outputs] = readPorts(nodes, types);
  const nIn = typeof sig.inputs === 'number' ? sig.inputs : undefined;
  const nOut = typeof sig.outputs === 'number' ? sig.outputs : undefined;

  const inLayout = placePorts(inputs, nIn, sig.name, types, report);
  let outLayout: Layout = { known: true, used: new Set(), n: nOut };
  if (outputs.length > 0) {
    outLayout = placePorts(outputs, nOut, sig.name, types, report);
  } else if (nOut !== undefined) {
    outputs = [
      {
        name: '',
        implicit: true,
        type: sig.ret,
        s: 0,
        e: nOut - 1,
        variadic: false,
        emits: sig.emits,
        open: false,
        optional: false,
      },
    ];
    for (let p = 0; p <= nOut - 1; p++) {
      outLayout.used.add(p);
    }
  }
  sig.inPorts = inputs;
  sig.outPorts = outputs;
  for (const port of inputs) {
    if (port.unwiredNode && port.unwiredNode.text !== '0') {
      report(
        port.unwiredNode,
        `an unwired pin always reads 0, so = 0 is the only way to mark "${port.name}" optional`,
      );
    }
  }
  [sig.settings, sig.settingOrder] = readSettings(nodes, report);
  for (const name of sig.settingOrder) {
    const def = sig.settings.get(name)!;
    if (def.default !== undefined && def.defaultName === undefined && def.node) {
      const problem = settingValueProblem(def, def.default);
      if (problem) {
        report(def.node, 'default: ' + problem);
      }
    }
  }
  sig.varIn = checkVariadic(inputs, sig.inputs, sig.inMin, sig.inMax, sig, 'input', decl, report);
  sig.varOut = checkVariadic(outputs, sig.outputs, sig.outMin, sig.outMax, sig, 'output', decl, report);
  sig.declaredOutputs = outputs.filter((p) => !p.implicit).length;
  return [inLayout, outLayout];
}

function findPort(ports: Port[] | undefined, name: string): Port | undefined {
  return (ports ?? []).find((p) => p.name === name);
}

function portNames(ports: Port[] | undefined): string[] {
  return (ports ?? []).filter((p) => p.name).map((p) => p.name);
}

function typeDeclsOf(root: Node): [Map<string, string>, Map<string, Range>] {
  const types = new Map<string, string>();
  const ranges = new Map<string, Range>();
  for (const td of kids(root, 'type_declaration')) {
    const n = field(td, 'name');
    const d = field(td, 'definition');
    if (n && d) {
      types.set(n.text, d.text);
      ranges.set(n.text, rangeOf(n));
    }
  }
  return [types, ranges];
}

/** What a file declares, for other files to import. */
export function readDecls(text: string, path: string): Decls {
  const tree = parse(text);
  const root = tree.rootNode;
  const [types, typeRanges] = typeDeclsOf(root);
  const env = new TypeEnv();
  for (const [k, v] of types) {
    env.defs.set(k, v);
  }
  const decls = new Map<string, Sig>();
  for (const comp of splitComponents(root)) {
    const sig = comp.decl ? parseSignature(comp.decl) : undefined;
    if (!sig) {
      continue;
    }
    attachPorts(sig, comp.nodes, env, quiet);
    // Only names, pins, and ranges are kept, so the cache doesn't hold the tree.
    for (const list of [sig.inPorts, sig.outPorts]) {
      for (const port of list) {
        port.idNode = undefined;
        port.pinsNode = undefined;
        port.unwiredNode = undefined;
      }
    }
    for (const def of sig.settings.values()) {
      def.node = undefined;
    }
    sig.defPath = path;
    decls.set(sig.name, sig);
  }
  const broken = root.hasError;
  tree.delete();
  return { decls, broken, types, typeRanges };
}

// ---------------------------------------------------------------------------
// Analysis
// ---------------------------------------------------------------------------

export function analyze(text: string, path: string | undefined, ws: Workspace, config: Config = DEFAULT_CONFIG): Model {
  const tree = parse(text);
  const root = tree.rootNode;
  const lines = text.split('\n');
  let diags: Diag[] = [];
  const marks: Mark[] = [];
  const known = new Map<string, Sig>();
  const types = new TypeEnv();
  const scopesOut: ScopeInfo[] = [];
  const imports: ImportInfo[] = [];

  const add = (node: Node, message: string, severity: Severity = ERROR): Diag => {
    const d: Diag = { range: rangeOf(node), message, severity };
    diags.push(d);
    return d;
  };
  const addSpan = (a: Node, b: Node, message: string, severity: Severity = ERROR) => {
    diags.push({ range: spanOf(a, b), message, severity });
  };
  const mark = (node: Node | undefined, kind: MarkKind = 'component') => {
    if (node) {
      marks.push({ range: rangeOf(node), kind });
    }
  };

  const { diags: syntaxDiags, rows: errorRows } = collectSyntaxErrors(root, lines);

  const register = (name: string, sig: Sig, node: Node, what: string) => {
    const prev = known.get(name);
    if (prev) {
      add(node, `"${name}" is already ${prev.origin ?? 'declared'}`, WARN);
    }
    known.set(name, { ...sig, origin: what });
  };

  // Types: this file's own TYPEs, then (below) any it imports.
  for (const td of kids(root, 'type_declaration')) {
    const n = field(td, 'name');
    const d = field(td, 'definition');
    if (n && d) {
      if (types.defs.has(n.text)) {
        add(n, `type "${n.text}" is already declared`, WARN);
      }
      types.defs.set(n.text, d.text);
      types.origins.set(n.text, { path, range: rangeOf(n) });
      mark(n, 'type');
    }
  }

  // Imports
  for (const imp of kids(root, 'import_statement')) {
    const mod = field(imp, 'module');
    const modtext = mod ? mod.text : '';
    const modPath = mod ? ws.findModule(modtext, path) : undefined;
    const got = modPath ? ws.declsIn(modPath) : undefined;
    imports.push({ module: modtext, path: modPath, range: rangeOf(imp) });
    if (!mod) {
      continue; // malformed; reported as a syntax error
    }
    if (!got) {
      add(mod, `cannot find module "${modtext}"`);
      continue;
    }
    const list = first(imp, 'import_list');
    if (list) {
      for (const item of kids(list, 'import_item')) {
        const nameNode = field(item, 'name');
        const aliasNode = field(item, 'alias');
        if (!nameNode) {
          continue;
        }
        const name = nameNode.text;
        const sig = got.decls.get(name);
        const localName = aliasNode ? aliasNode.text : name;
        if (!sig && got.types.has(name)) {
          types.defs.set(localName, got.types.get(name)!);
          types.origins.set(localName, { path: modPath, range: got.typeRanges.get(name), from: modtext });
          mark(nameNode, 'type');
          if (aliasNode) {
            mark(aliasNode, 'type');
          }
        } else if (!sig) {
          let msg = `"${name}" is not declared in ${modtext}`;
          if (got.broken) {
            msg += ' (that file has syntax errors, which may be hiding it)';
          }
          add(nameNode, msg);
        } else {
          register(localName, sig, aliasNode ?? nameNode, 'imported from ' + modtext);
          mark(nameNode);
          if (aliasNode) {
            mark(aliasNode);
          }
        }
      }
    } else {
      const star = first(imp, 'import_all');
      for (const [name, sig] of got.decls) {
        register(name, sig, star ?? imp, 'imported from ' + modtext);
      }
      for (const [name, def] of got.types) {
        if (!types.defs.has(name)) {
          types.defs.set(name, def);
          types.origins.set(name, { path: modPath, range: got.typeRanges.get(name), from: modtext });
        }
      }
    }
  }

  // Type names: every name used as a type must exist, and a projection like
  // transmission.data must name a real field.
  walk(root, (x) => {
    if (x.type !== 'type') {
      return;
    }
    const id = first(x, 'identifier');
    if (id && !types.defs.has(id.text)) {
      add(id, `unknown type "${id.text}"; declare it with TYPE or import it with USE`, config.unknownComponentSeverity);
    } else if (id) {
      mark(id, 'type');
    }
    if (!(id && !types.defs.has(id.text)) && first(x, 'field_name')) {
      const r = types.resolveProjection(x.text);
      if (r && !r.ok) {
        add(x, r.reason);
      }
    }
  });

  // Split the file into components.
  interface Scope {
    decl?: Node;
    nodes: Node[];
    sig?: Sig;
    values: Map<string, Value>;
    instances: Map<string, Instance>;
  }
  const scopes: Scope[] = splitComponents(root).map((c) => ({
    decl: c.decl,
    nodes: c.nodes,
    values: new Map(),
    instances: new Map(),
  }));
  for (const scope of scopes) {
    if (!scope.decl) {
      continue;
    }
    const sig = parseSignature(scope.decl);
    if (sig) {
      const id = first(scope.decl, 'identifier');
      sig.defPath = path;
      register(sig.name, sig, id ?? scope.decl, 'declared in this file');
      scope.sig = known.get(sig.name);
      mark(id);
    }
  }

  // Port layouts: every component's ports are placed before any use is
  // checked, so a use can name a port of a component declared further down.
  const unusedPinsWarning = (scope: Scope, layout: Layout, side: 'input' | 'output') => {
    if (!layout.known || layout.n === undefined || !scope.decl || !scope.sig) {
      return;
    }
    const unused: number[] = [];
    for (let p = 0; p < layout.n; p++) {
      if (!layout.used.has(p)) {
        unused.push(p);
      }
    }
    if (unused.length > 0) {
      add(
        scope.decl,
        `${scope.sig.name} has ${side} ${pinSpan(layout.n)}, but ${unused.length === 1 ? 'pin' : 'pins'} ${describePins(unused)}${unused.length === 1 ? ' is' : ' are'} not used by any ${side === 'input' ? 'parameter' : 'output port'}`,
        config.unusedPinSeverity,
      );
    }
  };

  for (const scope of scopes) {
    const sig = scope.sig;
    if (!sig) {
      continue;
    }
    const [inLayout, outLayout] = attachPorts(sig, scope.nodes, types, (n, m, sev) => add(n, m, sev), scope.decl);
    unusedPinsWarning(scope, inLayout, 'input');

    // 5[Pole]5 ~> transmission{vibration}: outputs written as parts of that
    // record must cover each field once, carried the same way.
    const rm = /^([A-Za-z_&][A-Za-z0-9_&]*)(.*)$/s.exec(sig.ret ?? '');
    const rname = rm?.[1];
    const rarg = rm?.[2] ?? '';
    const rfields = rname && types.defs.has(rname) ? types.recordFields(types.defs.get(rname)) : undefined;
    if (rname && rfields) {
      const seen = new Map<string, string>();
      let any = false;
      for (const port of sig.outPorts) {
        const ptext = port.type ? norm(port.type) : '';
        const pm = /^([A-Za-z_&][A-Za-z0-9_&]*)\.([A-Za-z_&][A-Za-z0-9_&]*)(.*)$/s.exec(ptext);
        if (pm && pm[1] === rname && port.idNode) {
          any = true;
          const pfield = pm[2];
          const parg = pm[3];
          if (seen.has(pfield)) {
            add(port.idNode, `"${seen.get(pfield)}" and "${port.name}" both carry ${rname}.${pfield}; each field goes out once`);
          } else {
            seen.set(pfield, port.name);
          }
          const rest = parg.startsWith('.') ? trailingGroup(parg) : parg;
          if (rest !== rarg) {
            add(port.idNode, `${sig.name} outputs a ${sig.ret}, so write this part the same way: ${rname}.${pfield}${rarg}`);
          }
        }
      }
      if (any && scope.decl) {
        for (const f of rfields) {
          if (!seen.has(f.name)) {
            add(
              scope.decl,
              `${sig.name} outputs a ${sig.ret}, but no output carries its field "${f.name}"; add one like ~> ${f.name}_out: ${rname}.${f.name}${rarg}`,
            );
          }
        }
      }
    }
    if (sig.declaredOutputs > 0) {
      unusedPinsWarning(scope, outLayout, 'output');
    }
  }

  // Per-scope checks.
  for (const scope of scopes) {
    checkScope(scope);
  }

  function checkScope(scope: Scope) {
    const values = scope.values;
    const handled = new Set<number>();
    const drivers = new Map<string, Map<number, Map<string, Node>>>();
    const varCounts = new Map<string, { sig: Sig; first: Node; pins: Set<number>; named: Map<string, number> }>();
    const uncountable = new Set<string>();
    const partsSeen = new Map<string, { sig: Sig; ref: Node }>();
    const driven = new Map<string, Set<number>>();
    const yields: { node: Node; value?: Node; arrow: string }[] = [];
    const enumOptions = new Map<string, EnumDef>();

    const declare = (idNode: Node | undefined, kind: Value['kind'], typeText?: string): Value | undefined => {
      if (!idNode) {
        return undefined;
      }
      const name = idNode.text;
      const existing = values.get(name);
      if (existing && existing.kind !== 'wire' && kind !== 'wire') {
        add(idNode, `"${name}" is already declared in this component`, WARN);
      }
      if (!existing || existing.kind === 'wire') {
        const v: Value = { kind, type: typeText, defRange: existing?.defRange ?? rangeOf(idNode) };
        values.set(name, v);
        return v;
      }
      return existing;
    };

    if (scope.sig) {
      for (const port of scope.sig.inPorts) {
        declare(port.idNode, 'input', port.type);
      }
      for (const port of scope.sig.outPorts) {
        if (!port.implicit) {
          declare(port.idNode, 'output', port.type);
        }
      }
      for (const name of scope.sig.settingOrder) {
        const def = scope.sig.settings.get(name)!;
        if (def.node) {
          declare(def.node, 'setting', def.kind);
          const v = values.get(name);
          if (v && v.kind === 'setting') {
            v.setting = def;
          }
        }
      }
    }

    const instances = scope.instances;
    const ORDINALS = ['first', 'second', 'third', 'fourth'];
    const nth = (d: number) => ORDINALS[d - 1] ?? `#${d}`;

    const rangeNums = (node: Node): [number | undefined, number | undefined] => {
        const r = node.type === 'index' ? first(node, 'range') ?? node : node;
        return [num(field(r, 'start')), num(field(r, 'end'))];
    };

    const registerInstance = (
      nameNode: Node | undefined,
      dims: [number, number][] | undefined,
      sig: Sig | undefined,
      typeName: string | undefined,
      dimsBad = false,
    ) => {
      if (!nameNode) {
        return;
      }
      const name = nameNode.text;
      if (instances.has(name)) {
        add(nameNode, `"${name}" is already declared in this component`);
        return;
      }
      if (values.has(name)) {
        add(nameNode, `"${name}" is already a signal in this component; give the part another name`);
        return;
      }
      if (!dims && known.has(name)) {
        add(
          nameNode,
          `"${name}" is already a component type; give this part its own name, or write [${name}] without declaring it to use the one unnamed ${name}`,
        );
        return;
      }
      instances.set(name, { sig, type: typeName, dims, dimsBad, node: nameNode, used: false, defRange: rangeOf(nameNode) });
      if (sig) {
        mark(nameNode);
      }
    };

    const settingValueForPart = (
        def: SettingDef, 
        vNode: Node, 
        typeName: string,
        resolve?: (name: string) => number | undefined,
    ): string | undefined => {
      const text = vNode.text;
      if (vNode.type !== 'identifier') {
        return settingValueProblem(def, text, resolve);
      }
      const isOption = def.kind === 'choice' && def.optionSet.has(text);
      const v = values.get(text);
      const outer = v && v.kind === 'setting' ? v.setting : undefined;
      if (isOption && outer) {
        return `"${text}" is both an option of ${def.name} and a setting of this component; rename the setting so it's clear which is meant`;
      } else if (isOption) {
        return undefined;
      } else if (outer) {
        const what = { time: 'a time', number: 'a number', choice: 'a choice' };
        if (outer.kind !== def.kind) {
          return `"${text}" is ${what[outer.kind]} setting, but ${typeName}'s ${def.name} needs ${what[def.kind]}`;
        }
        if (def.kind === 'choice') {
          const extra = outer.options.filter((o) => !def.optionSet.has(o));
          if (extra.length > 0) {
            return `"${text}" allows ${extra.join(', ')}, which ${typeName}'s ${def.name} doesn't accept; its options are: ${def.options.join(', ')}`;
          }
        } else if (
          outer.lo !== undefined &&
          outer.hi !== undefined &&
          def.lo !== undefined &&
          def.hi !== undefined &&
          (outer.lo < def.lo || outer.hi > def.hi)
        ) {
          const show = def.kind === 'time' ? showTime : (n: number | undefined) => String(n);
          return `"${text}" allows ${show(outer.lo)} to ${show(outer.hi)}, but ${typeName}'s ${def.name} only allows ${show(def.lo)} to ${show(def.hi)}; narrow ${text} to fit`;
        }
        return undefined;
      } else if (v) {
        return `"${text}" is a signal, but settings are fixed when a part is built, so they can't come from a wire; make it an input of ${typeName} instead`;
      }
      const example = { time: '2gt or 1rt', number: 'a number', choice: def.options.join(', ') };
      return `"${text}" is not a value for ${def.name}; give ${example[def.kind]}, or the name of one of this component's own settings`;
    };

    const declareInstances = (node: Node) => {
      const parent = node.parent;
      if (parent && parent.type !== 'source_file') {
        add(
          node,
          'parts are declared at the top level of a component, not inside a block; to get one part per EACH step, declare an array and index it',
        );
      }
      const typeNode = field(node, 'type');
      const typeName = typeNode?.text;
      const sig = typeName ? known.get(typeName) : undefined;
      if (typeNode && !sig) {
        add(
          typeNode,
          `"${typeName}" is not a component type here; declare it in this file or import it with USE`,
          config.unknownComponentSeverity,
        );
      } else if (sig) {
        mark(typeNode);
      }
      const chosenNode = field(node, 'settings');
      if (sig && typeName && typeNode) {
        const chosen = new Set<string>();
        // What each setting is worth for this part: the value given here, or
        // the component's default. Bounds written as a name are read from this.
        const here = new Map<string, number>();
        for (const [sname, def] of sig.settings) {
            if (def.default !== undefined && /^\d+$/.test(def.default)) {
                here.set(sname, Number(def.default));
            }
        }
        for (const sv of chosenNode ? kids(chosenNode, 'setting_value') : []) {
          const nNode = field(sv, 'name');
          const vNode = field(sv, 'value');
          if (nNode && vNode && /^\d+$/.test(vNode.text)) {
              here.set(nNode.text, Number(vNode.text));
          }
        }
        // A default that names another setting takes that setting's value
        // here: a chain of them settles after a few passes.
        for (let pass = 0; pass < sig.settings.size; pass++) {
            let changed = false;
            for (const [sname, def] of sig.settings) {
                if (!here.has(sname) && def.defaultName !== undefined) {
                    const v = here.get(def.defaultName);
                    if (v !== undefined) {
                        here.set(sname, v);
                        changed = true;
                    }
                }
            }
            if (!changed) {
                break;
            }
        }
        const resolve = (name: string) => here.get(name);
        // Settings already reported here: a bound that reads one of them would
        // only repeat the same problem.
        const bad = new Set<string>();
        for (const sv of chosenNode ? kids(chosenNode, 'setting_value') : []) {
            const nNode = field(sv, 'name');
            const vNode = field(sv, 'value');
            const sname = nNode?.text;
            const def = sname ? sig.settings.get(sname) : undefined;
            if (sname && nNode && !def) {
                const names = sig.settingOrder;
                add(
                    nNode,
                    `${typeName} has no setting "${sname}"; ${names.length > 0 ? 'its settings are: ' + names.join(', ') : 'it has no settings'}`,
                );
            } else if (def && sname && nNode) {
                if (chosen.has(sname)) {
                    add(nNode, `setting "${sname}" is chosen twice`);
                }
                chosen.add(sname);
                const problem = vNode ? settingValueForPart(def, vNode, typeName, resolve) : undefined;
                if (problem && vNode) {
                    add(vNode, problem);
                    bad.add(sname);
                }
            }
        }
        for (const sname of sig.settingOrder) {
            const def = sig.settings.get(sname)!;
            if (def.default === undefined && !chosen.has(sname)) {
                add(typeNode, `${typeName} needs a value for its setting "${sname}" here, e.g. ${typeName}{${sname}: ...}`);
                continue;
            }
            // A default can break a bound written as another setting's name,
            // once that other setting has a value here: Lectern{book: 1} leaves
            // num_pages at 0, while book..* now means 1 or more.
            const dependsOnBad = (def.loName && bad.has(def.loName)) || (def.hiName && bad.has(def.hiName));
            const effective = here.get(sname);
            const defaultText = def.defaultName !== undefined ? effective?.toString() : def.default;
            if (
                !chosen.has(sname) &&
                defaultText !== undefined &&
                (def.loName || def.hiName) &&
                !dependsOnBad
            ) {
                const problem = settingValueProblem(def, defaultText, resolve);
                if (problem) {
                    const shown = def.defaultName !== undefined ? `${def.defaultName} (${defaultText})` : defaultText;
                    add(
                        chosenNode ?? typeNode,
                        `${typeName} leaves "${sname}" at its default ${shown} here, and ${problem
                            .replace(/^\S+ is outside \S+, which allows /, 'it allows ')
                            .replace(/^"[^"]+" is a number setting; give a number: /, 'it allows ')}`,
                    );
                    bad.add(sname);
                }
            }
        }
      }
    };

    /** The EACH variables around a node, each with the values it takes.
     *  This only answers a question and is called once per node that needs an
     *  answer, so nothing here reports a problem: an EACH is checked once, in
     *  the `each_block` branch of the statement walk. An open or backwards
     *  range is simply skipped, since it binds no usable values. */
    const bindingsAt = (node: Node): Map<string, [number, number]> => {
      const bindings = new Map<string, [number, number]>();
      let p = node.parent;
      while (p) {
        if (p.type === 'each_block') {
          const v = field(p, 'var');
          const r = field(p, 'range');
          if (v && r) {
            const [a, z] = rangeNums(r);
            if (!bindings.has(v.text) && a !== undefined && z !== undefined) {
              bindings.set(v.text, [Math.min(a, z), Math.max(a, z)]);
            }
          }
        }
        p = p.parent;
      }
      return bindings;
    };

    const hearBlockFor = (node: Node, name: string): Node | undefined => {
      let p = node.parent;
      while (p) {
        if (p.type === 'hear_block') {
          const v = field(p, 'var');
          if (v && v.text === name) {
            return p;
          }
        }
        p = p.parent;
      }
      return undefined;
    };

    // Pass 1: everything this scope defines.
    for (const n of scope.nodes) {
      walk(n, (x) => {
        const t = x.type;
        if (
          t === 'input_parameter' ||
          t === 'output_parameter' ||
          t === 'emission_parameter' ||
          t === 'timing_parameter' ||
          t === 'type_declaration'
        ) {
          return false;
        } else if (t === 'instance_declaration') {
          declareInstances(x);
          return false;
        } else if (t === 'setting_declaration') {
          const parent = x.parent;
          if (!scope.sig || (parent && parent.type !== 'source_file')) {
            add(x, 'SETTING belongs in a component header, next to its parameters');
          }
          return false;
        } else if (t === 'state_declaration') {
          const ty = first(x, 'type');
          const id = first(x, 'identifier');
          declare(id, 'state', ty ? ty.text : undefined);
          const en = ty ? first(ty, 'enum_type') : undefined;
          if (en && id) {
            const def: EnumDef = { name: id.text, options: [], optionSet: new Set() };
            for (const o of kids(en, 'identifier')) {
              if (def.optionSet.has(o.text)) {
                add(o, `"${o.text}" is listed twice`);
              }
              def.optionSet.add(o.text);
              def.options.push(o.text);
              if (!enumOptions.has(o.text)) {
                enumOptions.set(o.text, def);
              }
            }
            const v = values.get(def.name);
            if (v && v.kind === 'state') {
              v.enumDef = def;
            }
          }
        } else if (t === 'flow_destination') {
          const id = first(x, 'identifier');
          if (id) {
            const existing = values.get(id.text);
            if (existing && existing.kind === 'output') {
              existing.driven = true;
            } else {
              declare(id, 'wire');
            }
          }
          const arr = first(x, 'data_array');
          if (arr) {
            for (const item of kids(arr, 'data_item')) {
              const itemId = first(item, 'identifier');
              if (itemId) {
                declare(itemId, 'wire');
              }
            }
          }
        }
        return undefined;
      });
    }

    const maxFor = (typeName: string | false | undefined) => (typeName ? LEVELS[typeName] : undefined);

    const refNameNode = (ref: Node) => (ref.type === 'instance_ref' ? field(ref, 'name') : ref);

    const checkIndices = (ref: Node, inst: Instance, name: string, silent = false): boolean => {
      let ok = true;
      const report = (node: Node, msg: string) => {
        ok = false;
        if (!silent) {
          add(node, msg);
        }
      };
      if (inst.dimsBad || !inst.dims) {
        return false;
      }
      const dims = inst.dims;
      const idxs = kids(ref, 'index');
      if (idxs.length !== dims.length) {
        report(
          ref,
          `"${name}" has ${dims.length} dimension${s(dims.length)}, but this uses ${idxs.length} ind${idxs.length === 1 ? 'ex' : 'ices'}`,
        );
        return false;
      }
      const bound = bindingsAt(ref);
      idxs.forEach((ix, i) => {
        const [lo, hi] = dims[i];
        const where =
          dims.length === 1 ? `${name} runs ${lo}..${hi}` : `${name}'s ${nth(i + 1)} index runs ${lo}..${hi}`;
        const vNode = field(ix, 'value');
        const varNode = field(ix, 'var');
        let [a, b] = rangeNums(ix);
        if (vNode) {
          const n = num(vNode);
          if (n !== undefined && (n < lo || n > hi)) {
            report(ix, `index ${n} is out of range; ${where}`);
          }
        } else if (a !== undefined && b !== undefined) {
          if (b < a) {
            report(ix, `range ${a}..${b} runs backwards; write ${b}..${a}`);
            [a, b] = [b, a];
          }
          if (a < lo || b > hi) {
            report(ix, `range ${a}..${b} goes out of range; ${where}`);
          }
        } else if (varNode) {
          const vn = varNode.text;
          const r = bound.get(vn);
          if (!r) {
            report(
              varNode,
              `"${vn}" is not an EACH variable here; indices are numbers, ranges, or a variable from an enclosing EACH`,
            );
          } else {
            let off = num(field(ix, 'offset')) ?? 0;
            const op = field(ix, 'op');
            if (op && op.text === '-') {
              off = -off;
            }
            let bad: number | undefined;
            if (r[0] + off < lo) {
              bad = r[0];
            } else if (r[1] + off > hi) {
              bad = r[1];
            }
            if (bad !== undefined) {
              report(ix, `${ix.text} reaches ${bad + off} when ${vn} is ${bad}, but ${where}`);
            }
          }
        }
      });
      return ok;
    };

    const reportUndeclared = (nameNode: Node, name: string) => {
      let base = name;
      const suffix: string[] = [];
      for (;;) {
        const m = /^(.*?)_(\d+)$/.exec(base);
        if (!m || m[1] === '') {
          break;
        }
        suffix.unshift(m[2]);
        base = m[1];
      }
      let msg: string;
      if (suffix.length > 0 && known.has(base)) {
        const ranges = suffix.map(() => '0..N').join(', ');
        msg = `"${name}" is not declared. For one ${base}, declare it with [${name}]: ${base}. For a group, declare an array like [${base}{${ranges}}]: ${base} and write ${base}{${suffix.join(', ')}}`;
      } else if (suffix.length > 0) {
        msg = `"${name}" is not declared, and there is no component type "${base}"; declare or import ${base} first, then declare this part`;
      } else {
        msg = `"${name}" is not a declared part or a component type; declare the part with [${name}]: SomeType, or declare or import a component named ${name}`;
      }
      const d = add(nameNode, msg, config.unknownComponentSeverity);
      d.unknown = [name, base];
    };

    type Resolved =
      | { kind: 'value'; value: Value }
      | { kind: 'part'; sig?: Sig; inst?: Instance }
      | undefined;

    const resolveRef = (ref: Node, loud: boolean): Resolved => {
      const indexed = ref.type === 'instance_ref';
      const nameNode = refNameNode(ref);
      if (!nameNode) {
        return undefined;
      }
      const name = nameNode.text;
      const inst = instances.get(name);
      if (indexed) {
        if (!inst) {
          if (loud) {
            const d = add(
              nameNode,
              `"${name}" is not declared as an array; declare it with [${name}{0..N}]: SomeType`,
              config.unknownComponentSeverity,
            );
            d.unknown = [name, name];
          }
          return undefined;
        }
        inst.used = true;
        if (!inst.dims) {
          if (loud) {
            add(ref, `"${name}" is a single part, not an array; write [${name}]`);
          }
        } else if (loud) {
          checkIndices(ref, inst, name);
        }
        return { kind: 'part', sig: inst.sig, inst };
      }
      const val = values.get(name);
      if (val) {
        return { kind: 'value', value: val };
      }
      if (inst) {
        inst.used = true;
        if (inst.dims && loud) {
          add(
            ref,
            `"${name}" is an array; pick parts with ${name}{...}, or all of them with a range like ${name}{${inst.dims[0][0]}..${inst.dims[0][1]}}`,
          );
        }
        return { kind: 'part', sig: inst.sig, inst };
      }
      if (known.has(name)) {
        return { kind: 'part', sig: known.get(name) };
      }
      if (loud) {
        reportUndeclared(nameNode, name);
      }
      return undefined;
    };

    const partSig = (ref: Node): Sig | undefined => {
      const r = resolveRef(ref, false);
      return r && r.kind === 'part' ? r.sig : undefined;
    };

    const refCount = (ref: Node): number => {
      if (ref.type !== 'instance_ref') {
        return 1;
      }
      let count = 1;
      for (const ix of kids(ref, 'index')) {
        const [a, b] = rangeNums(ix);
        if (a !== undefined && b !== undefined) {
          count *= Math.abs(b - a) + 1;
        }
      }
      return count;
    };

    const assignmentsFor = (node: Node): Map<string, number>[] | undefined => {
      const b = bindingsAt(node);
      const vars = [...b.keys()].sort();
      let out: Map<string, number>[] = [new Map()];
      for (const v of vars) {
        const [lo, hi] = b.get(v)!;
        const next: Map<string, number>[] = [];
        for (const a of out) {
          for (let k = lo; k <= hi; k++) {
            const c = new Map(a);
            c.set(v, k);
            next.push(c);
          }
        }
        out = next;
        if (out.length > 4096) {
          return undefined;
        }
      }
      return out;
    };

    const concreteNames = (ref: Node, assign?: Map<string, number>): string[] | undefined => {
      if (ref.type !== 'instance_ref') {
        return [ref.text];
      }
      const steps = assign ? [assign] : assignmentsFor(ref);
      if (!steps) {
        return undefined;
      }
      const name = field(ref, 'name')?.text ?? '';
      const seen = new Set<string>();
      const result: string[] = [];
      for (const step of steps) {
        const lists: number[][] = [];
        for (const ix of kids(ref, 'index')) {
          const vNode = field(ix, 'value');
          const varNode = field(ix, 'var');
          const [a, b] = rangeNums(ix);
          if (vNode) {
            lists.push([num(vNode) ?? 0]);
          } else if (a !== undefined && b !== undefined) {
            const l: number[] = [];
            for (let k = Math.min(a, b); k <= Math.max(a, b); k++) {
              l.push(k);
            }
            lists.push(l);
          } else if (varNode) {
            const base = step.get(varNode.text);
            if (base === undefined) {
              return undefined;
            }
            let off = num(field(ix, 'offset')) ?? 0;
            const op = field(ix, 'op');
            if (op && op.text === '-') {
              off = -off;
            }
            lists.push([base + off]);
          } else {
            return undefined;
          }
        }
        let combos: number[][] = [[]];
        for (const l of lists) {
          const next: number[][] = [];
          for (const prefix of combos) {
            for (const k of l) {
              next.push([...prefix, k]);
            }
          }
          combos = next;
        }
        for (const c of combos) {
          const nm = `${name}{${c.join(',')}}`;
          if (!seen.has(nm)) {
            seen.add(nm);
            result.push(nm);
          }
        }
        if (result.length > 4096) {
          return undefined;
        }
      }
      return result;
    };

    const checkValue = (id: Node, ctx: 'flow' | 'subject' | 'operand' | 'trigger') => {
      const name = id.text;
      const v = values.get(name);
      if (v) {
        if (v.kind === 'setting') {
          const ok = ctx === 'subject' || (ctx === 'operand' && v.type === 'number');
          if (!ok) {
            add(
              id,
              `"${name}" is a setting, fixed when the part is built, not a signal; match on it, or use it in AFTER(${name}) or -(${name})->`,
            );
          }
        }
        return;
      }
      if (hearBlockFor(id, name) || enumOptions.has(name)) {
        return;
      }
      if (bindingsAt(id).has(name)) {
        add(id, `"${name}" is an EACH index, not a signal; use it inside braces, e.g. part{${name}}`);
        return;
      }
      if (instances.has(name) || known.has(name)) {
        add(id, `"${name}" is a part; wrap it in brackets to read its output: [${name}]`, WARN);
      } else {
        const d = add(id, `undeclared signal "${name}"`, config.undeclaredSignalSeverity);
        d.unknown = [name, name];
      }
    };

    const bracketIds = (arr: Node): Node[] => {
      const out: Node[] = [];
      for (const child of kids(arr)) {
        const t = child.type;
        if (t === 'component_content' || t === 'flow_destination_item') {
          const inner = first(child);
          if (inner) {
            if (inner.type === 'identifier' || inner.type === 'instance_ref') {
              out.push(inner);
            } else if (t === 'component_content') {
              const id = first(inner, 'identifier');
              if (id) {
                out.push(id);
              }
            }
          }
        }
      }
      return out;
    };

    const refItems = (node: Node): Node[] =>
      kids(node).filter((c) => c.type === 'identifier' || c.type === 'instance_ref');

    const pinOf = (node: Node): number | undefined => num(first(node, 'number'));
    const portNodeOf = (node: Node): Node | undefined => field(node, 'port');

    const resolvePort = (sig: Sig, portNode: Node, side: 'in' | 'out'): Port | undefined => {
      const pname = portNode.text;
      const ports = side === 'in' ? sig.inPorts : sig.outPorts;
      const what = side === 'in' ? 'input' : 'output';
      const port = findPort(ports, pname);
      if (!port) {
        const names = portNames(ports);
        const listing =
          names.length > 0 ? `its ${what} ports are: ${names.join(', ')}` : `it has no named ${what} ports`;
        add(portNode, `${sig.name} has no ${what} port "${pname}"; ${listing}`);
        return undefined;
      }
      mark(portNode, 'port');
      return port;
    };

    const varEntry = (name: string, sig: Sig, ref: Node) => {
      let e = varCounts.get(name);
      if (!e) {
        e = { sig, first: ref, pins: new Set(), named: new Map() };
        varCounts.set(name, e);
      }
      return e;
    };

    const notePart = (ref: Node, sig: Sig) => {
      const r = resolveRef(ref, false);
      const inst = r && r.kind === 'part' ? r.inst : undefined;
      if (inst) {
        if (ref.type === 'instance_ref') {
          if (!inst.dims || !checkIndices(ref, inst, refNameNode(ref)?.text ?? '', true)) {
            return;
          }
        } else if (inst.dims) {
          return;
        }
      }
      const names = concreteNames(ref);
      if (!names) {
        uncountable.add(refNameNode(ref)?.text ?? '');
        return;
      }
      for (const nm of names) {
        if (!partsSeen.has(nm)) {
          partsSeen.set(nm, { sig, ref });
        }
      }
    };

    const markDriven = (ref: Node, from: number, to: number, assign?: Map<string, number>) => {
      const names = concreteNames(ref, assign);
      if (!names) {
        uncountable.add(refNameNode(ref)?.text ?? '');
        return;
      }
      for (const nm of names) {
        let set = driven.get(nm);
        if (!set) {
          set = new Set();
          driven.set(nm, set);
        }
        for (let p = from; p <= to; p++) {
          set.add(p);
        }
      }
    };

    const reportRequiredInputs = () => {
      for (const [nm, seen] of partsSeen) {
        const array = /^[^{]+/.exec(nm)?.[0] ?? nm;
        if (uncountable.has(array)) {
          continue;
        }
        for (const port of seen.sig.inPorts) {
          if (!port.optional && !port.variadic && port.s !== undefined && port.e !== undefined) {
            let any = false;
            for (let p = port.s; p <= port.e; p++) {
              if (driven.get(nm)?.has(p)) {
                any = true;
              }
            }
            if (!any) {
              add(
                seen.ref,
                `${nm}'s input "${port.name}" is never driven; wire something to ${port.name}[${array}], or mark it optional in ${seen.sig.name} with -> ${port.name}: ${port.type ?? 'bit'} = 0`,
              );
            }
          }
        }
      }
    };

    const noteVariadicPart = (ref: Node, sig: Sig) => {
      if (!sig.varIn) {
        return;
      }
      const names = concreteNames(ref);
      if (!names) {
        uncountable.add(refNameNode(ref)?.text ?? '');
        return;
      }
      for (const nm of names) {
        varEntry(nm, sig, ref);
      }
    };

    const reportVariadicCounts = () => {
      for (const [nm, e] of varCounts) {
        const vp = e.sig.varIn;
        const array = /^[^{]+/.exec(nm)?.[0] ?? nm;
        if (!vp || uncountable.has(array)) {
          continue;
        }
        let n = e.pins.size;
        for (const w of e.named.values()) {
          n += w;
        }
        const label = `${nm} gets ${n} pin${s(n)} on "${vp.name}"`;
        if (vp.min !== undefined && n < vp.min) {
          add(e.first, `${label}, but ${e.sig.name} needs at least ${vp.min}`);
        } else if (vp.max !== undefined && n > vp.max) {
          add(e.first, `${label}, but ${e.sig.name} takes at most ${vp.max}`);
        }
      }
    };

    const checkComponent = (ref: Node, pin: number | undefined, side: 'in' | 'out' | undefined, portNode?: Node) => {
      handled.add(ref.id);
      const r = resolveRef(ref, true);
      const name = refNameNode(ref)?.text ?? '';
      if (r && r.kind === 'value') {
        const val = r.value;
        if (portNode) {
          add(portNode, `"${name}" is a ${val.type ?? 'plain'} value, which has no named parts`);
          return;
        }
        const w = types.width(val.type);
        if (side === 'out' && pin !== undefined && w !== undefined && pin > w - 1) {
          const at = ref.parent?.parent ?? ref;
          add(at, `"${name}" is a ${val.type}; bit ${pin} is outside 0..${w - 1}`);
        }
        return;
      }
      const sig = r && r.kind === 'part' ? r.sig : undefined;
      if (!sig) {
        return;
      }
      mark(refNameNode(ref) ?? undefined);
      noteVariadicPart(ref, sig);
      notePart(ref, sig);
      if (portNode) {
        resolvePort(sig, portNode, side === 'in' ? 'in' : 'out');
        return;
      }
      let limit: number | undefined;
      if (side === 'in') {
        limit = typeof sig.inputs === 'number' ? sig.inputs : sig.inMax;
      } else if (side === 'out') {
        limit = typeof sig.outputs === 'number' ? sig.outputs : sig.outMax;
      }
      if (pin !== undefined && limit !== undefined && pin > limit - 1) {
        add(
          ref,
          `${sig.name} has ${limit} ${side === 'in' ? 'input' : 'output'} pin${s(limit)} (${pinSpan(limit)}); pin ${pin} does not exist`,
        );
      }
    };

    // How many pins a flow element puts onto the next one; undefined for things
    // that aren't signals (a constant like `0 ->` initializes, it doesn't drive).
    const sourceWidth = (el: Node): number | undefined => {
      const t = el.type;
      if (t === 'number') {
        return undefined;
      } else if (t === 'identifier') {
        const val = values.get(el.text);
        return types.width(val?.type) ?? 1;
      } else if (t === 'output_ref') {
        const portNode = portNodeOf(el);
        const arr = first(el, 'component_array');
        const refs = arr ? bracketIds(arr) : [];
        if (portNode) {
          if (refs.length !== 1) {
            return 1;
          }
          const sig = partSig(refs[0]);
          const port = sig ? findPort(sig.outPorts, portNode.text) : undefined;
          if (!port) {
            return undefined;
          }
          return types.width(port.type) ?? 1;
        }
        return 1;
      } else if (t === 'parameter_ref' || t === 'component_array') {
        const refs = t === 'parameter_ref' ? refItems(el) : bracketIds(el);
        if (refs.length !== 1) {
          return 1;
        }
        const r = resolveRef(refs[0], false);
        if (r && r.kind === 'value') {
          return types.width(r.value.type) ?? 1;
        }
        return (r && r.kind === 'part' && r.sig && types.width(r.sig.ret)) || 1;
      } else if (t === 'data_array') {
        let total = 0;
        for (const item of kids(el, 'data_item')) {
          const id = first(item, 'identifier');
          const arr = first(item, 'component_array');
          const out = first(item, 'output_ref');
          if (arr) {
            for (const ref of bracketIds(arr)) {
              total += refCount(ref);
            }
          } else if (out) {
            total += sourceWidth(out) ?? 1;
          } else {
            const val = id ? values.get(id.text) : undefined;
            total += types.width(val?.type) ?? 1;
          }
        }
        return total;
      }
      return 1;
    };

    const sourceKey = (source: Node, assign?: Map<string, number>): string | undefined => {
      const st = source.type;
      const refs = st === 'parameter_ref' ? refItems(source) : st === 'component_array' ? bracketIds(source) : [];
      if (refs.length === 1) {
        const names = concreteNames(refs[0], assign);
        return names ? `[${names.join(', ')}]` : undefined;
      }
      if (!assign && /\{\s*[A-Za-z_]/.test(source.text)) {
        return undefined;
      }
      return source.text.replace(/\s+/g, ' ');
    };

    const addDriver = (inst: string, from: number, to: number, key: string, node: Node) => {
      let pins = drivers.get(inst);
      if (!pins) {
        pins = new Map();
        drivers.set(inst, pins);
      }
      for (let p = from; p <= to; p++) {
        let srcs = pins.get(p);
        if (!srcs) {
          srcs = new Map();
          pins.set(p, srcs);
        }
        srcs.set(key, node);
      }
    };

    const trackFlow = (node: Node) => {
      const elements: Node[] = [];
      for (const child of kids(node)) {
        if (child.type === 'flow_source' || child.type === 'flow_destination' || child.type === 'pattern_result') {
          const f = first(child);
          if (f) {
            elements.push(f);
          }
        }
      }
      const validSource = (el: Node): boolean => {
        if (el.type === 'identifier') {
          return values.has(el.text);
        }
        let refs: Node[] = [];
        if (el.type === 'output_ref') {
          const arr = first(el, 'component_array');
          refs = arr ? bracketIds(arr) : [];
        } else if (el.type === 'parameter_ref') {
          refs = refItems(el);
        } else if (el.type === 'component_array') {
          refs = bracketIds(el);
        }
        for (const ref of refs) {
          const r = resolveRef(ref, false);
          if (!r) {
            return false;
          }
          const inst = r.kind === 'part' ? r.inst : undefined;
          if (inst && ref.type === 'instance_ref') {
            if (!inst.dims || !checkIndices(ref, inst, refNameNode(ref)?.text ?? '', true)) {
              return false;
            }
          } else if (inst && inst.dims) {
            return false;
          }
        }
        return true;
      };

      const steps = assignmentsFor(node) ?? [new Map<string, number>()];
      steps.forEach((assign, stepI) => {
        const silent = stepI > 0;
        const report = (n: Node, msg: string) => {
          if (!silent) {
            add(n, msg);
          }
        };
        for (let i = 1; i < elements.length; i++) {
          const dest = elements[i];
          const source = elements[i - 1];
          if (dest.type === 'parameter_ref') {
            const portNode = portNodeOf(dest);
            const w = sourceWidth(source) ?? 1;
            for (const ref of refItems(dest)) {
              const r = resolveRef(ref, false);
              if (r && r.kind === 'part' && r.sig) {
                if (portNode) {
                  const port = findPort(r.sig.inPorts, portNode.text);
                  if (port && port.s !== undefined) {
                    markDriven(ref, port.s, port.e ?? port.s, assign);
                  }
                } else {
                  const k = pinOf(dest);
                  if (k !== undefined) {
                    markDriven(ref, k, k + w - 1, assign);
                  }
                }
              }
            }
          } else if (dest.type === 'component_array') {
            const w = sourceWidth(source) ?? 1;
            for (const content of kids(dest)) {
              for (const ref of refItems(content)) {
                const r = resolveRef(ref, false);
                if (r && r.kind === 'part' && r.sig) {
                  markDriven(ref, 0, w - 1, assign);
                }
              }
            }
          }
          const width = validSource(source) ? sourceWidth(source) : undefined;
          if (width !== undefined && dest.type === 'identifier') {
            const out = values.get(dest.text);
            const ow = out && out.kind === 'output' ? types.width(out.type) : undefined;
            if (ow !== undefined && ow !== width) {
              report(
                dest,
                `"${source.text.replace(/\s+/g, ' ')}" is ${width} pin${s(width)} wide, but output ${dest.text} is a ${out!.type} (${ow} pin${s(ow)})`,
              );
            }
          } else if (width !== undefined && dest.type === 'parameter_ref') {
            const portNode = portNodeOf(dest);
            const key = sourceKey(source, assign);
            const label = key ?? source.text.replace(/\s+/g, ' ');
            for (const ref of refItems(dest)) {
              const r = resolveRef(ref, false);
              if (!(r && r.kind === 'part' && r.sig)) {
                continue;
              }
              const sig = r.sig;
              const names = key !== undefined ? concreteNames(ref, assign) : undefined;
              if (sig.varIn) {
                const vp = sig.varIn;
                if (!names) {
                  uncountable.add(refNameNode(ref)?.text ?? '');
                } else {
                  const byName = !!portNode && portNode.text === vp.name;
                  const k = !portNode ? pinOf(dest) : undefined;
                  for (const nm of names) {
                    const e = varEntry(nm, sig, ref);
                    if (byName && key !== undefined) {
                      e.named.set(key, width);
                    } else if (k !== undefined && vp.s !== undefined) {
                      for (let p = k; p <= k + width - 1; p++) {
                        if (p >= vp.s) {
                          e.pins.add(p);
                        }
                      }
                    }
                  }
                }
              }
              if (portNode) {
                const port = findPort(sig.inPorts, portNode.text);
                if (port && !port.variadic) {
                  const pw = types.width(port.type);
                  if (pw !== undefined && width !== pw) {
                    report(
                      dest,
                      `"${label}" is ${width} pin${s(width)} wide, but ${port.name} of ${sig.name} is a ${port.type} (${pw} pin${s(pw)})`,
                    );
                  }
                  if (port.s !== undefined && port.e !== undefined && names && key !== undefined) {
                    for (const nm of names) {
                      addDriver(nm, port.s, port.e, key, dest);
                    }
                  }
                }
              } else {
                const k = pinOf(dest);
                if (k !== undefined) {
                  const nPins = typeof sig.inputs === 'number' ? sig.inputs : undefined;
                  if (nPins !== undefined && width > 1 && k + width - 1 > nPins - 1) {
                    report(
                      dest,
                      `"${label}" is ${width} pins wide; starting at pin ${k} it needs pins ${k}..${k + width - 1}, but ${sig.name} has ${pinSpan(nPins)}`,
                    );
                  }
                  if (key !== undefined) {
                    for (const nm of names ?? []) {
                      addDriver(nm, k, k + width - 1, key, dest);
                    }
                  }
                }
              }
            }
          }
        }
      });
    };

    const armChain = (node: Node): Map<number, number> => {
      const chain = new Map<number, number>();
      let p = node.parent;
      while (p) {
        if (p.type === 'pattern_case' && p.parent) {
          chain.set(p.parent.id, p.id);
        }
        p = p.parent;
      }
      return chain;
    };

    const exclusive = (a: Node, b: Node): boolean => {
      const ca = armChain(a);
      const cb = armChain(b);
      for (const [m, arm] of ca) {
        if (cb.has(m) && cb.get(m) !== arm) {
          return true;
        }
      }
      return false;
    };

    const reportWiredOr = () => {
      for (const [inst, pins] of drivers) {
        const groups = new Map<string, { keys: string[]; pins: number[]; node?: Node }>();
        for (const [p, sources] of pins) {
          const keys: string[] = [];
          for (const [k1, n1] of sources) {
            for (const [k2, n2] of sources) {
              if (k1 !== k2 && !exclusive(n1, n2)) {
                keys.push(k1);
                break;
              }
            }
          }
          if (keys.length > 1) {
            keys.sort();
            const gkey = keys.join('\0');
            let g = groups.get(gkey);
            if (!g) {
              g = { keys, pins: [] };
              groups.set(gkey, g);
            }
            g.pins.push(p);
            for (const k of keys) {
              const n = sources.get(k)!;
              if (!g.node || n.startPosition.row > g.node.startPosition.row) {
                g.node = n;
              }
            }
          }
        }
        for (const g of groups.values()) {
          g.pins.sort((a, b) => a - b);
          const quoted = g.keys.map((k) => `"${k}"`);
          add(
            g.node!,
            `${g.pins.length === 1 ? 'pin' : 'pins'} ${describePins(g.pins)} of ${inst} ${g.pins.length === 1 ? 'is' : 'are'} driven by ${quoted.join(' and ')}; redstone keeps the strongest of these (for on/off signals, an OR)`,
            config.wiredOrSeverity,
          );
        }
      }
    };

    const checkOutputs = () => {
      const sig = scope.sig;
      if (!sig) {
        return;
      }
      const declared = sig.outPorts.filter((p) => !p.implicit);
      const emits = (declared.length === 1 && declared[0].emits) || (declared.length === 0 && sig.emits);
      for (const y of yields) {
        if (declared.length < 2 && emits && y.arrow === '=>') {
          add(y.node, `${sig.name} emits into the air, so its output leaves with ~>, not =>`);
        } else if (declared.length < 2 && !emits && y.arrow === '~>') {
          add(y.node, `${sig.name} drives a wire, so its output leaves with =>; ~> is for vibrations sent into the air`);
        }
      }
      if (declared.length >= 2) {
        const names = declared.map((p) => p.name);
        for (const y of yields) {
          add(
            y.node,
            `${sig.name} has several outputs (${names.join(', ')}), so a bare "=>" is ambiguous; send to one by name, e.g. -> ${names[0]}`,
          );
        }
      } else {
        const targetType = (declared.length === 1 ? declared[0].type : undefined) || sig.ret;
        const tw = types.width(targetType);
        for (const y of yields) {
          const limit = targetType ? LEVELS[targetType] : undefined;
          if (y.value && y.value.type === 'number' && limit !== undefined) {
            const n = num(y.value);
            if (n !== undefined && n > limit) {
              add(y.value, `${n} does not fit in ${sig.name}'s output, a ${targetType} (max ${limit})`);
            }
          }
          const w = y.value ? sourceWidth(y.value) : undefined;
          if (tw !== undefined && w !== undefined && w !== tw) {
            add(y.node, `this yields ${w} pin${s(w)}, but ${sig.name} outputs a ${targetType} (${tw} pin${s(tw)})`);
          }
        }
      }
      for (const port of declared) {
        const val = values.get(port.name);
        const isDriven = (val && val.driven) || (declared.length === 1 && yields.length > 0);
        if (!isDriven && port.idNode) {
          add(port.idNode, `output "${port.name}" is never driven; send a value to it with -> ${port.name}`, WARN);
        }
      }
    };

    const checkPattern = (pm: Node) => {
      const subject = field(pm, 'subject');
      if (!subject) {
        return;
      }
      const whole: (string | false)[] = [];
      const bits: string[] = [];
      let bitsKnown = true;
      const choiceOpts = new Map<number, { name: string; options: string[]; optionSet: Set<string> }>();
      const BUNDLE_TYPE: Record<number, string> = { 1: 'bit', 2: 'tuple', 4: 'nibble', 8: 'byte' };
      const addBundle = (n: number) => {
        whole.push(BUNDLE_TYPE[n] ?? false);
        for (let i = 0; i < n; i++) {
          bits.push('bit');
        }
      };
      for (const item of kids(subject, 'data_item')) {
        const arr = first(item, 'component_array');
        const out = first(item, 'output_ref');
        if (arr || (out && !portNodeOf(out))) {
          const holder = arr ?? (out ? first(out, 'component_array') : undefined);
          let n = 0;
          for (const ref of holder ? bracketIds(holder) : []) {
            n += refCount(ref);
          }
          addBundle(n);
        } else if (out) {
          addBundle(sourceWidth(out) ?? 1);
        } else if (first(item, 'operator_call')) {
          whole.push('strength');
          bits.push('bit');
        } else {
          const id = first(item, 'identifier');
          const val = id ? values.get(id.text) : undefined;
          let ty: string | false = val?.type ?? false;
          if (val && val.kind === 'setting') {
            if (val.type === 'choice' && val.setting) {
              choiceOpts.set(whole.length, val.setting);
            }
            ty = val.type === 'number' ? 'setting_number' : 'setting_' + val.type;
          } else if (val && val.enumDef) {
            choiceOpts.set(whole.length, val.enumDef);
            ty = 'enum';
          }
          whole.push(ty);
          const w = ty ? (types.width(ty) ?? (ty === 'tuple' ? 2 : undefined)) : undefined;
          if (w !== undefined) {
            for (let i = 0; i < w; i++) {
              bits.push('bit');
            }
          } else {
            bitsKnown = false;
          }
        }
      }

      const checkFit = (numNode: Node | undefined, slot: string | false | undefined) => {
        const limit = maxFor(slot);
        if (!numNode || limit === undefined || !slot) {
          return;
        }
        const text = numNode.text;
        const isBits = text.length > 1 && /^[01]+$/.test(text) && text.length === types.width(slot);
        const n = /^\d+$/.test(text) ? Number(text) : undefined;
        if (!isBits && n !== undefined && n > limit) {
          if (slot === 'strength' || types.width(slot) === 1) {
            add(numNode, `${text} does not fit in a ${slot} (max ${limit})`);
          } else {
            add(numNode, `${text} does not fit in a ${slot} (max ${limit}, or ${types.width(slot)} binary digits)`);
          }
        }
      };

      const checkPatternValue = (pv: Node, i: number, slots: (string | false)[]) => {
        const slot = slots[i];
        const choice = slots === whole ? choiceOpts.get(i) : undefined;
        const numNode = first(pv, 'number') ?? first(pv, 'tuple_literal');
        const range = first(pv, 'pattern_range');
        const name = first(pv, 'identifier');
        if (choice) {
          if (numNode || range) {
            add((numNode ?? range)!, `"${choice.name}" is a choice; match it by name: ${choice.options.join(', ')}`);
          } else if (name && !choice.optionSet.has(name.text)) {
            add(name, `"${name.text}" is not an option of ${choice.name}; its options are: ${choice.options.join(', ')}`);
          }
          return;
        }
        if (range) {
          const a = field(range, 'start');
          const b = field(range, 'end');
          checkFit(a, slot);
          checkFit(b, slot);
          const na = num(a);
          const nb = num(b);
          if (na !== undefined && nb !== undefined && nb < na) {
            add(range, `range ${na}..${nb} runs backwards; write ${nb}..${na}`);
          }
        } else {
          checkFit(numNode, slot);
        }
      };

      const elementType = (slot: string | false | undefined) => {
        if (!slot) {
          return undefined;
        }
        const m = /^\{(.*)\}$/s.exec(slot);
        return m ? m[1] : slot;
      };

      let catchAllLine: number | undefined;
      const seen = new Map<string, number>();
      for (const kase of kids(pm, 'pattern_case')) {
        const pvals = kids(kase, 'pattern_value');
        const line = kase.startPosition.row + 1;
        const texts = pvals.map((pv) => pv.text);
        const key = texts.join(',');
        if (catchAllLine !== undefined) {
          add(kase, `this arm can never match: arms are tried in order, and the arm on line ${catchAllLine} matches everything`, WARN);
        } else if (seen.has(key)) {
          add(kase, `this arm can never match: the arm on line ${seen.get(key)} has the same pattern and is tried first`, WARN);
        }
        if (!seen.has(key)) {
          seen.set(key, line);
        }
        const everything = pvals.length > 0 && texts.every((t) => t === '*' || t === '**');
        if (everything && catchAllLine === undefined) {
          catchAllLine = line;
        }

        let repeatNode: Node | undefined;
        pvals.forEach((pv, i) => {
          const r = first(pv, 'pattern_repeat');
          if (r && i < pvals.length - 1) {
            add(r, 'only the last value of a pattern can repeat');
          } else if (r) {
            repeatNode = r;
          }
        });

        if (repeatNode) {
          const fixed = pvals.length - 1;
          const slots = whole.length > fixed ? whole : bitsKnown && bits.length > fixed ? bits : undefined;
          if (whole.length < fixed && !(bitsKnown && bits.length >= fixed)) {
            addSpan(pvals[0], pvals[pvals.length - 1], `pattern has ${fixed} value(s) before the repeat, but the subject has ${whole.length}`);
          } else if (slots) {
            for (let i = 0; i < fixed; i++) {
              checkPatternValue(pvals[i], i, slots);
            }
            const rv = field(repeatNode, 'value');
            if (rv && (rv.type === 'number' || rv.type === 'tuple_literal')) {
              checkFit(rv, elementType(slots[fixed]));
            }
          }
        } else {
          let slots: (string | false)[] | undefined;
          if (pvals.length === whole.length) {
            slots = whole;
          } else if (bitsKnown && pvals.length === bits.length) {
            slots = bits;
          }
          if (pvals.length > 0 && !slots) {
            let expected = String(whole.length);
            if (bitsKnown && bits.length !== whole.length) {
              expected = `${whole.length} (or ${bits.length} bitwise)`;
            }
            addSpan(pvals[0], pvals[pvals.length - 1], `pattern has ${pvals.length} value(s) but the subject has ${expected}`);
          } else if (slots) {
            pvals.forEach((pv, i) => checkPatternValue(pv, i, slots!));
          }
        }
      }
    };

    const checkDuration = (node: Node | undefined) => {
      if (!node) {
        return;
      }
      const text = node.text;
      if (node.type === 'number') {
        add(node, `times need a unit: write ${text}rt (redstone ticks) or ${text}gt (game ticks); a redstone tick is 2 game ticks`);
      } else if (node.type === 'time') {
        const gt = parseTime(text);
        if (gt === undefined) {
          add(node, `"${text}" is not a time; use gt (game ticks) or rt (redstone ticks)`);
        } else if (gt === 0) {
          add(node, 'a delay of 0 is no delay; use -> or leave the block out', WARN);
        }
      } else if (node.type === 'identifier') {
        const v = values.get(text);
        if (!v || v.kind !== 'setting' || v.type !== 'time') {
          add(node, `"${text}" is not a time setting of this component; give a time like 2gt, or declare SETTING ${text}: 1rt..4rt`);
        }
      }
    };

    const EVENT_BLOCKS = new Set(['event_block', 'change_block', 'after_block', 'hear_block']);
    const insideEvent = (node: Node): boolean => {
      let p = node.parent;
      while (p) {
        if (EVENT_BLOCKS.has(p.type)) {
          return true;
        }
        p = p.parent;
      }
      return false;
    };

    /** Does this carry a value that travels on a pin? Those are strengths, so
     * arithmetic that touches one stops at 15; settings and plain numbers are
     * build-time arithmetic and have no ceiling. */
    const carriesSignal = (n: Node): boolean => {
        if (n.type === 'identifier') {
            const v = values.get(n.text);
            return !!v && v.kind !== 'setting';
        }
        if (n.type === 'operator_call') {
            return fields(n, 'arg').some(carriesSignal);
        }
        return false;
    };

    /** Whether numbers above 15 make sense inside this call. */
    const callIsWide = (call: Node): boolean => {
        const op = OPERATORS[field(call, 'name')?.text ?? ''];
        if (!op) {
            return false;
        }
        const args = fields(call, 'arg');
        // A signal decides it: once a pin's value is in the sum, the result is a
        // strength, whatever else the sum adds up.
        if (op.wideUnlessSignal && args.some(carriesSignal)) {
            return false;
        }
        // vib.dist is measured in blocks, so it is already beyond 0..15.
        if (args.some((a) => a.type === 'field_access')) {
            return true;
        }
        return op.wideUnlessSignal || !op.wide;
    };

    const checkOperator = (call: Node) => {
      const nameNode = field(call, 'name');
      const name = nameNode?.text;
      const op = name ? OPERATORS[name] : undefined;
      if (!op) {
        add(nameNode ?? call, `"${name ?? '?'}" is not an operator; the operators are: ${Object.keys(OPERATORS).sort().join(', ')}`);
        return;
      }
      mark(nameNode, 'operator');
      const args = fields(call, 'arg');
      const wide = callIsWide(call);
      const capped = args.find(carriesSignal);
      if (args.length < op.min || (op.max !== undefined && args.length > op.max)) {
        const want = op.max === op.min ? String(op.min) : `at least ${op.min}`;
        const plural = !(op.min === 1 && op.max === 1);
        add(call, `${name} takes ${want} value${plural ? 's' : ''} (${op.what}); this has ${args.length}`);
      }
      args.forEach((arg, i) => {
        if (arg.type === 'number') {
          const n = num(arg);
          if (n !== undefined && n > 15 && !wide) {
            add(
                arg,
                capped && op.wideUnlessSignal
                    ? `${n} is not a strength; "${capped.text}" travels on a pin, so this ${name} stops at 15`
                    : `${n} is not a strength; strengths go from 0 to 15`,
            );
          } else if ((name === 'mod' || name === 'div') && i === 1 && n === 0) {
            add(arg, name === 'mod' ? 'mod by 0 has no remainder' : 'dividing by 0 has no result');
          }
        } else if (arg.type === 'identifier') {
          checkValue(arg, 'operand');
          const v = values.get(arg.text);
          const w = v && v.kind !== 'setting' ? types.width(v.type) : undefined;
          if (w !== undefined && w > 1) {
            add(arg, `${name} reads single pins as strengths, but "${arg.text}" is a ${v!.type} (${w} pins)`);
          }
        }
      });
    };

    const checkStateWrite = (sw: Node) => {
      const id = first(sw, 'identifier');
      if (!id) {
        return;
      }
      const name = id.text;
      const val = values.get(name);
      if (!val || val.kind !== 'state') {
        add(id, `"${name}" is not a declared state variable`);
        return;
      }
      if (!insideEvent(sw)) {
        add(sw, 'state is only written inside an event: WAIT(...), CHANGE(...), HEAR(...), or an AFTER(...) within one', WARN);
      }
      const parent = sw.parent;
      if (val.enumDef) {
        let written: Node | undefined;
        if (parent && parent.type === 'flow') {
          for (const child of parent.children) {
            if (child && (child.type === 'flow_source' || child.type === 'flow_destination')) {
              written = first(child);
            }
          }
        } else if (parent && parent.type === 'pattern_case') {
          const result = first(parent, 'pattern_result');
          written = result ? first(result) : undefined;
        }
        const opts = val.enumDef.options.join(', ');
        if (written && written.type === 'number') {
          add(written, `${name} holds one of ${opts}, not a number`);
        } else if (written && written.type === 'identifier') {
          const wn = written.text;
          if (enumOptions.has(wn) && !val.enumDef.optionSet.has(wn)) {
            add(written, `"${wn}" is not one of ${name}'s options: ${opts}`);
          }
        }
        return;
      }
      if (parent && parent.type === 'pattern_case') {
        const result = first(parent, 'pattern_result');
        const n0 = result ? first(result, 'number') : undefined;
        const limit = maxFor(val.type);
        const n = num(n0);
        if (n0 && limit !== undefined && n !== undefined && n > limit) {
          add(n0, `${n} does not fit in ${name} (${val.type}, max ${limit})`);
        }
      }
    };

    const checkStateDecl = (sd: Node) => {
      const ty = first(sd, 'type');
      const en = ty ? first(ty, 'enum_type') : undefined;
      if (en) {
        const ids = kids(sd, 'identifier');
        const v = ids[0] ? values.get(ids[0].text) : undefined;
        const def = v?.enumDef;
        if (def) {
          const opts = def.options.join(', ');
          if (ids[1] && !def.optionSet.has(ids[1].text)) {
            add(ids[1], `"${ids[1].text}" is not one of ${def.name}'s options: ${opts}`);
          }
          const n0 = first(sd, 'number');
          if (n0) {
            add(n0, `${def.name} holds one of ${opts}, not a number`);
          }
        }
        return;
      }
      const tname = ty?.text;
      const w = types.width(tname);
      if (!tname || w === undefined) {
        return;
      }
      const n0 = first(sd, 'number');
      const limit = LEVELS[tname];
      const n = num(n0);
      if (n0 && limit !== undefined && n !== undefined && n > limit) {
        add(n0, `${n} does not fit in a ${tname} (max ${limit})`);
      }
      const arr = first(sd, 'data_array');
      if (arr) {
        const count = kids(arr, 'data_item').length;
        if (count !== w) {
          add(arr, `a ${tname} has ${w} bit(s); this initializer has ${count}`);
        }
      }
    };

    const checkHear = (hb: Node) => {
      const source = field(hb, 'source');
      if (source) {
        checkValue(source, 'trigger');
        const v = values.get(source.text);
        const ty = v?.type?.replace(/\s/g, '');
        if (v && ty !== 'vibration' && ty !== '{vibration}') {
          add(source, `HEAR listens for vibrations, but "${source.text}" is a ${v.type ?? 'plain value'}; declare it as -> ${source.text}: {vibration}`);
        }
      }
      const v = field(hb, 'var');
      if (v) {
        if (values.has(v.text) || instances.has(v.text)) {
          add(v, `"${v.text}" is already a name in this component; pick another name for the vibration`, WARN);
        } else if (hearBlockFor(hb, v.text)) {
          add(v, `"${v.text}" is already the vibration of a HEAR around this one; give this one another name`, WARN);
        }
      }
    };

    const actsBeforeWhere = (stmt: Node): string | undefined => {
      if (stmt.type !== 'flow') {
        return 'only wires that name a value for WHERE can come before it';
      }
      for (const child of stmt.children) {
        if (!child) {
          continue;
        }
        const ct = child.type;
        if (ct === 'state_write') {
          return 'writing state before WHERE would happen for vibrations it then drops';
        } else if (ct === '=>') {
          return 'yielding before WHERE would happen for vibrations it then drops';
        } else if (ct === 'delay' || ct === 'vibration_link') {
          return 'nothing can wait before WHERE: the filter runs the moment a vibration arrives';
        } else if (ct === 'flow_destination') {
          const id = first(child);
          const v = id && id.type === 'identifier' ? values.get(id.text) : undefined;
          if (!(v && v.kind === 'wire')) {
            return 'sending anywhere but a plain wire before WHERE would happen for vibrations it then drops';
          }
        }
      }
      return undefined;
    };

    const checkWhere = (w: Node) => {
      const block = w.parent;
      const hear = block?.parent;
      if (!(block && block.type === 'block' && hear && hear.type === 'hear_block')) {
        add(w, 'WHERE filters the vibrations a HEAR accepts; it belongs in a HEAR(...) body');
      } else {
        let seenWhere = false;
        for (const child of block.children) {
          if (!child || !child.isNamed || child.type === 'comment') {
            continue;
          }
          if (child.id === w.id) {
            seenWhere = true;
          } else if (child.type === 'where_clause') {
            if (!seenWhere) {
              add(w, 'a HEAR body has one WHERE; combine the conditions into one pattern');
            }
          } else if (!seenWhere) {
            const why = actsBeforeWhere(child);
            if (why) {
              add(child, why + '; move this line below the WHERE');
            }
          }
        }
      }
      for (const kase of kids(w, 'pattern_case')) {
        const result = first(kase, 'pattern_result');
        const n0 = result ? first(result, 'number') : undefined;
        const text = n0?.text;
        if (text !== '0' && text !== '1') {
          add(result ?? kase, 'a WHERE arm yields 1 to keep the vibration or 0 to drop it');
        }
      }
    };

    const checkFieldAccess = (fa: Node) => {
      const obj = field(fa, 'object');
      const fld = field(fa, 'field');
      if (!obj || !fld) {
        return;
      }
      const name = obj.text;
      let ty: string | undefined;
      if (hearBlockFor(fa, name)) {
        ty = 'vibration';
      } else {
        const v = values.get(name);
        if (!v) {
          add(obj, `"${name}" is not declared here; fields like ${name}.freq are read from a HEAR's vibration, inside HEAR(${name} IN ...)`, config.undeclaredSignalSeverity);
          return;
        }
        ty = v.type;
      }
      const flds = ty ? FIELDS[ty] : undefined;
      if (!flds) {
        add(fa, `"${name}" is a ${ty ?? 'plain value'}, which has no fields`);
        return;
      }
      if (!(fld.text in flds)) {
        add(fld, `a ${ty} has no field "${fld.text}"; its fields are: ${fieldList(ty!)}`);
      }
    };

    const checkNamedItem = (item: Node) => {
      const nNode = field(item, 'name');
      if (nNode && !(nNode.text in FIELDS.vibration)) {
        add(nNode, `"${nNode.text}" is not a field of a vibration; its fields are: ${fieldList('vibration')}`, WARN);
      }
      const vNode = field(item, 'value');
      if (vNode && vNode.type === 'identifier') {
        checkValue(vNode, 'flow');
      }
    };

    // Pass 2: uses.
    for (const n of scope.nodes) {
      walk(n, (x) => {
        const t = x.type;
        if (t === 'instance_declaration') {
          return false;
        }
        if (t === 'flow' || t === 'pattern_case') {
          const p = x.parent;
          const inWhere = t === 'pattern_case' && p && p.type === 'where_clause';
          if (!inWhere) {
            trackFlow(x);
            let last: Node | undefined;
            for (const child of x.children) {
              if (!child) {
                continue;
              }
              const ct = child.type;
              if (ct === 'flow_source' || ct === 'flow_destination' || ct === 'pattern_result') {
                last = first(child);
              } else if (!child.isNamed && (ct === '=>' || ct === '~>')) {
                yields.push({ node: child, value: last, arrow: ct });
              }
            }
          }
        }
        if (t === 'each_block') {
          const v = field(x, 'var');
          const r = field(x, 'range');
          if (r) {
              const openR = openEnd(r);
              if (openR) {
                  add(openR, 'an EACH range needs both ends; with "*" the body would repeat forever');
              }
            const [a, b] = rangeNums(r);
            if (a !== undefined && b !== undefined && b < a) {
              add(r, `range ${a}..${b} runs backwards; write ${b}..${a}`);
            }
          }
          if (v) {
            if (bindingsAt(x).has(v.text)) {
              add(v, `"${v.text}" is already an EACH variable around this one; inner and outer indices need different names`, WARN);
            } else if (values.has(v.text) || instances.has(v.text)) {
              add(v, `"${v.text}" is already a name in this component; pick another index name`, WARN);
            }
          }
        }

        if (t === 'parameter_ref') {
          const pin = pinOf(x);
          const portNode = portNodeOf(x);
          for (const ref of refItems(x)) {
            checkComponent(ref, pin, 'in', portNode);
          }
          return false;
        } else if (t === 'output_ref') {
          const arr = first(x, 'component_array');
          if (arr) {
            const pin = pinOf(x);
            const portNode = portNodeOf(x);
            for (const id of bracketIds(arr)) {
              checkComponent(id, pin, 'out', portNode);
            }
          }
        } else if (t === 'component_array') {
          for (const id of bracketIds(x)) {
            if (!handled.has(id.id)) {
              checkComponent(id, undefined, undefined);
            }
          }
        } else if (t === 'timing_ref') {
          const id = first(x, 'identifier');
          if (id) {
            checkComponent(id, undefined, undefined);
          }
        } else if (t === 'flow_source' || t === 'pattern_result') {
          const id = first(x, 'identifier');
          if (id) {
            checkValue(id, 'flow');
          }
        } else if (t === 'data_item') {
          const id = first(x, 'identifier');
          if (id && !hasAncestor(x, 'flow_destination') && !hasAncestor(x, 'state_declaration')) {
            const holder = x.parent?.parent;
            const inSubject = !!holder && (holder.type === 'pattern_match' || holder.type === 'where_clause');
            checkValue(id, inSubject ? 'subject' : 'flow');
          }
        } else if (t === 'event_block' || t === 'change_block') {
          const trig = field(x, 'trigger');
          if (trig) {
            checkValue(trig, 'trigger');
          }
        } else if (t === 'hear_block') {
          checkHear(x);
        } else if (t === 'where_clause') {
          checkWhere(x);
          checkPattern(x);
        } else if (t === 'field_access') {
          checkFieldAccess(x);
          return false;
        } else if (t === 'named_item') {
          checkNamedItem(x);
        } else if (t === 'after_block') {
          checkDuration(field(x, 'delay'));
          if (!insideEvent(x)) {
            add(x, 'AFTER counts from an event; put it inside WAIT(...), CHANGE(...), or HEAR(...)');
          }
        } else if (t === 'sequence_block') {
          checkDuration(field(x, 'delay'));
        } else if (t === 'delay') {
          checkDuration(field(x, 'time'));
        } else if (t === 'operator_call') {
          checkOperator(x);
        } else if (t === 'setting_declaration') {
          return false;
        } else if (t === 'control_statement') {
          const id = first(x, 'identifier');
          if (id) {
            checkValue(id, 'flow');
          }
        } else if (t === 'pattern_match') {
          checkPattern(x);
        } else if (t === 'state_write') {
          checkStateWrite(x);
        } else if (t === 'state_declaration') {
          checkStateDecl(x);
        }
        return undefined;
      });
    }

    reportWiredOr();
    checkOutputs();
    reportVariadicCounts();
    reportRequiredInputs();

    for (const [name, inst] of instances) {
      if (!inst.used) {
        add(inst.node, `"${name}" is declared but never wired`, WARN);
      }
    }
  }

  walk(root, (n) => {
      if (n.type === 'type_arguments') {
          for (const r of kids(n, 'range')) {
              const open = openEnd(r);
              if (open) {
                  add(open, 'a type needs a definite number of pins, so this range needs both ends');
              }
          }
      } else if (n.type === 'vibration_link') {
          const open = openEnd(field(n, 'distance'));
          if (open) {
              add(open, 'a vibration needs a distance with both ends, since how long it takes to arrive depends on it');
          }
      }
  });

  // Syntax errors take precedence: name checks on broken lines are dropped,
  // and a name that appears on a broken line may be declared there.
  if (errorRows.size > 0) {
    const maybeDeclared = new Set<string>();
    for (const row of errorRows) {
      for (const word of (lines[row] ?? '').match(/[A-Za-z_&][A-Za-z0-9_&]*/g) ?? []) {
        maybeDeclared.add(word);
      }
    }
    diags = diags.filter((d) => {
      const u = d.unknown;
      return !(errorRows.has(d.range.start.line) || (u && (maybeDeclared.has(u[0]) || maybeDeclared.has(u[1]))));
    });
  }
  diags.push(...syntaxDiags);

  // What each component covers, for hover and completion.
  const comps = scopes;
  for (let i = 0; i < comps.length; i++) {
    const sc = comps[i];
    const startLine = sc.decl ? sc.decl.startPosition.row : 0;
    const next = comps[i + 1];
    const endLine = next && next.decl ? next.decl.startPosition.row - 1 : lines.length - 1;
    scopesOut.push({ sig: sc.sig, startLine, endLine, values: sc.values, instances: sc.instances });
  }

  return { tree, diagnostics: diags, marks, known, types, scopes: scopesOut, imports, root, lines };
}

export { BASE_WIDTH };
