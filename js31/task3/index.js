// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";
const successPromise = new Promise((resolve) => {
  resolve(32);
});

/*
 * исправьте цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */
// console.log(successPromise);
successPromise
  .then((number) => {
    // console.log(number);
    const halfNumber = number / 2;
    return halfNumber;
  })
  .then((number) => {
    // console.log(number);
    /* fix this handler */
    const squaredNumber = number * number;
    return squaredNumber;
  })
  .then((result) => {
    console.log(result); // 256
  });

/*
 * исправьте цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */
successPromise
  .then((number) => {
    // console.log(number);
    /* fix this handler */
    return number * 10;
  })
  .then((result) => {
    console.log(result); // 320
  });

console.log(
  "!!! Обратите внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!"
);
