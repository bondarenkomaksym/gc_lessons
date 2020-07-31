"use strict";

const numbers = [2, 5, 6, 3, 18, 4];

const squareArray = (numbers) => {
  if (!Array.isArray(numbers)) {
    return null;
  }
  return numbers.reverse();
};
console.log(squareArray(numbers));
