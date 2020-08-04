// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: Objects, massive strings
//output: Object

"use strict";

const obj = { a: "a", "17.1": 17.1, "John Doe": "John Doe" };
let arr = ["a", "John Doe"];

const pickProps = (obj, arr) => {
  let newObj = {};
  arr.forEach((el) => {
    if (obj[el]) {
      newObj[el] = obj[el];
    }
  });
  return newObj;
};
console.log(pickProps(obj, arr));
