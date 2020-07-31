"use strict";

const concatProps = (obj) => {
  const arr = [];
  for (let key in obj) {
    arr.push(obj[key]);
  }
  return arr;
};

const obj = { name: "John Doe", age: 17, interest: "football" };
console.log(concatProps(obj));
