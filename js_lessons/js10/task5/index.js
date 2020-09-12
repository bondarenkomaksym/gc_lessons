// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:  massive
//output: number

"use strict";

const elements = [77, 3, 1, 45, 20, Math.PI];

const getTotalPrice = (arr) => {
  let sum = arr.reduce((a, b) => a + b);
  return "$" + Math.floor(sum * 100) / 100;
};

console.log(getTotalPrice(elements));
