'use strict'

module.exports = concat

function concat () {
  return [].concat.apply([], arguments)
}
