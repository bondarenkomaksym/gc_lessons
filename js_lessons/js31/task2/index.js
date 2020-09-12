// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

export const asyncCalculator = (numbr) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Initial value: ${numbr}`);
      resolve(numbr);
    }, 500);
  })
    .then(
      (result) =>
        new Promise((resolve) => {
          setTimeout(() => {
            console.log(`Squared value: ${result * result}`);
            return resolve(result * result);
          }, 500);
        })
    )
    .then(
      (result) =>
        new Promise((resolve) => {
          console.log(`Doubled value: ${result * 2}`);
          return resolve(result * 2);
        })
    );

asyncCalculator(5);
