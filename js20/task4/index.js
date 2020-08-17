// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

class Order {
  constructor(price, city, type) {
    this.id = `${Math.round(Math.random() * 100)}`;
    this.price = price;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = null;
    this.city = city;
    this.type = type;
  }
  checkPrice() {
    return this.price > 1000 ? true : false;
  }
  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }
  isValidType() {
    return this.type === "Buy" || this.type === "Sell" ? true : false;
  }
}

const order = new Order(800, "Berlin", "Sell");
console.log(order.checkPrice());
console.log(order.isValidType());
order.confirmOrder();
console.log(order);

export { Order };
