"use strict";

const people = ["John", "Olivya", "Oleksandr", "Emanuel", "Vanya", "Nastya"];

function filterNames(people, textToFind) {
  if (!Array.isArray(people)) {
    return null;
  }
  return people.filter(
    (name) =>
      name.length > 5 && name.toLowerCase().includes(textToFind.toLowerCase())
  );
}

console.log(filterNames(people, "ya"));
