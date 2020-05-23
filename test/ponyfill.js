/* global describe, it */
var expect = require('chai').expect;
var ponyfill = require('../ponyfill').default;

describe('ponyfill unit tests', function () {
  describe('when Symbol does NOT exist as a function', function () {
    it('should return "@@dispose"', function () {
      expect(ponyfill({}).dispose).to.equal('@@dispose');
    });
  });

  describe('when Symbol exists as a function', function () {
    describe('and Symbol.dispose exists', function () {
      it('should return Symbol.dispose', function () {
        var Symbol = function () {};
        Symbol.dispose = 'I came from Symbol.dispose';
        var root = { Symbol: Symbol };

        var result = ponyfill(root).dispose;

        expect(result).to.equal(Symbol.dispose);
      });
    });

    describe('and Symbol.dispose does NOT exist', function () {
      it('should use Symbol(), polyfill Symbol.dispose and return it', function () {
        var Symbol = function (description) {
          return 'Symbol(' + description + ')';
        };
        var root = {
          Symbol: Symbol
        };

        var result = ponyfill(root).dispose;

        expect(Symbol.dispose).to.equal('Symbol(dispose)');
        expect(result).to.equal('Symbol(dispose)');
      });
    });
  });
});
