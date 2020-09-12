"use strict";

// const allstudents = ["Ann", "Tom", "Jane", "Kate"];
// const failed = ["Tom", "Jane"];
// const getMessagesForBestStudents = (allstudents, failed) => {
//   const passed = allstudents.filter((name) => failed.indexOf(name) === -1);
//   return passed;
// };
// console.log(getMessagesForBestStudents(allstudents, failed));

// const allstudents = ["Ann", "Tom", "Jane", "Kate"];
// const failed = ["Tom", "Jane"];
// const getMessagesForBestStudents = (allstudents, failed) => {
//   const passed = allstudents.filter((name) => !failed.includes(name));
//   return passed.map((name) => "Good job, " + name);
// };
// console.log(getMessagesForBestStudents(allstudents, failed));

const allstudents = ["Ann", "Tom", "Jane", "Kate"];
const failed = ["Tom", "Jane"];

const getMessagesForBestStudents = (allstudents, failed) =>
  allstudents
    .filter((name) => !failed.includes(name))
    .map((name) => "Good job, " + name);

console.log(getMessagesForBestStudents(allstudents, failed));
