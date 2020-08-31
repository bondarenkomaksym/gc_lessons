// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

const shmoment = (date) => {
  const result = new Date(date);
  // console.log(result);
  //объект с функциями, вызов по первому аргументу в методе
  const funcs = {
    years: (value) => result.setFullYear(result.getFullYear() + value),
    months: (value) => result.setMonth(result.getMonth() + value),
    days: (value) => result.setDate(result.getDate() + value),
    hours: (value) => result.setHours(result.getHours() + value),
    minutes: (value) => result.setMinutes(result.getMinutes() + value),
    seconds: (value) => result.setSeconds(result.getSeconds() + value),
    milliseconds: (value) =>
      result.setMilliseconds(result.getMilliseconds() + value),
  };

  return {
    add(timeSlot, value) {
      // console.log("добавление", timeSlot, value);
      funcs[timeSlot](value);
      // console.log(new Date(result.setFullYear(result.getFullYear() + value)));
      return this;
    },
    subtract(timeSlot, value) {
      // console.log("вычитание", timeSlot, value);
      funcs[timeSlot](-value);
      return this;
    },
    result() {
      return new Date(result);
    },
  };
};
// const result = shmoment(new Date(2020, 7, 28, 15, 48, 10))
const result = shmoment(new Date(2020, 7, 28, 15, 48, 10))
  .add("minutes", 8)
  .subtract("years", 33)
  .result();

console.log(result);

// export { shmoment };
