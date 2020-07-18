const nums = [2, 4, 6, 999];

function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return Math.min(...arr) + Math.max(...arr) > 1000 ? true : false;
}
console.log(checker(nums));
