// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

export function createLogger() {
  let memory = [];
  function getRecords(type) {
    if (type !== undefined) {
      return memory
        .filter((el) => el.type === type)
        .sort((a, b) => b.dateTime - a.dateTime);
    } else {
      return memory.sort((a, b) => b.dateTime - a.dateTime);
    }
  }

  function warn(elem) {
    memory.push({
      message: elem,
      dateTime: new Date(),
      type: "warn",
    });
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
}
// const logger = createLogger();
// logger.warn("User try to restricted page");
// logger.error("Unexpected error on the site");
// logger.log("User logged in");
// logger.log("User logged out");
// console.log(logger.getRecords());
// console.log(logger.getRecords("log"));
// console.log(logger.getRecords("warn"));
// console.log(logger.getRecords("error"));
