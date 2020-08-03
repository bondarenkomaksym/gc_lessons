// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: function
//output: key prop

"use strict";

const user = {
  name: "Tom",
  age: 17,
};

function getKeys(user) {
  const keys = Object.keys(user);
  console.log(keys);
  keys.forEach(function (key) {
    console.log(key + ": " + user[key]);
  });
  return keys;
}

getKeys(user);
