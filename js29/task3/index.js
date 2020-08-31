// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

export const printing = () => {
  console.log(1);
  setTimeout(function () {
    console.log(5);
  }, 1000);
  console.log(2);
  setTimeout(function () {
    console.log(4);
  }, 0);
  console.log(3);
};
printing();
