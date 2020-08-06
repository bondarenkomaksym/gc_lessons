// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:  massive
//output: number

"use strict";

const elements = [-777, 3, -1, 45, -20];

const getMaxAbsoluteNumber = (arr) => {
  const absoluteValue = arr.map((number) => Math.abs(number));
  return Math.max(...absoluteValue);
};
console.log(getMaxAbsoluteNumber(elements));
