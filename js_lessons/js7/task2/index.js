"use strict";

const numbers = [2, 5, 6, 3, 0, 3, -1, 54];

const sortDesc = (numbers) => numbers.slice().sort((a, b) => b - a);

console.log(sortDesc(numbers));

// .slice() для того чтобы оригинал массива не изменился
