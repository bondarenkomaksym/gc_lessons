"use strict";

const arr = [2, 5, 6, 3];

function arrAverage(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return (
    arr.reduce(function (a, b) {
      return a + b;
    }, 0) / arr.length
  );
}

console.log(arrAverage(arr));
