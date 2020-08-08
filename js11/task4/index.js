// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: string, number
//output: massive

"use strict";

let counter = 0;
let str = "This is a string";
let char = "is";

function countOccurrences(str, char) {
  if (char.length === 0) return null;
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == char) counter++;
  }
  return counter;
}
console.log(countOccurrences(str, char));

//сквозной поиск текста в цельной строке
// let str = "Final testing & refactoring";
// let char = "in";
// function countOccurrences(str, char) {
//   let counter = 0;
//   let position = -1;
//   while ((position = str.indexOf(char, position + 1)) !== -1) {
//     counter++;
//   }
//   return counter;
// }
// console.log(countOccurrences(str, char));
