// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

const event = {
  guests: [
    { name: "John", age: 18, email: "j@server.com" },
    { name: "Bob", age: 24, email: "b@server.com" },
    { name: "Tom", age: 15, email: "t@server.com" },
  ],
  message: "Welcome to the party",
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        email,
        message: `Dear ${name}!, ${this.message}!`,
      }));
  },
};
console.log(event.getInvitations());
export { event };
