"use strict";

//first
const numbers = [2, 5, 6, 3, 18, 4];

export const reverseArray = (numbers) => {
  if (!Array.isArray(numbers)) {
    return null;
  }
  return numbers.slice().reverse();
};
console.log(reverseArray(numbers));

//second
export const withdraw = (clients, balances, client, amount) => {
  if (typeof client !== "string") return null;
  const clientId = clients.indexOf(client);
  const clientBalance = balances[clientId];
  return clientBalance > amount ? clientBalance - amount : -1;
};

console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50));

//third
const obj = { "John Doe": 19, Tom: 17, Bob: 18 };

export const getAdults = (obj) => {
  if (typeof obj !== "object") return null;
  let newObj = {};
  for (let value in obj) {
    if (obj[value] > 17) {
      newObj[value] = obj[value];
    }
  }
  return newObj;
};
console.log(getAdults(obj));
