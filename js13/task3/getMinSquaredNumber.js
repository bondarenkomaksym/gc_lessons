// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";
let arr = [-777, 3, -2, 6, 45, -20];
export const getMinSquaredNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  let square = arr.map((num) => num * num);
  return Math.min(...square);
};

console.log(getMinSquaredNumber(arr));
//  => 4
