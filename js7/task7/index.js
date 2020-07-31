"use strict";

const numbers = [2, 5, 6, 3, 18, 4];

function increaseEvenEl(numbers, delta) {
  if (!Array.isArray(numbers)) {
    return null;
  }
  return numbers.map((x) => (x % 2 === 0 ? x + delta : x));
}
console.log(increaseEvenEl(numbers, 20));
