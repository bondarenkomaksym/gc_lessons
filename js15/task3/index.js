// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

export function createLogger() {
  let memory = [
    {
      message: "Unexpected error on the site",
      type: "error",
      dateTime: new Date(),
    },
    { message: "User logged out", type: "log", dateTime: new Date() },
    {
      message: "User try to restricted page",
      type: "warn",
      dateTime: new Date(),
    },
    { message: "User logged in", type: "log", dateTime: new Date() },
  ];

  function getRecords() {
    if (arguments.length === 0) {
      return memory;
    }
  }
  // console.log(getRecords());
  function warn() {
    return memory[2];
  }

  function error() {
    return memory[0];
  }

  function log() {
    return memory[(1, 3)];
  }

  return {
    getRecords,
    warn,
    error,
    log,
  };
}

const logger = createLogger();
// logger.log("User logged out");
logger.getRecords();
// logger.getRecords("log");
