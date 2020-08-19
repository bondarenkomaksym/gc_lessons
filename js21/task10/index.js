// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

const finishForm = () => {
  const newAtr = document.querySelector("input");
  newAtr.setAttribute("name", "login");
  //создаём новый input
  const input = document.createElement("input");
  //обозначаем место для нового input
  const newInput = document.querySelector(".login-form");
  //сам процесс создания input
  newInput.append(input);
  //создание новых атрибутов
  input.setAttribute("type", "password");
  input.setAttribute("name", "password");
};
// finishForm();
export { finishForm };
