import { renderTasks } from "./render.js";
import { getItem, setItem } from "./storage.js";

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector(".task-input");

  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }
  taskTitleInputElem.value = "";
  //считываем данные с файла storage.js
  const tasksList = getItem("tasksList") || [];

  const newTasksList = tasksList.concat({
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  });
  //после обработки записываем данные в файл storage.js
  setItem("tasksList", newTasksList);

  renderTasks();
};
