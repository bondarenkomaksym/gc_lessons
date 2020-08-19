// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

const manageClasses = () => {
  const liOne = document.querySelector(".one");
  liOne.classList.add("selected");

  const liTwo = document.querySelector(".two");
  liTwo.classList.remove("selected");

  const liThree = document.querySelector(".three");
  liThree.classList.toggle("three_done");

  const liFour = document.querySelector(".some-class");
  return liFour ? liFour.classList.add("another-class") : false;
};
// manageClasses();
export { manageClasses };
