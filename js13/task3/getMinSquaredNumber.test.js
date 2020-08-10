import { getMinSquaredNumber } from "./getMinSquaredNumber.js";

it("should get squared numbers", () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(result).toEqual(4);
});

it("arr is empty", () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it("is a string", () => {
  const result = getMinSquaredNumber("string");
  expect(result).toEqual(null);
});
