// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

function User(name, age) {
  this.name = name;
  this.age = age;
}
//методы нужно хранить в прототипе для экономии памяти
User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function () {
  if (this.age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }
};
User.prototype.setAge = function (age) {
  this.age = age;

  if (age < 0) {
    return false;
  }

  if (age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }
  return age;
};
const user = new User("John", 26);

// console.log(user);
// user.sayHi();
// user.requestNewPhoto();
// user.setAge(32);
// console.log(user);
export { User };
