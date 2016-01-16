/**
 * Ensures the result is of type Set.
 * @param {Iterable|Array|Set} set Iterable, Array or Set
 * @return {Set} The input if already a Set. A new Set otherwise.
 */
export default function makeSet (set) {
	// No need to create new object if already a set
	// See http://jsperf.com/check-type-vs-create-new-instance/2
	return (set instanceof Set) ? set : new Set(set);
}
