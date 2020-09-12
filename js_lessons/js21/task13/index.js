// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

const getSection = (num) => {
  //селектор по атрибуту через []
  const nums = document.querySelector(`span[data-number="${num}"]`);
  // console.log(nums);
  let parent = nums.closest("div");
  // console.log(parent);
  let attributes = parent.getAttribute("data-section");
  // console.log(attributes);
  return attributes;
};
// getSection(4);
export { getSection };
