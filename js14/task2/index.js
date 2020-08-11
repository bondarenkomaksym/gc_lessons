// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: strings
//output:

"use strict";

export default function createMessenger() {
  let message = "Just learn it";
  let sender = "Gromcode";
  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }
  function setMessage(text) {
    message = text;
  }
  function setSender(text) {
    sender = text;
  }
  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messenger = createMessenger();

messenger.sendMessage("Bob");
messenger.setMessage("Good job");
messenger.sendMessage("Bob");
messenger.setMessage("Just learn it");
messenger.sendMessage("Bob");
messenger.setSender("Gromcode");
