// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

const pinger = (num, period) => {
  let i = num;
  //чтобы первый вывод сообщения был сразу после запуска функции
  console.log("Ping");
  const interval = setInterval(() => {
    if (--i > 0) {
      console.log("Ping");
    } else {
      clearInterval(interval);
    }
  }, period);
  // console.log(interval);
  //через необходимое количество вызовов запускаем функцию останова
  // setTimeout(() => {
  //   clearInterval(interval);
  // }, num * period);
};

// pinger(5, 1000);

export { pinger };
