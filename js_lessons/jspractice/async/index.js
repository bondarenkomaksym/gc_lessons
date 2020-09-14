// input:
// output:

//1. querySelector elements
//2. считать данные формы
//3. отправка через POST и обработать ответ (handle response)
//4. валидация инпута
//
"use strict";

const serverUrl = "https://5f577f7f1a07d600167e6e96.mockapi.io/users";

const createUser = (user) => {
  const res = fetch(serverUrl, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      handleError(response.status);
    })
    .then((userBody) => {
      console.log(userBody);
    })
    .catch((error) => {
      alert(error.message);
    });
};

const createUserAsyncAwait = async (user) => {
  const response = await fetch(serverUrl, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(user),
  });
  // debugger;

  if (response.ok) {
    const res = await response.json();
    return res;
  }
  handleError(response.status);
};

const handleError = () => {
  if (status === 400) {
    throw new Error("User data not correct");
  }
  if (status === 500) {
    throw new Error("try again");
  }
};

const user = {
  email: "MB@example.com",
  name: "Max",
  city: "Kyiv",
};

try {
  console.log(createUserAsyncAwait(user));
} catch (error) {
  alert(error.message);
}

try {
  console.log(test);
} catch (error) {
  console.log(error);
}

console.log("Important code!");
