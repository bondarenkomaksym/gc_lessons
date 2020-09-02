// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

const serverResponsePromise = new Promise((resolve) => {
  const serverResponse = {
    ok: true,
    json() {
      return Promise.resolve({
        name: "John",
        age: 20,
      });
    },
  };
  resolve(serverResponse);
});

/*
 * допишите первый обработчик, чтобы во второй попал объект пользователя
 */

serverResponsePromise
  .then((response) => {
    // console.log(response.json());
    return response.json();
    // return response;
    /* ...code here */
  })
  .then((result) => {
    console.log(result); // { name: 'John', age: 20 }
  });

console.log(
  "!!! Обратите внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!"
);
