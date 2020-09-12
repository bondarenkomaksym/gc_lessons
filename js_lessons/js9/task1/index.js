// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: Object
//output: massive

"use strict";

const obj = { "John Doe": 19, Tom: 17, Bob: 18 };

const getAdults = (usersObj) => {
  //Object.entries - вывод данных с объекта в отдельные массивы - сначала ключ потом его значение.
  const usersArray = Object.entries(usersObj);
  //дальше нужно отфильтровать в каждом массиве значение возраста(у него индекс 1)
  const filteredUsersArray = usersArray.filter((user) => user[1] >= 18);
  //из отфильтрованных массивов вывести соответствующие ключи
  const usersNames = filteredUsersArray.map((user) => user[0]);

  return usersNames;
};
console.log(getAdults(obj));

//Object.entries - вывод данных с объекта в отдельные массивы - сначала ключ потом его значение.

//более короткий вариант

// const obj = { "John Doe": 19, Tom: 17, Bob: 18 };

// const getAdults = (usersObj) => Object.entries(usersObj)
//   .filter((user) => user[1] >= 18)
//   .map((user) => user[0]);

// console.log(getAdults(obj));
