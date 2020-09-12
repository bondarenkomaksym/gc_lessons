// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";
const checkbox = document.querySelector(".task-status");

checkbox.addEventListener("change", (event) => {
  event.target.checked ? console.log(true) : console.log(false);
});
