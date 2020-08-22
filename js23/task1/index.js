// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";
const emailInput = document.querySelector("#email");
const passInput = document.querySelector("#password");

const emailErrorInput = document.querySelector(".error-text_email");
const passErrorInput = document.querySelector(".error-text_password");

const isRequired = (value) => (value ? undefined : "Required");
const isValidEmail = (value) =>
  value.includes("@") ? undefined : "Where a dog?";

const validatorsByField = {
  email: [isRequired, isValidEmail],
  password: [isRequired],
};

const validate = (fielName, value) => {
  const validators = validatorsByField[fielName];
  return validators
    .map((validator) => validator(value))
    .filter((errorText) => errorText)
    .join(", ");
};

const onEmailChange = (event) => {
  const errorText = validate("email", event.target.value);
  emailErrorInput.textContent = errorText;
};
const onPassChange = (event) => {
  const errorText = validate("password", event.target.value);
  passErrorInput.textContent = errorText;
};

// const onEmailChange = (event) => {
//   const errorText = [isRequired, isValidEmail]
//     .map((validator) => validator(event.target.value))
//     .filter((errorText) => errorText)
//     .join(", ");
//   emailErrorInput.textContent = errorText;

// };
// const onPassChange = (event) => {
//   const errorText = [isRequired]
//     .map((validator) => validator(event.target.value))
//     .filter((errorText) => errorText)
//     .join(", ");
//   passErrorInput.textContent = errorText;

// };

emailInput.addEventListener("input", onEmailChange);
passInput.addEventListener("input", onPassChange);

const formElement = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();
  const formData = [...new FormData(formElement)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {}
  );
  alert(JSON.stringify(formData));
};

formElement.addEventListener("submit", onFormSubmit);
