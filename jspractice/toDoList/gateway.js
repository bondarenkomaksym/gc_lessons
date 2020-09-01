import { tasks } from "./storage.js";
import { renderList } from "./render.js";

const inputElem = document.querySelector(".task-input");

export const updateTask = (event) => {
  // console.log(tasks);
  const clicked = event.target;
  if (clicked.tagName !== "INPUT") {
    return;
  }
  // debugger;
  const taskById = tasks.find((elem) => elem.id == clicked.dataset.id);
  taskById.done = !taskById.done;
  taskById.doneDate = taskById.done ? new Date() : null;
  //проверяем даты выполнено/невыполнено в консоли
  // console.log(tasks);
  renderList(tasks);
};

export const createTask = () => {
  if (inputElem.value == "") {
    return;
  }
  tasks.push({
    id: tasks.length + 1,
    text: inputElem.value,
    done: false,
    createDate: new Date(),
    doneDate: null,
  });
  inputElem.value = "";

  renderList(tasks);
};
