// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

/* ===> 1 <=== */
const student = {
  name: "Tom",
};

export function sayName() {
  console.log(this.name);
}

// вызовите ф-цию sayName так, чтобы в консоль вывелось имя студента
student.f = sayName;
student.f();

// вызовите ф-цию sayName так, чтобы в консоль вывелось имя 'Bruce' (используйте другой объект)
student.f.call({ name: "Bruce" });

/* ===> 2 <=== */
const company = {
  companyName: "Microsoft",
};

function greeting(firstName, lastName) {
  console.log(
    `Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`
  );
}

// вызовите ф-цию greeting так, чтобы в консоль вывелось
// 'Hello, Bob Marley. Welcome to the Microsoft'
// используйте объект company
company.f = greeting;
company.f(`Bob`, `Marley`);

/* ===> 3 <=== */
const country = {
  countryName: "Ukraine",
  capital: "Kyiv",
};

function getPopulation(population) {
  return `Population in ${this.countryName} is ${population}`;
}

// вызовите ф-цию getPopulation так, чтобы она вернула
// 'Population in Ukraine is 43000'
// 43000 передавайте в виде числа
// используйте объект country
// результат работы ф-ции getPopulation присвойте в переменную и выведите в консоль
// country.f = getPopulation;
const population = getPopulation.call(country, 43000);
console.log(population);

/* ===> 4 <=== */
const transaction = {
  amount: 1200,
  operation: "sell",
  currency: "USD",
  exchange: "NYSE",
  printTransaction() {
    console.log(
      `${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`
    );
  },
};

const anotherTransaction = {
  amount: 400,
  operation: "buy",
  currency: "USD",
  exchange: "NASDAQ",
};

// вызовите метод transaction.printTransaction так, чтобы в консоль вывелось
// '400 USD - buy on NASDAQ'
// используйте объект anotherTransaction как контекст
// const result = transaction.printTransaction({ anotherTransaction: amount });
// result.call();
transaction.printTransaction.bind(anotherTransaction)();
