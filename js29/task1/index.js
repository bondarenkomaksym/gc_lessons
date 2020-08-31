// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";
const addImage = (imgSrc, callback) => {
  //создаём елемент картинки
  const imgElem = document.createElement("img");
  //назначаем атрибуты
  imgElem.setAttribute("alt", "My Photo");
  //указываем правильный путь для картинки
  imgElem.src = imgSrc;
  //методом append добавляем картинку в элемент ".page"
  const containerElement = document.querySelector(".page");
  containerElement.append(imgElem);
  //описываем функцию onImageLoaded 222
  const onImageLoaded = () => {
    const { width, height } = imgElem;
    callback(null, { width, height });
  };
  //подписываемся на событие загрузки картинки 1111
  imgElem.addEventListener("load", onImageLoaded);

  //сообщение об ошибке
  imgElem.addEventListener("error", () => callback("Image load is failed"));

  // console.log({ width, height });
};

// const imgSrc =
//   "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg";

//callack example
const onImageLoaded = (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const { width, height } = data;

  const sizeElem = document.querySelector(".image-size");
  sizeElem.textContent = `${width} x ${height}`;
};

//test call
// addImage(
//   "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg",
//   onImageLoaded
// );
//картинка загружается асинхронно!!!!
export { addImage };
