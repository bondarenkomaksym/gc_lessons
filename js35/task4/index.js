// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

//в случае потенциально опасного кода, код помещаем в конструкцию try/catch
//если ошибки не будет, то код выполниться как обычно
//в блоке finaly можно выполнить доп действия

// try {
//   const jsonString = '{"name":"John"}';
//   const userData = JSON.parse(jsonString);
//   console.log(userData);
// } catch (err) {
//   console.error(err.name);
// } finally {
//   console.log("some script");
// }
// console.log("I am alive!");

export const parseUser = (jsonString) => {
  try {
    return JSON.parse(jsonString);
  } catch {
    return null;
  }
};
