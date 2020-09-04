// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";
// const b1 = document.querySelector(".b-1");

// b1.onclick = test;

// function test() {
//   this.style.background = "red";
// }

// let a = 7;

// setTimeout(() => {
//   a = 99;
//   console.log(a);
// }, 2000);

// console.log(a);

// let b = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve((a = 99));
//     // console.log(a);
//   }, 2000);
// });

// b.then(() => console.log(a));

const nonconsecutive = (arr) => {
  let result = arr.find((number, index) => number !== index + arr[0]);
  return Number.isInteger(result) ? result : null;
};
console.log(nonconsecutive([1, 2, 3, 4, 6, 7, 8]));

// function firstNonConsecutive(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] - arr[i] >= 2) {
//       return arr[i + 1];
//     }
//   }
//   return null;
// }
// console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 9]));
