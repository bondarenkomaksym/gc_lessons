// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: string
//output: massive

"use strict";

export function createLogger() {
  let memory = [];

  return {
    getRecords(type) {
      if (type !== undefined) {
        return memory
          .filter((el) => el.type === type)
          .sort((a, b) => b.dateTime - a.dateTime);
      } else {
        return memory.sort((a, b) => b.dateTime - a.dateTime);
      }
    },

    warn(elem) {
      memory.push({
        message: elem,
        dateTime: new Date(),
        type: "warn",
      });
    },
    error(elem) {
      memory.push({
        message: elem,
        dateTime: new Date(),
        type: "error",
      });
    },
    log(elem) {
      memory.push({
        message: elem,
        dateTime: new Date(),
        type: "log",
      });
    },
  };
}

const logger = createLogger();
logger.warn("User try to restricted page");
logger.error("Unexpected error on the site");
logger.log("User logged in");
logger.log("User logged out");
// console.log(logger.getRecords());
// console.log(logger.getRecords("log"));
// console.log(logger.getRecords("warn"));
// console.log(logger.getRecords("error"));
