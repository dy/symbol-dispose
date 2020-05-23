function ponyfill (root) {
  var Symbol = root.Symbol
  return {
    dispose: typeof Symbol === 'function' ? (Symbol.dispose || (Symbol.dispose = Symbol('dispose'))) : '@@dispose',
    asyncDispose: typeof Symbol === 'function' ? (Symbol.asyncDispose || (Symbol.asyncDispose = Symbol('asyncDispose'))) : '@@asyncDispose'
  }
}
module.exports = ponyfill
module.exports['default'] = ponyfill
