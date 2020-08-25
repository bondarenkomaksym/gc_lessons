// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: arr
//output: string

"use strict";
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const futureDay = new Date(date).setDate(day + days);
  return weekDays[new Date(futureDay).getDay()];
};
