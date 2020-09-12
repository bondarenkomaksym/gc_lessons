// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

const asyncNum1 = 56;
const asyncNum2 = undefined;
const asyncNum3 = 10;

export const asyncSum = (...args) => {
  const getSum = (arr) =>
    arr.filter((num) => !isNaN(num)).reduce((acc, num) => acc + +num, 0);

  return Promise.all(args)
    .then((result) => console.log(getSum(result)))
    .catch(() => new Error(`Can't calculate`));
};

asyncSum(asyncNum1, asyncNum2, asyncNum3).then((result) => console.log(result));
