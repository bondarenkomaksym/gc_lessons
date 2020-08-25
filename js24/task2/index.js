// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: new Date()
//output: string

"use strict";
const dateFormatter = new Intl.DateTimeFormat("en", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});
//в функцию передаём new Date() = (date)
const getGreenwichTime = (date) => dateFormatter.format(date);
// console.log(getGreenwichTime(new Date()));
export { getGreenwichTime };
