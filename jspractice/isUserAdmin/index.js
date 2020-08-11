// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: array of string, array of objects,
//output: array of objects

//1. map array of objects

"use strict";

// const characters = [
//   { id: 1, name: "ironman" },
//   { id: 2, name: "black_widow" },
//   { id: 3, name: "captain_america" },
//   { id: 4, name: "captain_america" },
// ];

// function getCharacter(name) {
//   return (character) => character.name === name;
// }

// console.log(characters.filter(getCharacter("captain_america")));

const adminIds = ["1", "3", "2"];
const users = [
  { id: "1", name: "Bob" },
  { id: "2", name: "Tom" },
  { id: "3", name: "Sam" },
  { id: "4", name: "Tad" },
];

// const markAdmins = (users, adminIds) => {
//   return users.map((user) => {
//     console.log(user);

//     const isAdmin = adminIds.includes(user.id);
//     console.log(isAdmin);

//     return { ...user, isAdmin: isAdmin };
//   });
// };

// console.log(markAdmins(users, adminIds));

//рефакторинг

// const markAdmins = (users, adminIds) => {
//   return users.map((user) => {
//     return { ...user, isAdmin: adminIds.includes(user.id) };
//   });
// };
// console.log(markAdmins(users, adminIds));

//рефакторинг-2

const markAdmins = (users, adminIds) =>
  users.map((user) => ({ ...user, isAdmin: adminIds.includes(user.id) }));

console.log(markAdmins(users, adminIds));
