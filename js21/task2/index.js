// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

const getTitleElement = () => {
  const titleElement = document.querySelector(".title");
  console.dir(titleElement);
  return titleElement;
};
getTitleElement();
const getInputElement = () => {
  const inputElement = document.querySelector("input", "text");
  console.dir(inputElement);
  return inputElement;
};
getInputElement();
export { getTitleElement, getInputElement };
