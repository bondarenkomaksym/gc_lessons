// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";
// const b1 = document.querySelector(".b-1");

// b1.onclick = test;

// function test() {
//   this.style.background = "red";
// }

let a = 7;

// setTimeout(() => {
//   a = 99;
//   console.log(a);
// }, 2000);

console.log(a);

let b = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve((a = 99));
    // console.log(a);
  }, 2000);
});

b.then(() => console.log(a));
