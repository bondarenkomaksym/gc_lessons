//input: none
//output: object

"use strict";

const createLogger = () => {
  const records = [];

  return {
    getRecords(type) {
      //input: string
      //output: array
      //algo
      //1. check if input -> filter ++
      //2. return all records ++
      //3. sort ++

      return (type
        ? records.filter((message) => message.type === type)
        : records
      ).sort((a, b) => b.dateTime - a.dateTime);
      //черновик
      // if (type) {
      //   return records
      //     .filter((message) => message.type === type)
      //     .sort((a, b) => b.dateTime - a.dateTime);
      // } else {
      //   return records.sort((a, b) => b.dateTime - a.dateTime);
      // }
    },
    warn(message) {
      records.push({
        message,
        dateTime: new Date(),
        type: "warn",
      });
    },
    error(message) {
      records.push({
        message,
        dateTime: new Date(),
        type: "error",
      });
    },
    log(message) {
      records.push({
        message,
        dateTime: new Date(),
        type: "log",
      });
    },
  };
};

const logger1 = createLogger();
// console.log(logger1.warn("User try to restricted page"));
// logger.error("Unexpected error on the site");
// logger.log("User logged in");
console.log(logger1);
logger1.warn("User try to restricted page");
logger1.error("er");
logger1.log("User logged in");
console.log(logger1.getRecords());
console.log(logger1.getRecords("error"));
console.log(logger1.getRecords("log"));

const logger2 = createLogger();
