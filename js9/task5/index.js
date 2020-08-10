// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: Object
//output: massive

//1. copy
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

function getCustomersList(obj) {
  let clone = { ...obj };
  const result = Object.entries(clone).map((el) => {
    const res = { ...el[1], id: el[0] };
    return res;
  });
  return result.sort((a, b) => a.age - b.age);
}
console.log(getCustomersList(customers));
