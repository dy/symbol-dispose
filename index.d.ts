export const dispose: symbol;
export const asyncDispose: symbol;

declare global {
  export interface SymbolConstructor {
    readonly dispose: symbol;
    readonly asyncDispose: symbol;
  }
}

export interface Symbol {
  readonly [Symbol.dispose]: symbol;
  readonly [Symbol.asyncDispose]: symbol;
}
