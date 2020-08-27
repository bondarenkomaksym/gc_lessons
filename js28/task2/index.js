// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";
//рекурсия - в теле функции вызываем саму эту функцию

// const favorites = ["id-2"];
// const tree = {
//   id: "id-1",
//   name: "Products",
//   nodes: [
//     {
//       id: "id-2",
//       name: "Food",
//       nodes: [],
//     },
//   ],
// };

export const markFavorites = (tree, favorites) => {
  //проверяем наличие id в массиве
  const isFavorite = favorites.includes(tree.id);
  //возвращаем из метода новый узел с флагом favorite
  return {
    //разбираем начальный объект спред оператором
    ...tree,
    isFavorite,
    //в новом узле создаём новое поддерево, проходим по всем узлам и вызываем функцию markFavorites
    nodes: tree.nodes.map((childNode) => markFavorites(childNode, favorites)),
  };
};
const result = markFavorites(tree, favorites);
// console.log(result);
