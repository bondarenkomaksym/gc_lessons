const numbers = [5, 6, 8, 11, 9, 4];

function reverseArray(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }
  rev = [];
  for (let i = numbers.length - 1; i >= 0; i--) {
    rev.push(numbers[i]);
  }
  return rev;
}

//клон массива===========================

// const numbers = [5, 6, 8, 11, 9, 4];

// function cloneArr(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   return (newArray = arr.slice());
// }
// console.log(cloneArr(numbers));
