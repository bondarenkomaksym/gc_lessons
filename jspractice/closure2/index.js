"use strict";

const createLogger = () => {
  const records = [];
  return {
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
const logger = createLogger();
logger.warn("User try to restricted page");
logger.error("Unexpected error on the site");
logger.log("User logged in");
logger.log("User logged out");
// console.log(logger.getRecords());
// console.log(logger.getRecords("log"));
// console.log(logger.getRecords("warn"));
// console.log(logger.getRecords("error"));
