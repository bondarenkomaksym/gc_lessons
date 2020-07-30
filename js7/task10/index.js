"use strict";

// const nums = [2, 5, 6, 3, 0, 3, -1];
// let sum = nums.reduce(function (a, b) {
//   if (!Array.isArray(nums)) {
//     return null;
//   }
//   return a + b;
// }, 0);
// console.log(sum);

// const nums = [2, 5, 6, 3, 0, 3, -1];
// let sum = nums.reduce((a, b) => a + b, 0);
// console.log(sum);

const nums = [2, 5, 6, 3, 0, 3, -1];
function sum(nums) {
  if (!Array.isArray(nums)) {
    return null;
  }
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(nums));
