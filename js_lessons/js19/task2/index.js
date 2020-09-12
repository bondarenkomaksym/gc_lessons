// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

const vehicle = {
  name: "Argo",
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  name: "Argo",
  hasWheels: false,
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    ship.move();
  },
  stopMachine() {
    console.log(`${this.name} lifting anchor down`);
    ship.stop();
  },
};

Object.setPrototypeOf(ship, vehicle);

function getOwnProps(ship) {
  const arrProps = [];
  for (let prop in ship) {
    //возвращаем только свойства без методов...
    if (ship.hasOwnProperty(prop) && typeof ship[prop] !== "function") {
      arrProps.push(prop);
    }
  }
  return arrProps;
}

// console.log(getOwnProps(ship));

export { getOwnProps };
