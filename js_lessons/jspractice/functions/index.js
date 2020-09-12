"use strict";

function test() {
  return 42;
}
let res = test();
console.log(res);

function getSquared(num) {
  return num * num;
}
console.log(getSquared(5));

function sum(a, b) {
  return a + b;
}
console.log(sum(5, 3));

function print(num) {
  console.log("I am " + num + " years old");
}
print(34);

const mult = (a, b) => {
  return a * b;
};
console.log(mult(10, 5));

const square = (a) => a * a;
console.log(square(9));

const getMagicNumber = () => {
  return 17;
};
console.log(getMagicNumber());
