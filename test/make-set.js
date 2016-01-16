const makeSet = require('../dist/make-set');
const assert = require('assert');

describe('makeSet', () => {
	it('is a function', () => {
		assert.equal(typeof makeSet, 'function');
	});

	it('returns the input if already a Set', () => {
		const input = new Set([1, 2, 3]);
		const output = makeSet(input);
		assert.equal(input, output);
	});

	it('can be called without an argument', () => {
		const set = makeSet();
		assert.ok(set instanceof Set);
	});

	it('can be called with an array', () => {
		const set = makeSet([1, 2, 3]);
		assert.ok(set instanceof Set);
	});

	it('contains all array items', () => {
		const set = makeSet(['a', 'b', 'c']);
		const iter = set.values();
		assert.equal(iter.next().value, 'a');
		assert.equal(iter.next().value, 'b');
		assert.equal(iter.next().value, 'c');
		assert.equal(iter.next().value, undefined);
	});
});
