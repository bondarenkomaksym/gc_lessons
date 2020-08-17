// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

class Wallet {
  _balance = 0;
  // если значение установлено по умолчанию, то конструктор не нужен
  // constructor() {
  //   this._balance = 0;
  // }
  getBalance() {
    return this._balance;
  }
  deposit(amount) {
    this._balance += amount;
  }
  withdraw(amount) {
    if (amount > this._balance) {
      console.log("No enough funds");
      return;
    }
    this._balance -= amount;
  }
}

const wallet = new Wallet();
// wallet._balance
console.log(wallet.getBalance());
wallet.deposit(6);
console.log(wallet.getBalance());
wallet.withdraw(4);
console.log(wallet.getBalance());
wallet.withdraw(15);

export { Wallet };
