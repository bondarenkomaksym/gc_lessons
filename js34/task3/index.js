// input:
// output:

//1. querySelector elements
//2. считать данные формы
//3. отправка через POST и обработать ответ (handle response)
//4. валидация инпута
//
"use strict";

const serverUrl = "https://5f577f7f1a07d600167e6e96.mockapi.io/users";

const loginForm = document.querySelector(".login-form");
const submitButton = document.querySelector(".submit-button");
const errorField = document.querySelector(".error-text");

// console.log(userBody);

// let userBody = {
//   email: "test@example.com",
//   name: "John Doe",
// };

// console.log(res);

const formChanges = () => {
  if (loginForm.reportValidity()) {
    submitButton.disabled = false;
  }
};
loginForm.addEventListener("input", formChanges);

//отправка данных формы на сервер
const sendData = (event) => {
  event.preventDefault();
  //данные формы конвертируем в объект
  const userBody = Object.fromEntries([...new FormData(loginForm)]);

  const res = fetch(serverUrl, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(userBody),
  })
    .then((response) => console.log(response.json()))
    .catch(() => {
      errorField.textContent = "Failed to create user";
    });
};

loginForm.addEventListener("submit", sendData);
