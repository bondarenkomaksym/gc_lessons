// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

export default function makeCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// console.log(counter2());
// console.log(counter2());
// console.log(counter2());
