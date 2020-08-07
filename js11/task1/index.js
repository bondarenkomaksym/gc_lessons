// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: string, number
//output: massive

"use strict";

const text = "Hello World";

const splitText = (text, length) => {
  let strArr = [];
  let startPosition = 0;
  while (true) {
    let chunk = text.substr(startPosition, length);

    if (chunk.length === 0) {
      break;
    }

    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += length;
  }

  return strArr.join("\n");
};

//1. "absbd csmndc", 4 => ["absb", "d cs"] => ["Absb", "D cs"] => "Absb/nD cs"
console.log(splitText(text, 4));
