// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: Object
//output: massive

"use strict";

function multiply() {
  let result = 1;

  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}
console.log(multiply(3, 6, 2));
