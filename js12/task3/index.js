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

// Предполагается, что в массиве никогда не будет пустых строк или null (или они преобразуются в "$0.00")
// filter() берет функцию, вызывает её для каждого элемента массива. Если вызванная функция вернула что-то, что в логическом контексте будет true, оставляет элемент, иначе, удаляет его из будущего массива.
// isNaN() берет аргумент и пробует преобразовать его в число. Если получается, возвращает false. !false будет true
// map() - Так же вызывает переданную функцию для каждого элемента массива, и возвращает новый массив, где каждый элемент подменен на результат вызова этой функции. А toFixed(2) сам при необходимости добавит хвост .00

// const text = "This is a new string!";
// console.log(
//   text.split(/(?<=^(?:.{4})+)(?!$)/).map((item) => item.padEnd(4, "."))
// );
