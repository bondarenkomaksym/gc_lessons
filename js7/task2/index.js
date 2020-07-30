"use strict";

const numbers = [2, 5, 6, 3, 0, 3, -1, 54];

const sortDesc = (numbers) => {
  if (!Array.isArray(numbers)) {
    return null;
  }
  numbers.sort((a, b) => b - a);
  return numbers;
};
console.log(sortDesc(numbers));
