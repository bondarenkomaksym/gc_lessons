// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";
/* здесь мы создаем промис, который резолвит объект { name: 'Tom', age: 17 } через 1 секунду */
const userDataPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ name: "Tom", age: 17 });
  }, 1000);
});
// console.log(userDataPromise);
/*
 * Выведите в консоль переменную userDataPromise
 * Ответьте себе на вопрос, какой тип данных имеет переменная userDataPromise?
 */

/* ...code here */
// userDataPromise.then((data) => console.log(data));
console.log(userDataPromise);
/*
 * Выведите в консоль переменную userData в обработчике промиса
 * Ответьте себе на вопрос, что находится в переменной userData?
 */
userDataPromise.then(function onSuccess(userData) {
  /* ...code here */
  console.log(userData);
});

/*
 * подпишитесь на успешное выполнение промиса userDataPromise
 * используйте метод .then
 * в обработчике промиса (ф-ция внутри .then() ) выведите в консоль строку 'My name is Tom. I am 17 years old'
 * Tom и 17 достаньте с данных, которые приходят в ф-цию onSuccess
 */

userDataPromise.then(function onSuccess(userData) {
  /* ...code here */
  console.log(`My name is ${userData.name}. I am ${userData.age} years old`);
});
