'use strict';

module.exports = add;

function add(a) {
  return a.reduce((acc, curr) => acc + curr);
}
