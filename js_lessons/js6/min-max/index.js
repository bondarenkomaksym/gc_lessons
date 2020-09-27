"use strict";

const nums = [21, 5, 6, 3, 999, 3];

const getSpecialNumbers = (nums) => {
  if (!Array.isArray(nums)) {
    return null;
  }
  return (Math.min(...nums) + Math.max(...nums) > 1000) ?
    true : false;

};
console.log(getSpecialNumbers(nums));
