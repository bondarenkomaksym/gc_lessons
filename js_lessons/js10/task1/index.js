// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: Object
//output: massive

"use strict";

const elementsList = [2, 5.74, "  6.3", NaN, null, undefined, Infinity];

// function getFiniteNumbers(arr) {
//   let result = arr.map((el) => Number.isFinite(el));

//   return result;
// }

// console.log(getFiniteNumbers(elementsList));

const getFiniteNumbers = (arr) => arr.filter((el) => Number.isFinite(el));
console.log(getFiniteNumbers(elementsList));

const getFiniteNumbersV2 = (arr) => arr.filter((el) => isFinite(el));
console.log(getFiniteNumbersV2(elementsList));

const getNaN = (arr) => arr.filter((el) => Number.isNaN(el));
console.log(getNaN(elementsList));

const getNaNV2 = (arr) => arr.filter((el) => isNaN(el));
console.log(getNaNV2(elementsList));

const getIntegers = (arr) => arr.filter((el) => Number.isInteger(el));
console.log(getIntegers(elementsList));
