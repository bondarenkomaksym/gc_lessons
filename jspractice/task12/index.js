// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: objects
//output: boolean

"use strict";

const obj1 = {
  name: "Tom",
  age: 17,
};
const obj2 = {
  name: "Bob",
  age: 17,
};
const obj3 = {
  name: "Bob",
  age: 17,
  student: false,
};
const obj4 = {
  name: "Tom",
  age: 17,
};

const compareObjects = (a, b) => {
  //назначить переменные для объектов
  const keys1 = Object.keys(a);
  const keys2 = Object.keys(b);
  // сравнить длину ключей
  if (keys1.length !== keys2.length) {
    return false;
  }
  // сравнить на соответствие ключи
  // for (let key of keys1) {
  //   if (a[key] !== b[key]) {
  //     return false;
  //   }
  // }
  keys1.forEach((key, index) => {
    console.log("key1" + key);
    console.log("value1" + obj1[key]);

    console.log("key1" + keys2[index]);
    console.log("value1" + obj2[keys2[index]]);

    if (obj1[key] !== obj2[keys2[index]]) {
      return false;
    }
  });

  // return true;
};
console.log(compareObjects(obj1, obj2));
// console.log(compareObjects(obj2, obj3));
// console.log(compareObjects(obj1, obj4));

// console.log(obj1 == obj4);
// console.log(obj1 === obj4);
// //сравнение функций
// console.log((() => {}) === (() => {}));
