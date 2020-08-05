// How to work on tech tasks. Step by step guide
// 1. gather all arguments +
// 2. multiply
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: numbers
//output: number

"use strict";

// function multiply() {
//   let result = 1;

//   for (let i = 0; i < arguments.length; i++) {
//     result *= arguments[i];
//   }
//   return result;
// }
// console.log(multiply(3, 6, 2));

// function multiply(...args) {
//   // console.log(args);
//   let res = 1;
//   args.forEach((e) => {
//     res *= e;
//   });
//   return res;
// }
// console.log(multiply(3, 6, 2));

// function multiply(...args) {
//   // console.log(args);
//   console.log("reduce start");
//   const res = args.reduce((res, currentvalue) => {
//     console.log("reduce callback is called");
//     console.log(res);
//     console.log(currentvalue);
//     return res * currentvalue;
//   });
//   return res;
// }
// console.log(multiply(3, 6, 2, 4));

function multiply(...args) {
  return args.reduce((res, currentvalue) => res * currentvalue);
}
console.log(multiply(3, 6, 2, 4));
