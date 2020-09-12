// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

// const wallet = {
//   transactions: [2, 5, 6, 3],
//   getMax() {
//     return Math.max.apply(null, this.transactions);
//   },
//   getMin() {
//     return Math.min.apply(null, this.transactions);
//   },
// };
// console.log(wallet.getMax());
// console.log(wallet.getMin());
// export { wallet };

//через спред-оператор

const wallet = {
  transactions: [2, 5, 6, 3],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
};
console.log(wallet.getMax());
console.log(wallet.getMin());
export { wallet };
