// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: Object
//output: massive

//1. copy - нет мутаций!
//2. get key-value by Object.entries
//3. map elements
//4. sort

"use strict";

const customers = {
  "customer-id-1": {
    name: "William",
    age: 54,
  },
  "customer-id-2": {
    name: "Tom",
    age: 17,
  },
};

// function getCustomersList(obj) {
//   return Object.entries(obj)
//     .map((el) => {
//       const res = { ...el[1], id: el[0] };
//       return res;
//     })
//     .sort((a, b) => a.age - b.age);
// }
// console.log(getCustomersList(customers));

//рефакторинг

const getCustomersList = (obj) => {
  return Object.entries(obj)
    .map((el) => ({ ...el[1], id: el[0] }))
    .sort((a, b) => a.age - b.age);
};
console.log(getCustomersList(customers));
