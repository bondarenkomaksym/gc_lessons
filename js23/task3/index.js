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

//выбор листа в котором создаём элементы "li"
const listElement = document.querySelector(".list");

const renderListItems = (listItems) => {
  //перед добавлением задачи обновляем весь список
  listElement.innerHTML = "";

  //через map, на каждой итерации создаём "li", назначаем класс и добавляем id
  const listItemsElems = listItems
    .sort((a, b) => a.done - b.done)
    .map((task) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      //добавляем каждому элементу checkbox
      const checkbox = document.createElement("input");
      //каждому checkbox-элементу нужно задать тип атрибута "checkbox"
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("data-id", task.id);
      //checkbox-элемент должен считывать из tasks свойство done и установить значение черз свойство элемента "checked"
      checkbox.checked = task.done;
      //в checkbox назначаем класс
      checkbox.classList.add("list__item-checkbox");
      //если дело сделано, добавляем класс на элемент
      if (task.done) {
        listItemElem.classList.add("list__item_done");
      }

      //в каждый сформированный элемент списка добавляем checkbox и текст
      listItemElem.append(checkbox, task.text);
      return listItemElem;
    });

  //массив созданных элементов вставляем в ".list"
  listElement.append(...listItemsElems);
};
renderListItems(tasks);

//при клике на checkbox изменить состояние элемента
const elementStatus = (event) => {
  const checkboxChecked = event.target.classList.contains(
    "list__item-checkbox"
  );
  if (!checkboxChecked) {
    return;
  }
  const taskChecked = tasks.find((el) => el.id === event.target.dataset.id);
  console.log(taskChecked);
  taskChecked.done = event.target.checked;
  renderListItems(tasks);
};
listElement.addEventListener("click", elementStatus);

//добавляем новое задание после ввода в поле и нажатия на кнопку Create
const addTask = () => {
  const inputEl = document.querySelector(".task-input");
  //если поле пустое - не добавляем задачу
  if (inputEl.value === "") return;
  tasks.push({
    //добавляем в элемент новый id относительно длины списка
    id: Number(`${tasks.length + 1}`),
    text: inputEl.value,
    done: false,
  });
  //в консоли поставить дебаггер и проверить добавление нового элемента в массив tasks
  inputEl.value = "";
  renderListItems(tasks);
};

const createButton = document.querySelector(".create-task-btn");
createButton.addEventListener("click", addTask);
