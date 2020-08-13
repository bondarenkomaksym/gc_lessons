// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

const user = {
  firstName: "John",
  lastName: "Doe",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName() {
    let split = this.getFullName().split(" ");
    return (
      user.getFullName.bind((this.firstName = split[0])),
      user.getFullName.bind((this.lastName = split[1]))
    );
  },
};
// console.log(user.getFullName());
// console.log(user.setFullName());
user.getFullName();
user.setFullName();
export { user };
