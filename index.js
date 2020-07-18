function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  return new Set(array).size;
}
