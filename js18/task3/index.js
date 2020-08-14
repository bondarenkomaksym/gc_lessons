// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

function sumOfSquares() {
  return [].reduce.apply(arguments, [
    (acc, curr) => {
      return acc + curr * curr;
    },
    0,
  ]);
}
console.log(sumOfSquares(2, 4, 3));
export { sumOfSquares };
