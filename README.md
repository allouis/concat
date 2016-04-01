# concat

Simple wrapper over `Array.prototype.concat`

### usage

```javascript
var concat = require('concat')

concat(1, 2, 3) // [1, 2, 3]
concat([1], 2, 3) // [1, 2, 3]
concat([1], [2], [3]) // [1, 2, 3]
```

### api

#### `concat([args...])`

Returns a new array consisting of all the arguments concatenated together
