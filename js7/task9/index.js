"use strict";

const withdraw = (clients, balances, client, amount) => clients.indexOf(client);

console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50));
