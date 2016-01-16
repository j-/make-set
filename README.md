# make-set

Ensures that a given input can be used as a set.

## Example

```js
import makeSet from 'make-set';

function hasFoobar (input) {
    return makeSet(input).has('foobar');
}

const result = hasFoobar(['hello', 'foobar', 'world']);
console.log(result); // => true
```

## Installing

```sh
$ npm install --save j-/make-set
```

## Building

Will output to [dist/make-set.js](dist/make-set.js).

```sh
$ npm install && npm run build
```

## Testing

```sh
$ npm install && npm test
```

## License

[MIT license](LICENSE).
