//перевернуть массив===========================

const numbers = [5, 6, 8, 11, 9, 4];
let arr = numbers;
function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.reverse();
}

// const array = reverseArray(numbers);
console.log(reverseArray(arr));

//клон массива===========================

// const numbers = [5, 6, 8, 11, 9, 4];

// function cloneArr(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   return (newArray = arr.slice());
// }
// console.log(cloneArr(numbers));
