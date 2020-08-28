// How to work on tech tasks. Step by step guide
// 1. Получить ссылки на поля ввода
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";
// 1 Получить ссылки на поля ввода
const emailInput = document.querySelector("#email");
const passInput = document.querySelector("#password");
//поля вывода ошибок
const emailErrorInput = document.querySelector(".error-text_email");
const passErrorInput = document.querySelector(".error-text_password");
// 3 валидатор значения поля
const isRequired = (value) => (value ? undefined : "Required");
// 3 валидатор для почты
const isValidEmail = (value) =>
  value.includes("@") ? undefined : "Should be an email";

// 7 функция номер 6 выбирает актуальные валидаторы для каждого поля
const validatorsByField = {
  email: [isRequired, isValidEmail],
  password: [isRequired],
};
// 6 функция для избегания дублирования кода для формирования ошибок

const validate = (fieldName, value) => {
  const validators = validatorsByField[fieldName];
  return validators
    .map((validator) => validator(value))
    .filter((errorText) => errorText)
    .join(", ");
};
// 4 получаем событие через target(дом-элемент)
// 5 на каждое событие в инпуте запускаем функцию, которая принимает объект ивента, из него мы узнаём значение в поле. Это значение проходит через функции-валидаторы, генерируется ошибка и вставляется в пустой спан
const onEmailChange = (event) => {
  const errorText = validate("email", event.target.value);
  emailErrorInput.textContent = errorText;
};
const onPassChange = (event) => {
  const errorText = validate("password", event.target.value);
  passErrorInput.textContent = errorText;
};
// 5 на каждое событие в инпуте запускаем функцию, которая принимает объект ивента, из него мы узнаём значение в поле. Это значение проходит через функции-валидаторы, генерируется ошибка и вставляется в пустой спан

// const onEmailChange = (event) => {
//считываем значения двух функций
//   const errorText = [isRequired, isValidEmail]
//каждый валидатор запускаем со значением полученым через target(дом-элемент)
//     .map((validator) => validator(event.target.value))
// если получаем undefined, то эти значения фильтруем
//     .filter((errorText) => errorText)
//     .join(", ");
//в элемент который содержит ошибки вставляем новый текст
//   emailErrorInput.textContent = errorText;

// };
// const onPassChange = (event) => {
//   const errorText = [isRequired]
//     .map((validator) => validator(event.target.value))
//     .filter((errorText) => errorText)
//     .join(", ");
//   passErrorInput.textContent = errorText;

// };

// 2 обработчики событий на полях ввода
emailInput.addEventListener("input", onEmailChange);
passInput.addEventListener("input", onPassChange);
// 8 ссылка на элемент формы
const formElement = document.querySelector(".login-form");
// 10 обработчик submit
const onFormSubmit = (event) => {
  //11 отменяем дефолтное поведение браузера
  event.preventDefault();
  // 12 через спред оператор получаем массив значений формы
  const formData = [...new FormData(formElement)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {}
  );
  // 13 превращаем объект в строку
  alert(JSON.stringify(formData));
};
// 9 считываем событие submit
formElement.addEventListener("submit", onFormSubmit);
