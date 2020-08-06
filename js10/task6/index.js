// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:  number, number, number
//output: massive random numbers

"use strict";

const getRandomNumbers = (length, min, max) => {
  let result = [];
  // if (!Number.isInteger(min, max)) {
  //   return null;
  // }
  for (let i = 0; i < length; i++) {
    result.push(randomInteger(min, max));
  }
  return result;
};

function randomInteger(min, max) {
  min = Math.floor(min);
  max = Math.floor(max);
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  // return Math.floor(Math.random() * max) + min;
  // return Math.round(Math.random() * (max - min)) + min;
  // return Math.round(min + Math.random(max - min));
}
console.log(getRandomNumbers(20, -40.5, -30.8));
