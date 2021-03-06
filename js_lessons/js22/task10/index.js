// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";
const btnClick = document.querySelectorAll(".pagination__page");

const handleClick = (event) => {
  console.log(event.target.textContent);
};
btnClick.forEach((btn) => btn.addEventListener("click", handleClick));
