// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

const user = {
  name: "Tom",
  sayHi() {
    console.log(`Hi, I'am ${this.name}!`);
  },
};

const deferredSayHi = defer(user.sayHi, 1000);
deferredSayHi.call({ name: "Bob" });
export { defer };
