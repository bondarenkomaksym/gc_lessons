// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

// const add3 = (value) => value + 3;
// const mult = (value) => value * 2;

const compose = (...funcs) => (value) => {
  return funcs.reduce((acc, funcs) => funcs(acc), value);
};

export { compose };

// const doEverything = compose(add3, mult);
// console.log(doEverything(3));
