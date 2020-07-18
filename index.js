function sortAsc(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let n = 0; n < arr.length; n++) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const buff = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = buff;
      }
    }
  }

  return arr;
}
