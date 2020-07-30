"use strict";

const people = ["John", "Olivya", "Oleksandr", "Emanuel", "Vanya", "Nastya"];

function filterNames(names) {
  if (!Array.isArray(people)) {
    return null;
  }
  return people.filter(function (el) {
    return el.toLowerCase().indexOf(names.toLowerCase()) >= 4;
  });
}

console.log(filterNames("ya"));
