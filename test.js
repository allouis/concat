var test = require('tape')
var concat = require('./')

test('it exports a function', (assert) => {
  var actual = typeof concat
  var expected = 'function'

  assert.equals(actual, expected,
    'typeof concat is "function"')

  assert.end()
})

test('it returns an array', (assert) => {
  var actual = concat().constructor
  var expected = Array

  assert.equals(actual, expected,
    'concat() returns an Array')

  assert.end()
})

test('it returns a new array', (assert) => {
  var arr = []

  var actual = concat(arr) === arr
  var expected = false

  assert.equals(actual, expected,
    'return value of concat() is not same as argument passed in')

  assert.end()
})

test('it returns an array of all the arguments concatenated together', (assert) => {
  var actual = concat([1, 2, 3], 4, 5, [6, 7, 8], 9)
  var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  assert.deepEquals(actual, expected,
    'return value of concat is the arguments concatenated together')

  assert.end()
})
