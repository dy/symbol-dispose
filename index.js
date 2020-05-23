/* global window */
var ponyfill = require('./ponyfill.js')

var root;
if (typeof globalThis !== 'undefined') root = globalThis;
else if (typeof self !== 'undefined') root = self;
else if (typeof window !== 'undefined') root = window;
else if (typeof global !== 'undefined') root = global;
else if (typeof module !== 'undefined') root = module;
else root = Function('return this')();

var symbols = ponyfill(root)

module.exports = symbols
module.exports['default'] = symbols


