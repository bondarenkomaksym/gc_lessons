"use strict";

const numbers = [2, 5, 6, 3, 18, 4];

function cloneArr(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }
  let clone = [...numbers];
  return clone;
}
console.log(cloneArr(numbers));
