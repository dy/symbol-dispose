# symbol-dispose [![Build Status](https://travis-ci.org/spectjs/symbol-dispose.svg?branch=master)](https://travis-ci.org/spectjs/symbol-dispose)

> [`Symbol.dispose`/`Symbol.asyncDispose`](https://github.com/tc39/proposal-explicit-resource-management#api) [ponyfill](https://ponyfill.com)


## Install

```
$ npm install --save symbol-dispose
```

## Basic Usage

```ts
import * as symbol from 'symbol-dispose';

console.log(symbol);
//=> { dispose: Symbol(dispose), asyncDispose: Symbol(asyncDispose) }

someObject[symbol.dispose] = () => someObject.removeEventListener('data', handler);
```

## Related

- [symbol-observable](https://ghub.io/symbol-observable)
- [core-js dispose](https://github.com/zloirock/core-js/tree/master#symbol-asyncdispose-dispose--for-using-statement)
- [@esfx/disposable](https://esfx.js.org/esfx/api/disposable/disposable-interface.html#_esfx_disposable_Disposable_interface)


## License

ISC © Dmitry Iv.

<p align="center">ॐ</p>
