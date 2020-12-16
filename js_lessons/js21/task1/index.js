// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";
const tasks = [
  { text: "Buy milk", done: true },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const renderListItems = (listItems) => {
  //находим корневой элемент
  const listElement = document.querySelector(".list");
  //функция сортирует и отрисовывает элем-ты списка, добавляет им класс
  const listItemsElems = listItems
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      //создаём элемент списка в виде "li"
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");

      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      //добавляем чекбокс в виде инпута
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.checked = done;

      checkbox.classList.add("list__item-checkbox");
      listItemElem.append(checkbox, text);
      return listItemElem;
    });
  listElement.append(...listItemsElems);
};

renderListItems(tasks);
