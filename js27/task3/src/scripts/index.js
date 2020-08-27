import { renderTasks } from "./render.js";
import { initToDoListHandlers } from "./todoList.js";

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  initToDoListHandlers();
});
//синхронизируем значения списка между вкладками
const onStorageChange = (e) => {
  //если в localStorage ключ tasksList, то отрисовываем задачи
  if (e.key === "tasksList") {
    renderTasks();
  }
};
window.addEventListener("storage", onStorageChange);
