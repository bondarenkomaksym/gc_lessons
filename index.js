function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === i) {
      count += 1;
    }
  }
  return count;
}
