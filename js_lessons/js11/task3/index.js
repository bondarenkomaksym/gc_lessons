// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: string, number
//output: massive

"use strict";

const str = "lorem ipsum dolor sit amet";

const splitString = (str, length) => {
  if (typeof str !== "string") return null;

  if (length === undefined) {
    const pattern = new RegExp(".{1," + 10 + "}", "ig");
    let res = str.match(pattern).map((item) => item.padEnd(10, "."));
    return res;
  } else {
    const pattern = new RegExp(".{1," + length + "}", "ig");
    let res = str.match(pattern).map((item) => item.padEnd(length, "."));
    return res;
  }
};
console.log(splitString(str, 4));

//ищем в строке паттерн указанной длины состоящий из любых символов
// const pattern = new RegExp(".{1," + length + "}", "ig");
//проверяем количество вхождений паттерна в строку
// let res = str.match(pattern);
//дополняем методом padEnd элементы длина которых меньше переменной
// let resMap = res.map((item) => item.padEnd(length, "."));
// console.log(resMap);

// const text = "This is a new string!";
// console.log(
//   text.split(/(?<=^(?:.{4})+)(?!$)/).map((item) => item.padEnd(4, "."))
// );
