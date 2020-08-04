// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: Objects
//output: Object

"use strict";

const obj = { "John Doe": 19, Tom: 17, Bob: 18 };

const getAdults = (obj) => {
  let newObj = {};
  for (let value in obj) {
    if (obj[value] > 17) {
      newObj[value] = obj[value];
    }
  }
  return newObj;
};
console.log(getAdults(obj));
