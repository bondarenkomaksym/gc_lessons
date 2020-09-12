const listElem = document.querySelector(".repo-list");

//очистка списка от старых элементов перед запросом новых
export const cleanReposList = () => {
  listElem.innerHTML = "";
};
//получаем список всех репо пользователя
export const renderRepos = (reposList) => {
  const reposListElems = reposList.map(({ name }) => {
    //создаём элемент по названию репо
    const listsElem = document.createElement("li");
    //присваиваем класс новому элементу
    listsElem.classList.add("repo-list__item");
    //добавляем текст в элемент
    listsElem.textContent = name;

    return listsElem;
  });
  cleanReposList();
  //массив элементов вставим в новые элементы через деструктуризацию
  listElem.append(...reposListElems);
};
