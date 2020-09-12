"use strict";

const transformToObject = (arr) => {
  let obj = {};

  arr.forEach((e) => {
    obj[e] = e;
  });
  return obj;
};
const arr = ["a", 17.1, "John Doe"];
const result = transformToObject(arr);

console.log(result);
