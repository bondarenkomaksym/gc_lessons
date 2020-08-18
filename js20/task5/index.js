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
    this._users = Object.freeze(users);
  }
  get users() {
    return this._users;
  }
  getUserNames() {
    return this._users.map((el) => el._name);
  }
  getUserIds() {
    return this._users.map((el) => el._id);
  }
  getUserNameById(id) {
    return this.users.map((user) => {
      return user.name.includes(id);
    });
  }
}

export { User, UserRepository };
