// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";
// const b1 = document.querySelector(".b-1");

// b1.onclick = test;

// function test() {
//   this.style.background = "red";
// }

// let a = 7;

// setTimeout(() => {
//   a = 99;
//   console.log(a);
// }, 2000);

// console.log(a);

// let b = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve((a = 99));
//     // console.log(a);
//   }, 2000);
// });

// b.then(() => console.log(a));

// const nonconsecutive = (arr) => {
//   let result = arr.find((number, index) => number !== index + arr[0]);
//   return Number.isInteger(result) ? result : null;
// };
// console.log(nonconsecutive([1, 2, 3, 4, 6, 7, 8]));

// function firstNonConsecutive(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] - arr[i] >= 2) {
//       return arr[i + 1];
//     }
//   }
//   return null;
// }
// console.log(firstNonConsecutive([1, 2, 3, 5]));

// function sum() {
//   let result = 0;
//   for (let i = 0; i < 700; i++) {
//     result += 1;
//     if (result > 50) throw new Error("aaaaaaaaaaaaa");
//   }
//   return result;
// }
// console.log(sum());

// let arr = [1, 10, 3, 7, 56];
// const result = arr.map(() => {});
// console.log(result); //массив с undef элементами

// const result = (() => {}) === (() => {});
// console.log(result); //false потому что две разные функции

// const obj = {
//   name: "Tom",
// };
// console.log(obj);

//fizzbuzz ++++++++++++++++++++++++++++++++

// for (let i = 1; i < 100; i++) {
//   let arr = [];
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }

// const generator = (n, w) => (num) => (num % n === 0 ? w : "");
// const fizz = generator(3, "fizz");
// const buzz = generator(5, "buzz");

// [...Array(20).keys()]
//   .map((i) => i + 1)
//   .forEach((i) => console.log(fizz(i) + buzz(i) || i));

// let arr = ["a", "b", "c"];

// const result = (arr) =>
//   arr.map((el, index) => {
//     return `${index + 1}: ${el}`;
//   });

// console.log(result(arr));

// function firstNonConsecutive(ids) {
//   for (let i = 0; i < ids.length; i++) {
//     if (ids.indexOf(i) === -1) {
//       return i;
//     }
//   }
//   return ids.length;
// }
// console.log(firstNonConsecutive([1, 2, 3, 5]));

// function nextId(ids) {
//   for (let i = 0; i < ids.length; i++) {
//     if (ids.indexOf(i) === -1) {
//       return i;
//     }
//   }
//   return ids.length;
// }
// console.log(nextId([0, 1, 2, 3, 5]));


//через округление верх
// const quarterOf = month => {
//   return Math.ceil(month / 3)
// }
// console.log(quarterOf(11));

//через if 
// let arr = [1, 2, 3, 4, 5];

// const array = Array.from({ length: 12 }, (v, k) => k + 1);
// console.log(array);

// const quarter = month => {
//   if (month >= 1 && month <= 3) {
//     return 1;
//   } else if (month >= 4 && month <= 6) {
//     return 2;
//   } else if (month >= 7 && month <= 9) {
//     return 3;
//   } else if (month >= 10 && month <= 12) {
//     return 4;
//   }

// }
// console.log(quarter(6));


// const quarterOf2 = (month) => {
//   return month % 3 === 0 ? month / 3 : Math.floor(month / 3) + 1;
// }
// console.log(quarterOf2(11));

// const res = arr.forEach((el) => {
//   return el + 10;
// })
// console.log(res);

function hel(a, b) {
  console.log(this);
  console.log(a, b);
}

hel.bind(30, 10, 25)();

// arr.reduce((acc, el) => {
//   arr.push(el);
// })
// console.log(arr);

console.log(a);
var a = 10;

// function deepClone(obj) {
//   let copy;
//   // Обработка трёх простых типов и null или undefined
//   if (null == obj || "object" != typeof obj) return obj;
//   // Обработка дат
//   if (obj instanceof Date) {
//     copy = new Date();
//     copy.setTime(obj.getTime());
//     return copy;
//   }
//   // Обработка массивов
//   if (obj instanceof Array) {
//     copy = [];
//     for (let i = 0, len = obj.length; i < len; i++) {
//       copy[i] = deepClone(obj[i]);
//     }
//     return copy;
//   }
//   // Обработка функций
//   if (obj instanceof Function) {
//     copy = function () {
//       return obj.apply(this, arguments);
//     }
//     return copy;
//   }
//   // Обработка объектов
//   if (obj instanceof Object) {
//     copy = {};
//     for (let attr in obj) {
//       if (obj.hasOwnProperty(attr)) copy[attr] = deepClone(obj[attr]);
//     }
//     return copy;
//   }
//   throw new Error("Unable to copy obj as type isn't supported " + obj.constructor.name);
// }

// console.log([...Array(10).keys()]
//   .map(el => el + 1).filter(el => el % 3 === 0));

// console.log(Math.ceil(10 / 3));

// function isPalindrom(string) {
//   let copyreverse = string.split('').reverse().join('');

//   if (string === copyreverse) {
//     console.log('palindrome');
//   } else {
//     console.log('not');
//   }
// };
// isPalindrom('456654');
// isPalindrom('45665');

// function isPalindrom(string) {
//   let characters = string.split('');
//   let isPalindrom = true;

//   for (let i = 0; i < characters.length; i++) {
//     const element = characters[i];

//     if (element !== characters[characters.length - 1 - i]) {
//       isPalindrom = false;
//     }
//   }
//   return isPalindrom;
// };

// console.log(isPalindrom('45664'));