"use strict";

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
