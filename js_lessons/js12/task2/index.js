// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: string
//output: reverse string

"use strict";

const str = "lorem ipsum dolor sit amet";

const reverseString = (str) => {
  if (typeof str !== "string") return null;
  return str.split("").reverse().join("");
};
console.log(reverseString(str));

// console.log("\u202E" + str); - символ Юникод позволяет развернуть строку
