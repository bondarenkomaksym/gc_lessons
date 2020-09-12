// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

const finishList = () => {
  const newLifirst = document.createElement("li");
  newLifirst.textContent = "1";
  document.querySelector(".list").prepend(newLifirst);

  const newLifourth = document.createElement("li");
  newLifourth.textContent = "4";
  document.querySelector(".special").before(newLifourth);

  const newLisix = document.createElement("li");
  newLisix.textContent = "6";
  document.querySelector(".special").after(newLisix);

  const newLiEnd = document.createElement("li");
  newLiEnd.textContent = "8";
  document.querySelector(".list").append(newLiEnd);
};
// finishList();
export { finishList };
