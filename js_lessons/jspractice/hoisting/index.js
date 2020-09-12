// "use strict";
//hoisting example 1

// console.log(message);
// var message = "Hoisting is here!";

// console.log(message);
// let message = "Hoisting is here!";

//hoisting example 2

// Global env = {
// enviromentrecord: {
//     a: num
//   }
//   outer: null
// }
//

// var a = 17;
// console.log(a);

// if (a) {
// Global env = {
// enviromentrecord: {
//      a: num
//   }
//   outer: global
// }
//
// }
//   let a = 1;

//   console.log(a);
// }

// console.log(a);

//hoisting example 3
var a = 77;
console.log(a);

function print() {
  //var не всплывает из функции
  var a = 2;
  console.log(a);
}
print();

console.log(a);

//scope example

// Global env = {
// enviromentrecord: {
//     a: num
//   }
//   outer: null
// }
//

// let a = 5;

// for (let i = 0; i < 2; i++) {
//   console.log(i);
//   a++;
//   console.log(a);

//   let b = 10;
//   b++;

// Global env = {
// enviromentrecord: {
//     i: num,
//     b: num,
//   }
//   outer: global
// }
//
// }

// console.log(b);
