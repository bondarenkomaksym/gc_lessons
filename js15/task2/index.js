// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

export function createCalculator() {
  let memory = 0;

  function add(num) {
    memory += num;
  }

  function decrease(num) {
    memory -= num;
  }

  function reset() {
    memory = 0;
  }
  function getMemo() {
    memory;
  }

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
}

const add = createCalculator();
const decrease = createCalculator();
const reset = createCalculator();
const getMemo = createCalculator();
