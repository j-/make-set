const makeSet = require('../dist/make-set');
const assert = require('assert');

describe('makeSet', function () {
	it('is a function', function () {
		assert.equal(typeof makeSet, 'function');
	});

	it('returns the input if already a Set', function () {
		const input = new Set([1, 2, 3]);
		const output = makeSet(input);
		assert.equal(input, output);
	});

	it('can be called without an argument', function () {
		const set = makeSet();
		assert.ok(set instanceof Set);
	});

	it('can be called with an array', function () {
		const set = makeSet([1, 2, 3]);
		assert.ok(set instanceof Set);
	});

	it('contains all array items', function () {
		const set = makeSet(['a', 'b', 'c']);
		const iter = set.values();
		assert.equal(iter.next().value, 'a');
		assert.equal(iter.next().value, 'b');
		assert.equal(iter.next().value, 'c');
		assert.equal(iter.next().value, undefined);
	});
});
