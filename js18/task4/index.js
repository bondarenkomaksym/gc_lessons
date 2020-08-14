// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input: function
//output: arr

"use strict";

function saveCalls(innerfunc) {
  //создаётся массив calls с аргументами с которыми вызвана withMemory
  withMemory.calls = [];
  function withMemory() {
    withMemory.call.push([...arguments]);
    return innerfunc.call(this, arguments);
  }
  return withMemory;
}

export { saveCalls };
