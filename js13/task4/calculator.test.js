import { calc } from "./calculator.js";

it("not a string", () => {
  const result = calc(typeof expression !== "string");
  expect(result).toEqual(null);
});

it("multiply", () => {
  const result = calc("6 * 2");
  expect(result).toEqual("6 * 2 = 12");
});

it("sum", () => {
  const result = calc("6 + 2");
  expect(result).toEqual("6 + 2 = 8");
});

it("divide", () => {
  const result = calc("6 / 2");
  expect(result).toEqual("6 / 2 = 3");
});

it("subtract", () => {
  const result = calc("6 - 2");
  expect(result).toEqual("6 - 2 = 4");
});
