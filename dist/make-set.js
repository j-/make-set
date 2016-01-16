(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.makeSet = factory());
}(this, function () { 'use strict';

	/**
	 * Ensures the result is of type Set.
	 * @param {Iterable|Array|Set} set Iterable, Array or Set
	 * @return {Set} The input if already a Set. A new Set otherwise.
	 */
	function makeSet (set) {
		// No need to create new object if already a set
		// See http://jsperf.com/check-type-vs-create-new-instance/2
		return (set instanceof Set) ? set : new Set(set);
	}

	return makeSet;

}));