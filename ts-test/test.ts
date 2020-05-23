import * as $$symbolDispose from '../';

console.log('RUNNING TYPESCRIPT TEST...');

if (typeof $$symbolDispose.dispose !== 'symbol' && <any>$$symbolDispose.dispose !== '@@Dispose') {
  console.log('FAIL');
  throw new Error('Sorry, $symbolDispose is ' + JSON.stringify($$symbolDispose.dispose));
}

console.log('PASS');
