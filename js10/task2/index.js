// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: massive
//output: massive

"use strict";

const elementsList = [2, 5.74, "  6.3", NaN, null, undefined, Infinity];

const getParsedIntegers = (arr) => arr.map((el) => Number.parseInt(el));
console.log(getParsedIntegers(elementsList));

const getParsedIntegersV2 = (arr) => arr.map((el) => parseInt(el));
console.log(getParsedIntegersV2(elementsList));

const getParsedFloats = (arr) => arr.map((el) => Number.parseFloat(el));
console.log(getParsedFloats(elementsList));

const getParsedFloatsV2 = (arr) => arr.map((el) => parseFloat(el));
console.log(getParsedFloatsV2(elementsList));
