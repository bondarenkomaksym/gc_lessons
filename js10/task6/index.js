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

  for (let i = 0; i < length; i++) {
    result.push(randomInteger(min, max));
  }
  return result;
};

function randomInteger(min, max) {
  let random = min - 0.5 + Math.random() * (max - min + 1);
  random = Math.floor(random);
  if (!Number.isInteger(min, max)) {
    return null;
  }
  return random;
}

console.log(getRandomNumbers(100, 2, 8));
