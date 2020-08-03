// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: number, number, number
//output: string

"use strict";

const user = {
  name: "Tom",
  age: 17,
};

function getKeys() {
  return Object.keys(user);
}
console.log(getKeys(user));
