"use strict";

const nums = [21, 5, 6, 3, 999, 3];

const checker = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return (Math.min(...arr) + Math.max(...arr) > 1000) ?
    true : false;

};


console.log(getSpecialNumbers(nums));
