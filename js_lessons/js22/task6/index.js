// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";
const btnClick = document.querySelector(".single-use-btn");

const removeClick = () => {
  console.log("clicked");
  btnClick.removeEventListener("click", removeClick);
};
btnClick.addEventListener("click", removeClick);
// const removeClick = () => {};
// btnClick.addEventListener("click", removeClick);
