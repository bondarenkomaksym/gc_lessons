// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

//класс - шаблон для создания объектов
"use strict";

class Sportsman {
  constructor(name) {
    // console.log("constructor", name);
    this.name = name;
  }
  // test() {
  //   console.log(this);
  // }
  run() {
    console.log(`${this.name} is runing`);
  }
}

class Swimmer extends Sportsman {
  constructor(name, style) {
    super(name);
    // console.log("constructor Swimmer", name);
    this.style = style;
  }

  // test() {
  //   console.log(this);
  //   //this здесь два класса - родительский и данный
  // }

  swim() {
    console.log(`${this.name} is swimming ${this.style}`);
  }
}
// const sportsman = new Sportsman("John");
// sportsman.run();
// console.log(sportsman);
// const sportsman1 = new Sportsman("Denis");
// sportsman1.run();

const swimmer1 = new Swimmer("John", "testswim");
//после создания ПУСТОГО объекта вызывается конструктор
// console.log(swimmer1);
// swimmer1.test();
swimmer1.swim();

// sportsman.swim();
export { Sportsman, Swimmer };
