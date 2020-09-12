// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: string
//output: reverse string

"use strict";

it("17 везде 17", () => {
  expect(17).toEqual(17);
});

it("18 это не 17", () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = (numbers) => numbers.filter((n) => n % 2 === 0);

it("should get only even numbers from array", () => {
  const result = getEvenNumbers([1, 2, 3, 4, 5, 6]);

  expect(result).toEqual([2, 4, 6]);
});
