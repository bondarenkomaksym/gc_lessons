// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: number, number
//output: massive

"use strict";

const element = 5.2298797222;

function superRound(num, n) {
  let roundNumber = Math.pow(10, n);
  return [
    Math.floor(num * roundNumber) / roundNumber,
    Math.round(num * roundNumber) / roundNumber,
    Math.ceil(num * roundNumber) / roundNumber,
    Math.trunc(num * roundNumber) / roundNumber,
    +num.toFixed(n),
  ];
}

console.log(superRound(element, 2));
