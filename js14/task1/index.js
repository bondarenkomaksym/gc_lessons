// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: strings
//output:

"use strict";
let message = "Just learn it!";

export function sendMessage(name) {
  const sender = "Gromcode";
  console.log(`${name}, ${message} Your ${sender}`);
}

export function setMessage(text) {
  message = text;
}

sendMessage("Ann");

setMessage("Good job!");

sendMessage("Ann");
