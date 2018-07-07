# solo-flatten

Takes a nested array and returns a single flattened array

```js
import flatten from 'solo-flatten';

const nest = [1, [2, 3, 4], [5, 6, 7], 8, 9, 10];
flatten(nest);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```