// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";
const tasks = [
  { id: 1, text: "Buy milk", done: false },
  { id: 2, text: "Pick up Tom from airport", done: false },
  { id: 3, text: "Visit party", done: false },
  { id: 4, text: "Visit doctor", done: true },
  { id: 5, text: "Buy meat", done: true },
];

const renderListItems = (listItems) => {
  //выбор листа в котором создаём элементы "li"
  const listElement = document.querySelector(".list");
  //через map, на каждой итерации создаём "li", назначаем класс и добавляем id
  const listItemsElems = listItems
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      listItemElem.dataset.id = id;
      //если дело сделано, добавляем класс на элемент
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      //добавляем каждому элементу checkbox
      const checkbox = document.createElement("input");
      //каждому checkbox-элементу нужно задать тип атрибута "checkbox"
      checkbox.setAttribute("type", "checkbox");
      //checkbox-элемент должен считывать из tasks свойство done и установить значение черз свойство элемента "checked"
      checkbox.checked = done;
      //в checkbox назначаем класс
      checkbox.classList.add("list__item-checkbox");
      //в каждый сформированный элемент списка добавляем checkbox и текст
      listItemElem.append(checkbox, text);
      return listItemElem;
    });
  //массив созданных элементов вставляем в ".list"
  listElement.append(...listItemsElems);
};
renderListItems(tasks);
//добавляем новое задание после ввода в поле и нажатия на кнопку Create
const addTask = (event) => {
  const inputEl = document.querySelector(".task-input");
  const newTextInput = inputEl.value;
  if (!newTextInput) return;

  tasks.push({
    //добавляем в элемент новый id относительно длины списка
    id: Number(`${tasks.length + 1}`),
    text: inputEl.value,
    done: false,
  });
  //в консоли поставить дебаггер и проверить добавление нового элемента в массив tasks
  renderListItems(tasks);
};

const createButton = document.querySelector(".create-task-btn");
createButton.addEventListener("click", addTask);
