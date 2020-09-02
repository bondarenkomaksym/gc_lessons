// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";
/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

/* ...code here */
export const makePromise = (value) =>
  new Promise((resolve) => {
    resolve(value);
  });
/*
 * пример использования
 */
makePromise(17).then((number) => {
  console.log(number); // 17
});
