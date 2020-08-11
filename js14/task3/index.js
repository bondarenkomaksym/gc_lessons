// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: number
//output: number

"use strict";

let memory = 0;

export function add(num) {
  return (memory += num);
}

export function decrease(num) {
  return (memory -= num);
}

export function reset() {
  return (memory = 0);
}
export function getMemo() {
  return memory;
}
// console.log(add(5));
// console.log(decrease(9));
// console.log(reset());
// console.log(getMemo());
