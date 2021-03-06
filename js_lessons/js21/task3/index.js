// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

const getItemsList = () => {
  const elementsList = document.querySelectorAll(".technology");
  console.dir(elementsList);
  return elementsList;
};
getItemsList();

const getItemsArray = () => {
  const elementsArray = document.querySelectorAll(".tool");
  console.dir(Array.from(elementsArray));
  return Array.from(elementsArray);
};
getItemsArray();

export { getItemsList, getItemsArray };
