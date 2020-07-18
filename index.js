const nums = [1, 4, 20, 12, 5];

function sortAsc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  for (let n = 0; n < array.length; n++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        const buff = array[i];
        array[i] = array[i + 1];
        array[i + 1] = buff;
      }
    }
  }

  return array;
}
console.log(sortAsc(nums));
