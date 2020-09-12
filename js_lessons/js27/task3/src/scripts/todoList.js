import { onCreateTask } from "./createTask.js";
import { onToggleTask } from "./updateTask.js";

//выбор списка в котором создаём элементы "li"
// const listElement = document.querySelector(".list");

export const initToDoListHandlers = () => {
  //клик по createButton
  const createButton = document.querySelector(".create-task-btn");
  createButton.addEventListener("click", onCreateTask);
  //клик по чекбоксу
  const listElement = document.querySelector(".list");
  listElement.addEventListener("click", onToggleTask);
};
