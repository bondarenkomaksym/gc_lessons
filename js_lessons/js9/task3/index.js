// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: Object
//output: massive

"use strict";

const rooms = {
  room1: [
    { name: "room1 name1" },
    { name: "room1 name2" },
    { name: "room1 name3" },
    { name: "room1 name4" },
  ],
  room2: [{ name: "room2 name1" }],
  room3: [
    { name: "room3 name1" },
    { name: "room3 name2" },
    { name: "room3 name3" },
  ],
};

function getPeople(obj) {
  if (Object.keys(obj).length === 0) return [];
  const people = Object.values(obj);
  console.log(people);
  const second = people
    .reduce((acc, val) => acc.concat(val));
  console.log(second);
  //преобразовываем каждый элемент в строку со значением из свойства name 
  const third = second
    .map((el) => el.name);
  return third;
}

console.log(getPeople(rooms));
