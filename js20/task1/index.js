// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }
  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }
  setAge(age) {
    this.age = age;

    if (age < 0) {
      return false;
    }

    if (age >= 25) {
      console.log(`New photo request was sent for ${this.name}`);
    }
    return age;
  }
  static createEmpty() {
    return new this("", null);
  }
}

const user = new User("John", 26);
console.log(user);
// console.log(User.createEmpty());
export { User };
