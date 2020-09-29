"use strict";

const nums = [1, 4, 1, 8, 3, 4, 8, 8];

const uniqueCount = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  let result = [];

  for (let elem of arr) {
    if (!result.includes(elem)) {
      result.push(elem);
    }
  }

  return result.length;
};


console.log(uniqueCount(nums));
