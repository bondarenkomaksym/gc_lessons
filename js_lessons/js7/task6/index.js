"use strict";

const numbers = [2, 5, 6, 3, 18, 4];

const reverseArray = (numbers) => {
  if (!Array.isArray(numbers)) {
    return null;
  }
  return numbers.slice().reverse();
};
console.log(reverseArray(numbers));
