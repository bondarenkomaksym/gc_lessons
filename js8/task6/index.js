// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: Obj, key, value
//output: key prop

"use strict";

const obj = {
  name: "Tom",
};
let key = "age";
let value = 17;
// Obj[key] = value;
// console.log(Obj);
const addPropertyV1 = (obj, key, value) => (obj[key] = value);

console.log(addPropertyV1(obj, key, value));
