// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: string, number
//output: massive

"use strict";

const arr = ["  1.9 ", "16.4", 17, " 1 dollar "];

function cleanTransactionsList(arr) {
  let newArr = [...arr];
  return newArr.filter((e) => !isNaN(e)).map((e) => "$" + (+e).toFixed(2));
}
console.log(cleanTransactionsList(arr));
