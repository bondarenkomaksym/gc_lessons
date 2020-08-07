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
  for (let key of keys1) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
};
console.log(compareObjects(obj1, obj2));
console.log(compareObjects(obj2, obj3));
console.log(compareObjects(obj1, obj4));
