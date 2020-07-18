function getSubArray(array, n) {
  if (array == null) return false;
  if (n == null) return array[0];
  return array.slice(0, n);
}
