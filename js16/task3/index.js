// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: number
//output:

"use strict";

export function createArrayOfFunctions(n) {
  let arr = [];
  if (n === undefined) return arr;
  if (typeof n !== "number") return null;
  for (let i = 0; i < n; i++) {
    arr[i] = function () {
      return i;
    };
  }
  return arr;
}

console.log(createArrayOfFunctions(3));
