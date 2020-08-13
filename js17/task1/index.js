// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

// const user = {
//   name: "Tom",
//   age: 17,
//   sayHi: function () {
//     console.log(`Hi, I am ${this.name}.`);
//   },
// };

// user.walk = function walk() {
//   console.log(`I'm walking and I am ${this.age}`);
// };

// user.sayHi();
// user.walk();

const user = {
  firstName: "John",
  lastName: "Doe",
  //если это метод объекта, то "function" можно убрать
  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

user.getFullName();
export default user;
