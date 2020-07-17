function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let newArray = arr.slice();
  return newArray;
}
