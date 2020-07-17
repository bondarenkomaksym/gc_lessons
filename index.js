function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let newArray = arr.slice();
  return newArray.reverse();
}
