// const num = [5, 6, 8, 11, 9, 4];

function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return (newArray = [...arr]);
}
