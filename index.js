const numbers = [5, 6, 8, 11, 9, 4];

function reverseArray(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }
  rev = [];
  numbers.forEach((element) => {
    rev.unshift(element);
  });
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
