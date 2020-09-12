// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: massive
//output: number

"use strict";

const dayTransactions = [
  { userId: 22, amount: 60, operation: "sell" },
  { userId: 22, amount: 160, operation: "buy" },
  { userId: 44, amount: 90, operation: "sell" },
];

const getTotalRevenue = (dayTransactions) =>
  dayTransactions.map((el) => el.amount).reduce((a, b) => a + b);

console.log(getTotalRevenue(dayTransactions));
