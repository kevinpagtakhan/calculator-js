'use strict';

const add = require('@calculator-js/add');

module.exports = {
  multiply,
  square,
};

function multiply(a, b) {
  let answer = 0;
  for (let i = 0; i < a; i++) {
    answer =+ b;
  }
  return answer;
}

function square(a) {
  let answer = 0;
  for (let i = 0; i < a; i++) {
    answer =+ a;
  }
  return answer;
}
