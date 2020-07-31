"use strict";

const user = {
  name: "Tom",
  age: 17,
};
user.hobby = "football";
const anotherKey = "married";
user.anotherKey = anotherKey;
user["favourite music"] = "rock";
user.adress = {};
user.adress.country = "Ukraine";
user.adress.building = 17;
console.log(user);
