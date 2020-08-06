// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: massives of strings
//output: Object

"use strict";

const keysList = ["name", "address", "age"];
const valuesList = ["Bob", "Ukraine", 34];

const buildObject = (keysList, valuesList) =>
  keysList.reduce((acc, n, i) => ((acc[n] = valuesList[i]), acc), {});
//пустой объект как исходное значение, в послдедствии добавляем каждое значение в аккумулятор
console.log(buildObject(keysList, valuesList));

// const buildObject = (keysList, valuesList) =>
//   keysList.reduce((acc, n) => {
//     console.log(n);
//   }, {});
// buildObject(keysList);
