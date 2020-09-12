"use strict";

const numbers = [2, 5, 6, 3, 18, 4];

const squareArray = (numbers) => {
  if (!Array.isArray(numbers)) {
    return null;
  }
  return numbers.map((x) => x ** 2);
};
console.log(squareArray(numbers));
