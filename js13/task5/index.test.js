import { reverseArray, withdraw, getAdults } from "./index.js";

it("reverse", () => {
  const result = reverseArray([2, 5, 6, 3, 18, 4]);
  expect(result).toEqual([4, 18, 3, 6, 5, 2]);
});

it("isArray", () => {
  const result = reverseArray(!Array.isArray([2]));
  expect(result).toEqual(null);
});

it("arr is empty", () => {
  const result = reverseArray([]);
  expect(result).toEqual([]);
});

it("client name is a string", () => {
  const result = withdraw(typeof client !== "string");
  expect(result).toEqual(null);
});

it("empty client", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], 50);
  expect(result).toEqual(null);
});

it("not enough money", () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 48, -6], "John", 50);
  expect(result).toEqual(-1);
});

it("Tom older", () => {
  const result = getAdults({ "John Doe": 19, Tom: 20, Bob: 18 });
  expect(result).toEqual({ "John Doe": 19, Tom: 20, Bob: 18 });
});

it("empty object", () => {
  const result = getAdults({});
  expect(result).toEqual({});
});

it("value is object", () => {
  const result = getAdults(987987);
  expect(result).toEqual(null);
});
