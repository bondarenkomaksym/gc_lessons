// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

export const requestUserData = (userId) => {
  const request = new Promise((resolve, reject) => {
    if (userId === "broken") {
      setTimeout(() => {
        reject(new Error("User not found"));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: "John",
          age: 17,
          userId: `${userId}`,
          email: `${userId}@example.com`,
        });
      }, 1000);
    }
  });
  //если ничего не возвращать из функции, то она возвращает undefined
  return request;
};

// requestUserData("userid777")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//then может принимать два аргумента - так короче запись
requestUserData("userid777").then(
  (data) => console.log(data),
  (error) => console.log(error)
);
