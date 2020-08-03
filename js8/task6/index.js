// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: Obj, key, value
//output: key prop

// "use strict";

// const obj = {
//   name: "Tom",
// };
// let newKey = "age";
// let newValue = 17;

const addPropertyV1 = (obj, value) => {
  obj[key] = value;
  return obj;
};
// console.log(addPropertyV1(obj, newValue));

const addPropertyV2 = (obj, value) => {
  Object.assign(obj, { [key]: value });
  return obj;
};
// console.log(addPropertyV2(obj, newValue));

const addPropertyV3 = (obj, value) => {
  let clone = Object.assign({}, obj);
  Object.assign(clone, { [key]: value });
  return clone;
};
// console.log(addPropertyV3(obj, newValue));

const addPropertyV4 = (obj, value) => {
  let clone = { ...obj };
  Object.assign(clone, { [key]: value });
  return clone;
};
// console.log(addPropertyV4(obj, newValue));
