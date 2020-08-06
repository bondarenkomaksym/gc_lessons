// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: number
//output: massive

"use strict";

const element = 5.743;

const multiRound = (num) => [
  Math.floor(num * 100) / 100,
  Math.round(num * 100) / 100,
  Math.ceil(num * 100) / 100,
  Math.trunc(num * 100) / 100,
  +num.toFixed(2),
];
console.log(multiRound(element));
