// How to work on tech tasks. Step by step guide
// 1. считываем данные формы после сабмита
// 2. валидация полей при нажатии на любую клавишу
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";
// Получить ссылки на поля ввода
const emailInput = document.querySelector("#email");
const passInput = document.querySelector("#password");
//поля вывода ошибок
const emailErrorInput = document.querySelector(".error-text_email");
const passErrorInput = document.querySelector(".error-text_password");

const formElement = document.querySelector(".login-form");

const validateEmail = (email) => {
  return email.includes("@") ? null : "Should be an email";
};

const handleEmail = (event) => {
  const email = event.target.value;
  const error = email ? validateEmail(email) : "Email required";
  emailErrorInput.textContent = error;
};

// черновой вариант
// const handleEmail = (event) => {
//   let error = event.target.value ? null : "Email required";
//   if (!error) {
//     error = event.target.value.includes("@") ? null : "Should be an email";
//   }
//   emailErrorInput.textContent = error;
// };

const handlePassword = (event) => {
  const error = event.target.value ? null : "Password required";
  passErrorInput.textContent = error;
};

emailInput.addEventListener("input", handleEmail);
passInput.addEventListener("input", handlePassword);

// обработчик submit
const handleSubmit = () => {
  //отменяем дефолтное поведение браузера
  event.preventDefault();
  // event.stopPropagation();
  //получаем данные с полей
  const formData = JSON.stringify(
    Object.fromEntries(new FormData(formElement))
  );
  alert(formData);
};
// считываем событие submit
formElement.addEventListener("submit", handleSubmit);
