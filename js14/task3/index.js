// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: strings
//output:

"use strict";

export default function calc(expression) {
  const [a, operator, b] = expression.split(" ");
  let result = 0;
  function normalCalc() {
    console.log(`${expression} = ${result}`);
  }
  function add() {
    result = +a + +b;
    return `${expression} = ${result}`;
  }

  return {
    normalCalc,
    add,
  };
}
console.log(calc("6 * 2"));
// const messenger = calc();

// messenger.sendMessage("Bob");
// messenger.setMessage("Good job");
// messenger.sendMessage("Bob");

// const messenger1 = createMessenger();

// messenger1.setMessage("Just learn it");
// messenger1.setSender("Gromcode");
// messenger1.sendMessage("Bob");
