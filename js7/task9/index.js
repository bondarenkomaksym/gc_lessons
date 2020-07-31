"use strict";

const withdraw = (clients, balances, client, amount) => {
  const clientId = clients.indexOf(client);
  const clientBalance = balances[clientId];
  return clientBalance > amount ? clientBalance - amount : -1;
};

console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50));
