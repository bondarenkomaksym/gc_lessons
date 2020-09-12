// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

const check = document.querySelector(".task-status");

check.addEventListener("change", () => {
  check.checked ? console.log(true) : console.log(false);
  // check.checked ? console.log(check.value) : console.log(check.value);
});
