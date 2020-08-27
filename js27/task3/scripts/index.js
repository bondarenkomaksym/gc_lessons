import { setItem, getItem } from "./storage.js";
import { renderTasks } from "./render.js";
import { onStatusTodoChange } from "./changeTask.js";
import { onCreateTask } from "./createTask.js";

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
});

const onStorageChange = (e) => {
  if (e.key === "tasksList") {
    renderTasks();
  }
};
window.addEventListener("storage", onStorageChange);
