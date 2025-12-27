// ESM shim that loads the UMD/CJS build and exports its default.
// Uses top-level await to fetch and evaluate the UMD bundle in-browser
// and return the exported constructor/object.

const url = '/node_modules/stats.js/build/stats.min.js';
const res = await fetch(url);
if (!res.ok) throw new Error(`Failed to fetch stats.js from ${url}: ${res.status}`);
const code = await res.text();

const module = { exports: {} };
const exports = module.exports;

// Evaluate the UMD/CJS bundle in a safe function scope and capture module.exports
const fn = new Function('module', 'exports', 'window', code + '\nreturn module.exports || window.Stats;');
const exported = fn(module, exports, typeof window !== 'undefined' ? window : {});

export default exported;