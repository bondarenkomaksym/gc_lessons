// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

const counterElement = document.querySelector(".counter");
const counterValueElem = document.querySelector(".counter__value");
//
const onCounterChange = (e) => {
  //проверяем нужный класс у элемента по которому кликнули
  const isButton = e.target.classList.contains("counter__button");
  //если это не кнопка - выходим с обработчика
  if (!isButton) {
    return;
  }
  //определяем кнопку, по которой кликнули, через атрибут data-action,
  // на таргет-элементе у свойства dataset считываем атрибут data-action
  const action = e.target.dataset.action;
  //считываем старое значение и приводим к числу
  const oldValue = Number(counterValueElem.textContent);
  //записываем новое значение в зависимости от кнопки
  const newValue = action === "decrease" ? oldValue - 1 : oldValue + 1;
  //переносим новое значение в localStorage
  localStorage.setItem("counterValue", newValue);
  //записываем новое значение в DOM элемент
  counterValueElem.textContent = newValue;
};
//обработчик клика по кнопкам
counterElement.addEventListener("click", onCounterChange);

const onStorageChange = (e) => {
  //получаем значение собития по newValue
  counterValueElem.textContent = e.newValue;
};
//событие storage передаёт изменения для всех новых вкладок
window.addEventListener("storage", onStorageChange);
//сохранение значение при перезагрузке вкладки
const onDocumentLoaded = () => {
  counterValueElem.textContent = localStorage.getItem("counterValue") || 0;
};
document.addEventListener("DOMContetnLoaded", onDocumentLoaded);
