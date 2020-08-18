// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

const getTitle = () => {
  const elementsList = document.querySelector(".title");
  return elementsList;
};
getTitle();

const getDescription = () => {
  const elementsList = document.querySelector(".about");
  return elementsList;
};
getDescription();

const getPlans = () => {
  const elementsList = document.querySelector(".plans");
  return elementsList;
};
getPlans();

const getGoal = () => {
  const elementsList = document.querySelector(".goal");
  return elementsList;
};
getGoal();

export { getTitle, getDescription, getPlans, getGoal };
