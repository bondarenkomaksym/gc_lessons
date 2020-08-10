// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: string
//output: string

"use strict";
export const calc = (expression) => {
  if (typeof expression !== "string") {
    return null;
  }

  let [a, operation, b] = expression.split(" ");
  let result;
  a = +a;
  b = +b;

  switch (operation) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
  }

  return `${expression} = ${result}`;
};
console.log(calc("6 * 2"));
