// input:
// output:

//1. querySelector elements
//2. считать данные формы
//3. отправка через POST и обработать ответ (handle response)
//4. валидация инпута
//
"use strict";

const serverUrl = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users";

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
  .then((response) => console.log(response.json()))
  .then((userBody) => {
    console.log(userBody);
    // alert(JSON.stringify(userBody));
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
