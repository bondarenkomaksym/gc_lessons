// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

const mult = (a) => (b) => a * b;
const twice = (a) => mult(a)(2);
const triple = (a) => mult(a)(3);

// const result = mult(6)(4);
// console.log(result);

export { mult, twice, triple };
