// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

const servers = [
  "https://server.com/us",
  "https://server.com/eu",
  "https://server.com/au",
];

const getRandomNumber = (from, to) => from + Math.random() * (to - from);

const request = (url) =>
  new Promise((resolve) => {
    const randomDelay = getRandomNumber(1000, 3000);
    setTimeout(() => {
      resolve({
        userData: {
          name: "Tom",
          age: 17,
        },
        source: url,
      });
    }, randomDelay);
  });

export const getUserASAP = (userId) => {
  //к каждому элементы массива добавляем путь /users/ и userId
  const userUrls = servers.map((serverUrl) => `${serverUrl}/users/${userId}`);
  // console.log(userUrls);
  //создаём запросы на все серверы и получаем массив промисов
  const requests = userUrls.map((userUrl) => request(userUrl));
  // console.log(requests);
  return Promise.race(requests);
};

getUserASAP("user-id-1").then((res) => console.log(res));
