// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

const baseUrl = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks";

/* getTasksList code here */

export const getTasksList = () => {
  return fetch(baseUrl).then((response) => response.json());
};
/* getTaskById code here */

export const getTaskById = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`).then((response) => response.json());
};

// console.log(getTasksList());
// console.log(getTaskById(2));
