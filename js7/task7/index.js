"use strict";

// const numbers = [2, 5, 6, 3, 18, 4];

// function increaseEvenEl(numbers, delta) {
//   if (!Array.isArray(numbers)) {
//     return null;
//   }
//   return numbers.map((x) => (x % 2 !== 0 ? x + delta : x));
// }
// console.log(increaseEvenEl(numbers, 20));

const numbers = [2, 5, 6, 3, 18, 4];

const increaseEvenEl = (numbers, delta) =>
  numbers.map((x) => {
    if (x % 2 !== 0) {
      return x + delta;
    } else {
      return x;
    }
  });

console.log(increaseEvenEl(numbers, 20));
