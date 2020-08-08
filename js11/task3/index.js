// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: string, number
//output: massive

"use strict";

// const text = "This is a new string!";
// console.log(text.split(/(?<=^(?:.{4})+)(?!$)/));

const str = "lorem ipsum dolor sit amet";
const length = 4; // длина одной части
const pattern = new RegExp(".{1," + length + "}", "ig");
//
let res = str.match(pattern).map((item) => item.padEnd(length, "."));
console.log(res);

// var str = "This is a new string!";

// function* chunk(str, len) {
//   var padded = str.padEnd(Math.ceil(str.length / len) * len, ".");

//   for (var i = 0; i < padded.length / len; i++) {
//     yield padded.substring(i * len, (i + 1) * len);
//   }
// }

// console.log([...chunk(str, 4)]);

// const splitString = (text, length) => {
//   if (typeof text !== "string") return null;

//   const strArr = [];
//   let startPosition = 0;

//   if (length === undefined) {
//     while (true) {
//       let chunk = text.substr(startPosition, 10);
//       if (chunk.length === 0) {
//         break;
//       }

//       strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
//       startPosition += 10;
//     }
//   } else {
//     while (true) {
//       let chunk = text.substr(startPosition, length);
//       if (chunk.length === 0) {
//         break;
//       }

//       strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
//       startPosition += length;
//     }
//   }

//   return strArr.join(", ");
// };

// console.log(splitString(text, 4));
