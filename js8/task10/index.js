// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: Obj, string
//output: Object

"use strict";

const user = { name: "Bob" };
let numbers = "321321";

const addPropertyV1 = (user, numbers) => {
  user.id = numbers;
  return user;
};
console.log(addPropertyV1(user, numbers));

const addPropertyV2 = (user, numbers) => {
  Object.assign((user.id = numbers));
  return user;
};
console.log(addPropertyV2(user, numbers));

const addPropertyV3 = (user, numbers) => {
  let clone = Object.assign({}, user);
  Object.assign(clone, (user.id = numbers));
  return user;
};
console.log(addPropertyV3(user, numbers));

const addPropertyV4 = (user, numbers) => {
  let newObj = { ...user };
  Object.assign(newObj, (user.id = numbers));
  return user;
};
console.log(addPropertyV4(user, numbers));
