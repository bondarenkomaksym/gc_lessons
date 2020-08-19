//bind - input: obj, ....arg1....
//bind - output: func

"use strict";
function printMessage(age, city) {
  console.log(this);
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

printMessage.bind(user, 25, "Kyiv")();

//bind - input: func, obj, ....arg1....
//bind - output: func
const myBind = (func, context, ...args) => {};

// myBind(printMessage, user, 25, "Kyiv")();
