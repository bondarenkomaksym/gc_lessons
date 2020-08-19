// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

const squaredNumbers = () => {
  const nums = document.querySelectorAll(".number");
  for (let num of nums) {
    const square =
      num.getAttribute("data-number") * num.getAttribute("data-number");
    num.dataset.squaredNumber = square;
  }
};
squaredNumbers();
export { squaredNumbers };
