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

window.addEventListener("error", function onUnhandledError(err) {
  console.error("error", err.message);
});

let userParsingResult;

try {
  //с помощью JSON.parse конвертируем строку в объект
  const user = JSON.parse('{"name":"John"}');
  console.log("User data: ", user);
  userParsingResult = "success";
} catch (e) {
  userParsingResult = "error";
} finally {
  console.log(`User parsing finished with ${userParsingResult}`);
}

let productParsingResult;

try {
  const product = JSON.parse('{"name":"John"');
  console.log("Product data: ", product);
  productParsingResult = "success";
} catch (e) {
  productParsingResult = "error";
} finally {
  console.log(`Product parsing finished with ${productParsingResult}`);
}
