// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: string = expression
//output: string = result

"use strict";

const calc = (expression) => {
  const [a, operator, b] = expression.split(" ");
  let result;
  switch (operator) {
    case "+":
      result = +a + +b;
      break;
    case "-":
      result = a - b;
      break;
    case "/":
      result = a / b;
      break;
    case "*":
      result = a * b;
      break;
  }
  return `${expression} = ${result}`;
};

console.log(calc("6 * 2"));

// const calc = (expression) => {
//   const a = expression.split(" ");
//   let result;
//   switch (a[1]) {
//     case "+":
//       result = +a[0] + +a[2];
//       break;
//     case "-":
//       result = a[0] - a[2];
//       break;
//   }
//   return expression + " = " + result;
// };

// console.log(calc("1 + 2"));
