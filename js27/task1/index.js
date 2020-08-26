// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

// localStorage.clear();

localStorage.setItem("hobbies", JSON.stringify({ name: "Bruce" }));
localStorage.setItem("name", JSON.stringify("Bruce"));
localStorage.setItem("age", JSON.stringify(17));

// console.log(localStorage.getItem("hobbies"));

// console.log(JSON.parse(localStorage.getItem("hobbies")));

const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      //если здесь получим ошибку, то значение парсить не нужно - передаём его в catch
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    //значени newValue добавляем в финальный объект
    return { ...acc, [key]: newValue };
  }, {});
};

console.log(getLocalStorageData());

export { getLocalStorageData };
