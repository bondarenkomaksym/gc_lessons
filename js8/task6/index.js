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
let newKey = "age";
let newValue = 17;

console.log(obj);

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}
console.log(addPropertyV1(obj, newKey, newValue));

function addPropertyV2(obj, key, value) {
  Object.assign(obj);
  return obj;
}
console.log(addPropertyV2(obj, newKey, newValue));
