// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: new Date()
//output: string

"use strict";
// const dateStart = new Date("7/13/2010");
// const dateEnd = new Date("12/15/2010");

const getDiff = (dateStart, dateEnd) => {
  //переменная с первой итерацией
  const difference = new Date(dateStart) - new Date(dateEnd);

  //условие для случая когда первая дата меньше второй
  if (dateStart < dateEnd) difference = new Date(dateEnd) - new Date(dateStart);
  //округление до дней, часов...
  const diffDay = Math.floor(difference / (1000 * 60 * 60 * 24));
  const diffHour = Math.floor((difference / 1000 / 60 / 60) % 24);
  const diffMin = Math.floor((difference / 1000 / 60) % 60);
  const diffSec = Math.floor((difference / 1000) % 60);

  return `${diffDay}d ${diffHour}h ${diffMin}m ${diffSec}s`;

  // return (dateStart - dateEnd) / (60 * 60 * 24 * 1000);
};
// console.log(getDiff(dateStart, dateEnd));

export { getDiff };
