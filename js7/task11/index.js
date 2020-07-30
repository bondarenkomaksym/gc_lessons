"use strict";

// const people = ["John", "Olivya", "Oleksandr", "Emanuel", "Vanya", "Nastya"];

// function filterNames(names) {
//   if (!Array.isArray(people)) {
//     return null;
//   }
//   return people.filter(function (el) {
//     return el.toLowerCase().indexOf(names.toLowerCase()) >= 4;
//   });
// }

// console.log(filterNames("ya"));

// const people = ["John", "Olivya", "Oleksandr", "Emanuel", "Vanya", "Nastya"];

// const filterNames = (name) => {
//   if (!Array.isArray(people)) {
//     return null;
//   }
//   return people.filter((data) => {
//     return data.toLowerCase().indexOf(name.toLowerCase()) >= 4;
//   });
// };

// console.log(filterNames("ya"));

const people = ["John", "Olivya", "Oleksandr", "Emanuel", "Vanya", "Nastya"];

function filterNames(people, textToFind) {
  if (!Array.isArray(people)) {
    return null;
  }
  return people.filter(
    (data) =>
      data.length > 5 &&
      data.toLowerCase().indexOf(textToFind.toLowerCase()) > -1
  );
}

console.log(filterNames(people, "ya"));
