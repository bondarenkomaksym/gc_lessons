// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: strings
//output:

"use strict";

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    let users = [];
  }
  get users() {
    return this._users;
  }
  get UsersNames() {
    return this.users.map((user) => user._name);
  }
  get UsersIds() {
    return this.users.map((user) => user._id);
  }
  get UserNameById(id) {
    return this.users.map((user) => {
      return user.name.includes(id);
    });
  }
}

export { User };
