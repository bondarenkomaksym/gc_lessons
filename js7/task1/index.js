"use strict";

// const nums = [2, 5, 6, 3, 0, 3, -1];

// const getSpecialNumbers = (nums) => {
//   if (!Array.isArray(nums)) {
//     return null;
//   }
//   let specialNumbers = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 3 === 0) {
//       specialNumbers.push(nums[i]);
//     }
//   }
//   return specialNumbers;
// };
// console.log(getSpecialNumbers(nums));

const nums = [2, 5, 6, 3, 0, 3, -1];

const getSpecialNumbers = (nums) => {
  if (!Array.isArray(nums)) {
    return null;
  }

  let specialNumbers = [];
  nums.forEach((e) => {
    if (e % 3 === 0) {
      specialNumbers.push(e);
    }
  });
  return specialNumbers;
};
console.log(getSpecialNumbers(nums));
