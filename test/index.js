/* global describe, it */
var expect = require('chai').expect;
var $$dispose = require('../').dispose;

describe('integration test', function () {
	if (typeof Symbol === 'function') {
		describe('when global Symbol exists', function () {
			describe('returned value', function () {
				it('should be of type "symbol"', function () {
					expect($$dispose).to.be.a('symbol');
				});
			});

			describe('Symbol.dispose', function () {
				if (typeof Symbol.for === 'function') {
					it('should NOT be the same as Symbol.for("dispose")', function () {
						expect(Symbol.dispose).to.not.equal(Symbol.for('dispose'));
					});
				}

				it('should be of type "symbol"', function () {
					expect(Symbol.dispose).to.be.a('symbol');
				});
			});
		});
	} else {
		describe('when no global Symbol is present', function () {
			it('should be "@@dispose"', function () {
				expect($$dispose).to.be.a('string');
				expect($$dispose).to.equal('@@dispose');
			});
		});
	}
});
