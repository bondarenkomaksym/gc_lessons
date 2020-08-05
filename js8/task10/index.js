// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: Obj, string
//output: Object

"use strict";

const userData = { name: "Bob" };
let userId = "321321";

const addPropertyV1 = (userData, userId) => {
  userData.id = userId;
  return userData;
};
console.log(addPropertyV1(userData, userId));

const addPropertyV2 = (userData, userId) => {
  const newObj = { id: userId };
  return Object.assign(userData, newObj);
};
console.log(addPropertyV2(userData, userId));

const addPropertyV3 = (userData, userId) => {
  const newObj = { id: userId };
  return Object.assign({}, userData, newObj);
};
console.log(addPropertyV3(userData, userId));

const addPropertyV4 = (userData, userId) => {
  let newObj = { id: userId };
  return { ...userData, ...newObj };
};
console.log(addPropertyV4(userData, userId));
