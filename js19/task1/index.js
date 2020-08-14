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
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
  },
  stopMachine() {
    console.log(`${this.name} lifting anchor down`);
  },
  __proto__: vehicle,
};
// vehicle.move();
// ship.move();
// ship.startMachine();
// console.log(vehicle);
// console.log(ship);

export { vehicle, ship };
