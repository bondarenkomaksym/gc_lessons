//input: none
//output: object

// "use strict";
const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  timerId: null, //переменная для хранения занчения из setInterval
  // startTimer() {
  //   const adder = function () {
  //     this.secondsPassed += 1;
  //     console.log(this);
  //   };
  //   const adderBind = adder.bind(this); для закрепления контекста

  //   setInterval(adderBind, 1000);
  // },

  startTimer() {
    this.timerId = setInterval(() => {
      console.log(this);
      this.secondsPassed += 1;
      if (this.secondsPassed === 10) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },

  getTime() {},
  stopTimer() {
    console.log("stop");
    clearInterval(this.timerId);
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

// timer.startTimer();
// timer.stopTimer();

// setTimeout(() => {
//   console.log(" + 1 second");
// }, 1000);

// setInterval(() => {
//   console.log(" + 1 second");
// }, 1000);

//loose context example
// const user = {
//   name: "Tom",
//   run() {
//     console.log(this);
//   },
// };
// user.run();

// const func = user.run;
// console.log(func); //получаем только функцию run() без имени в объекте
// func();
