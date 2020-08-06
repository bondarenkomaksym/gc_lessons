// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: number
//output: massive

"use strict";

const element = -5.743;

const multiRound = (num) => [
  Math.floor(num),
  Math.round(num),
  Math.ceil(num),
  Math.trunc(num),
  +num.toFixed(1),
];
console.log(multiRound(element));
