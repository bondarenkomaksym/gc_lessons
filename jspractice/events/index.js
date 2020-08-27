//input: css-selector (domString)
//output: HTML element / pseudo array(for querySelectorAll)

"use strict";

const btns = document.querySelectorAll(".btn");

// console.log(btns);

btns.forEach((btn) => {
  // const obj = { name: "asdas" };

  btn.addEventListener("click", handleClick);
});
// const handleClick = (event) => {
//   console.log(`"hello", ${this.name}`);
//   console.log(event);
// };
function handleClick(event) {
  // console.log(this);
  // console.log(`"hello", ${this.name}`);
  console.log(event.target.innerText);
}
