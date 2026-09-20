// Small helpers over web-tree-sitter nodes, mirroring the ones the Lua
// checker used, so the port reads the same.

import type { Node } from 'web-tree-sitter';

export type { Node };

/** Named children, optionally only those of one type. */
export function kids(node: Node, type?: string): Node[] {
  const out: Node[] = [];
  for (const child of node.children) {
    if (child && child.isNamed && (type === undefined || child.type === type)) {
      out.push(child);
    }
  }
  return out;
}

export function first(node: Node, type?: string): Node | undefined {
  return kids(node, type)[0];
}

/** The first child in a field, like `node:field(name)[1]` in the Lua version. */
export function field(node: Node, name: string): Node | undefined {
  return node.childForFieldName(name) ?? undefined;
}

export function fields(node: Node, name: string): Node[] {
  return node.childrenForFieldName(name).filter((n): n is Node => !!n);
}

/**
 * Depth-first walk over named nodes. Returning false skips a node's
 * children. ERROR regions are skipped: their contents are fragments from
 * error recovery, and they're reported as syntax errors instead.
 */
export function walk(node: Node, fn: (n: Node) => boolean | void): void {
  if (node.type === 'ERROR') {
    return;
  }
  if (fn(node) === false) {
    return;
  }
  for (const child of node.children) {
    if (child && child.isNamed) {
      walk(child, fn);
    }
  }
}

export function hasAncestor(node: Node, type: string): boolean {
  let p = node.parent;
  while (p) {
    if (p.type === type) {
      return true;
    }
    p = p.parent;
  }
  return false;
}

export interface Range {
  start: { line: number; character: number };
  end: { line: number; character: number };
}

export function rangeOf(node: Node): Range {
  return {
    start: { line: node.startPosition.row, character: node.startPosition.column },
    end: { line: node.endPosition.row, character: node.endPosition.column },
  };
}

export function spanOf(a: Node, b: Node): Range {
  return { start: rangeOf(a).start, end: rangeOf(b).end };
}

/** The smallest named node covering a position. */
export function nodeAt(root: Node, line: number, character: number): Node | null {
  return root.namedDescendantForPosition({ row: line, column: character });
}
