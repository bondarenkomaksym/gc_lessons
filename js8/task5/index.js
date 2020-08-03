// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: function
//output: key prop

"use strict";

const obj = {
  name: "Tom",
  age: 17,
};

function getKeys(obj) {
  Object.keys(obj).forEach((keys) => console.log(keys));
}
getKeys(obj);
