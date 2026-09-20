// Loads the Tikker grammar (compiled to WebAssembly) once, and parses text.

import * as path from 'path';
import { Language, Parser, Tree } from 'web-tree-sitter';

let parser: Parser | undefined;

export async function initParser(wasmPath?: string): Promise<void> {
  if (parser) {
    return;
  }
  // web-tree-sitter.wasm (the tree-sitter runtime) sits next to this script.
  await Parser.init({ locateFile: (name: string) => path.join(__dirname, name) });
  const file = wasmPath ?? path.join(__dirname, '..', 'tree-sitter-tikker.wasm');
  const language = await Language.load(file);
  parser = new Parser();
  parser.setLanguage(language);
}

export function parse(text: string): Tree {
  if (!parser) {
    throw new Error('initParser() has not finished');
  }
  const tree = parser.parse(text);
  if (!tree) {
    throw new Error('the parser returned no tree');
  }
  return tree;
}
