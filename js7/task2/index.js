"use strict";

const numbers = [2, 5, 6, 3, 0, 3, -1, 54];

const sortDesc = (numbers) => {
  if (!Array.isArray(numbers)) {
    return null;
  }
  const sorted = [...numbers];
  sorted.sort((a, b) => b - a);
  return sorted;
};
console.log(sortDesc(numbers));
