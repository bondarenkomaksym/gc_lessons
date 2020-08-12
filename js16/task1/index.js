// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";
var arr = [];

for (let i = 0; i < 10; i++) {
  arr[i] = function () {
    return i;
  };
}

// export { arr };
console.log(arr);
