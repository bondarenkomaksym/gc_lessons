//bind - input: obj, ....arg1....
//bind - output: func

"use strict";
function printMessage(age, city) {
  // console.log(this);
  console.log(
    `Hello ${this.name}, email ${this.email},
     age: ${age}, city: ${city}`
  );
}
let user = {
  name: "Alex",
  email: "gmail.com",
};

// const printMessageBind = printMessage.bind(user);
// printMessageBind(25, "Hello");

// const printMessageBind = printMessage.bind(user, 25, "Kyiv");
// printMessageBind();

// printMessage.bind(user, 25, "Kyiv")();

//bind - input: func, obj, ....arg1....
//bind - output: func
// const myBind = (func, context, ...args) => {
//   console.log("step 1");
//   return function () {
//     console.log("step 2");
//     return func.call(context, ...args);
//   };
// };
//step 1
// const printMessageBinded = myBind(printMessage, user, 25, "Kyiv");
//step 2
// printMessageBinded();

// const myBind1 = (func, context, ...args) => {
//   console.log("step 1");
//   //аргументам назначаем новое имя, чтобы не было конфликта с функцией выше
//   return function (...targetArgs) {
//     console.log("step 2");
//     return func.call(context, ...args, ...targetArgs);
//   };
// };
//step 1
// const printMessageBinded1 = myBind1(printMessage, user);
//step 2
// printMessageBinded1(25, "Kyiv");

// const printMessageBinded2 = myBind1(printMessage, user, 25);
// printMessageBinded2("Kyiv");

//NEW func

const mySuperBind = (func, context, ...args) => {
  console.log("step 1");
  return function () {
    console.log("step 2");

    const copyContext = { ...context };
    copyContext.tempFunction = func;

    copyContext.tempFunction(...args);
  };
};

const printMessageBinded3 = mySuperBind(printMessage, user, 50, "Dnipro");

printMessageBinded3();
console.log("step 3");
console.log(user);
