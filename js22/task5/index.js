// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";
const input = document.querySelector(".search__input");
const btnClick = document.querySelector(".search__btn");

btnClick.addEventListener("click", () => {
  console.log(input.value);
});
