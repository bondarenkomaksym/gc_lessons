// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

"use strict";

//1. create empty massive
//2. iterate array and callback

// const arr = [1, 10, 3, 7, 56];

//callback
//input: number, number, array
//output: boolean
function filterArray(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }

  return result;
}

let array = [10, 30, 3, 7, 56, -1, -200, 21];

const callback = (el) => {
  const res = el > 20;
  return res;
};
console.log(filterArray(array, callback));

//TODO create new callback function!!!

// console.log(array.filter(callback));

//TESTING
// let array1 = [1, 10, 3, 7, 56];
// const callback1 = (el, index, arr) => {
//   console.log(el);
//   console.log(index);
//   console.log(arr);

//   const res = el > 20;
//   return res;
// };
// array1.filter(callback1);
