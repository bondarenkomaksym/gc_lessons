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

const successRequest = Promise.resolve({ name: "Tom" });

successRequest
  .then(function onSuccess1(data) {
    throw new Error("Error with data");
  })
  .catch(function onError1(error) {
    console.error("onError1", error.message);
  });

const failRequest = Promise.reject(new Error("Something went wrong"));

failRequest
  .catch(function onError2(error) {
    console.error("onError2", error.message);
    throw new Error("Server error");
  })
  .then(function onSuccess2(data) {
    console.log("onSuccess2", data);
  })
  .catch(function onError3(error) {
    console.error("onError3", error.message);
  });
