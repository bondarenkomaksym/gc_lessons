// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: string, number
//output: massive

"use strict";

const arr = ["  1.9 ", "16.4", 17, " 1 dollar "];

function cleanTransactionsList(arr) {
  let newArr = [...arr];
  return newArr.filter((e) => !isNaN(e)).map((e) => "$" + (+e).toFixed(2));
}
console.log(cleanTransactionsList(arr));

// фильтруем с помощью isNaN() - преобразовывая аргумент в число. Если получается, возвращает false.
// через map() - к каждому элементу добавляем необходимый символ и  все строки преобразовываем в числа  через унарный + для обработки методом toFixed(2), который при необходимости добавит в конце .00

// const text = "This is a new string!";
// console.log(
//   text.split(/(?<=^(?:.{4})+)(?!$)/).map((item) => item.padEnd(4, "."))
// );
