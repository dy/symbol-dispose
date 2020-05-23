export default ({ Symbol }) => ({
  dispose: typeof Symbol === 'function' ? (Symbol.dispose || (Symbol.dispose = Symbol('dispose'))) : '@@dispose',
  asyncDispose: typeof Symbol === 'function' ? (Symbol.asyncDispose || (Symbol.asyncDispose = Symbol('asyncDispose'))) : '@@asyncDispose'
})
