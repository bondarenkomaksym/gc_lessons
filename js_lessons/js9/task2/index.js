// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: Object
//output: Object

"use strict";

const obj = { "John Doe": 19, Tom: 17, Bob: 18 };

const copyObj = (usersObj) => Object.assign({}, usersObj);
console.log(copyObj(obj));
