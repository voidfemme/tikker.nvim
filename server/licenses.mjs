// Writes dist/THIRD_PARTY_LICENSES: the license of every package esbuild put
// into the bundle, read from the metafile the build just wrote. MIT (and
// similar) licenses require their notice to travel with the code.
import fs from 'node:fs';
import path from 'node:path';

const meta = JSON.parse(fs.readFileSync('build/meta.json', 'utf8'));
const packages = new Set();
for (const input of Object.keys(meta.inputs)) {
  const m = input.match(/node_modules\/((?:@[^/]+\/)?[^/]+)/);
  if (m) packages.add(m[1]);
}

const parts = [
  'Tikker itself is released under the WTFPL (see LICENSE in the repository).',
  'server.js, cli.js and web-tree-sitter.wasm in this folder also contain the',
  'following packages, under their own licenses.',
];
for (const name of [...packages].sort()) {
  const dir = path.join('node_modules', name);
  const pkg = JSON.parse(fs.readFileSync(path.join(dir, 'package.json'), 'utf8'));
  const file = fs.readdirSync(dir).find((f) => /^licen[cs]e(\.(md|txt))?$/i.test(f));
  if (!file) throw new Error(`no license file found for ${name}`);
  const text = fs.readFileSync(path.join(dir, file), 'utf8').trim();
  parts.push('', '='.repeat(72), `${name} ${pkg.version} (${pkg.license})`, '='.repeat(72), '', text);
}
fs.writeFileSync('dist/THIRD_PARTY_LICENSES', parts.join('\n') + '\n');
console.log(`THIRD_PARTY_LICENSES: ${packages.size} packages`);
