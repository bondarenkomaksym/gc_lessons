// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: massive, boolean
//output: massive sorted by name

"use strict";

let contacts = [
  { name: "Bob", phoneNumber: "12345" },
  { name: "Tom", phoneNumber: "65654" },
  { name: "Alex", phoneNumber: "989898" },
];

function sortContacts(contacts, isAscending) {
  if (!Array.isArray(contacts)) {
    return null;
  }

  const sorted = contacts.sort((a, b) => {
    if (isAscending === true) {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
  return sorted;
}

console.log(sortContacts(contacts, true));
