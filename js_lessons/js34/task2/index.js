// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

const baseUrl = "https://5f56011532f56200168bccc5.mockapi.io/api/v1/users";

// const newUser = {
//   email: "aaaaaaaa@gmail.com",
//   name: "Max",
//   city: "Kyiv",
// };

/* getUsersList code here */
export const getUsersList = () =>
  fetch(baseUrl).then((response) => response.json());
// console.log(getUsersList());

/* getUserById code here */
export const getUserById = (userId) =>
  fetch(`${baseUrl}/${userId}`).then((response) => response.json());
// console.log(getUserById(2));

/* createUser code here */
export const createUser = (user) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charser= utf-8",
    },
    body: JSON.stringify(user),
  });
// console.log(createUser(newUser));

/* updateUser code here */
export const updateUser = (id, updatedUserData) =>
  fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charser= utf-8",
    },
    body: JSON.stringify(updatedUserData),
  });
// console.log(updateUser(3, newUser));

/* deleteUser code here */
export const deleteUser = (id) =>
  fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
// console.log(deleteUser(3));
