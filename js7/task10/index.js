"use strict";

const nums = [2, 5, 6, 3, 0, 3, -1];

let sum = nums.reduce(function (a, b) {
  return a + b;
}, 0);

console.log(sum);

// const nums = [2, 5, 6, 3, 0, 3, -1];

// let sum = nums.reduce((a, b) => a + b, 0);

// console.log(sum);
