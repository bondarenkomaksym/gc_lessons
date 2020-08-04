// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: Objects
//output: Object

"use strict";

const obj1 = {
  name: "Tom",
  age: 17,
};
const obj2 = {
  name: "Bob",
  student: false,
};

const mergeObjectsV1 = (obj1, obj2) => Object.assign({}, obj1, obj2);
console.log(mergeObjectsV1(obj1, obj2));

const mergeObjectsV2 = (obj1, obj2) => Object.assign({}, obj2, obj1);
console.log(mergeObjectsV2(obj1, obj2));

const mergeObjectsV3 = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};
console.log(mergeObjectsV3(obj1, obj2));

const mergeObjectsV4 = (obj1, obj2) => {
  return { ...obj2, ...obj1 };
};
console.log(mergeObjectsV4(obj1, obj2));
