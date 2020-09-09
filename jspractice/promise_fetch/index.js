// input:
// output:

//1. querySelector elements
//2. считать данные формы
//3. отправка через POST и обработать ответ (handle response)
//4. валидация инпута
//
"use strict";

const serverUrl = "https://5f577f7f1a07d600167e6e96.mockapi.io/users";

const user = {
  email: "MB@example.com",
  name: "Max",
  city: "Kyiv",
};

// console.log(JSON.stringify(user));

const res = fetch(serverUrl, {
  method: "POST",
  headers: { "Content-type": "application/json" },
  body: JSON.stringify(user),
})
  //.json()
  //input: none
  //output: Promise
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    if (response.status === 400) {
      throw new Error("data is not valid");
    }
    if (response.status === 500) {
      throw new Error("try again later");
    }
  })
  .then((userBody) => {
    console.log(userBody);
    // alert(JSON.stringify(userBody));
  })
  .catch((error) => {
    console.log(error);
  });
// .then((response) => {
//   debugger;
//   //если response удачный, то выводим его в alert
//   if (response.status === 201) {
//     alert(JSON.stringify(response.body));
//   }
//   console.log(response);
// });

// console.log(res);
