// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

const calc = (initialValue) => {
  let result = initialValue;

  const calculator = {
    add(value) {
      result += value;
      //this это сам объект calculator
      return this;
    },
    mult(value) {
      result *= value;
      return this;
    },
    substract(value) {
      result -= value;
      return this;
    },
    div(value) {
      result /= value;
      return this;
    },
    result() {
      return result;
    },
  };
  return calculator;
};

const result = calc(5).add(20).div(43).result();
// console.log(result);
export { calc };
