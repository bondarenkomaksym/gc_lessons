"use strict";

// const numbers = [2, [5, 6, 3, 0, 3], 54];

// const flatArray = (numbers) => {
//   if (!Array.isArray(numbers)) {
//     return null;
//   }
//   const flatArray = numbers.reduce((acc, e) => {
//     return acc.concat(e);
//   }, []);
//   return flatArray;
// };
// console.log(flatArray(numbers));

const numbers = [2, [5, 6, 3, 0, 18], 54];

const flatArray = (numbers) => {
  if (!Array.isArray(numbers)) {
    return null;
  }
  return numbers.slice().flat();
};
console.log(flatArray(numbers));
