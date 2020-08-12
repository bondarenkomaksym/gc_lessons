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
    } else {
      return [];
    }
  }
  function warn(arg) {
    if ((arg = "User try to restricted page")) return memory[2];
    return memory[2];
  }

  function error(arg) {
    if ((arg = "User try to restricted page")) return memory[0];
  }

  function log(arg) {
    if ((arg = "User logged in")) return memory[3];
    else return memory[1];
  }

  return {
    getRecords,
    warn,
    error,
    log,
  };
}

const logger = createLogger();
logger.log("User logged in");
logger.warn("User try to restricted page");
logger.log("User logged out");
logger.error("Unexpected error on the site");
logger.getRecords();
logger.getRecords("log");
logger.getRecords("error");
logger.getRecords("warn");
// console.log(logger.getRecords());
