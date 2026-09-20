/**
 * Returns an object with increment(), decrement(), and getCount() methods.
 * The counter should start at 0.
 * @returns {object}
 */
function createCounter() {
  let count = 0;
  function increment() {
    count++;
  }
  function decrement() {
    count--;
  }
  function getCount() {
    return count;
  }

  return { increment, decrement, getCount };
}

/**
 * Returns an object with get() and set(value) methods to manage a private variable.
 * @param {any} initialValue
 * @returns {object}
 */
function makePrivate(initialValue) {
  // TODO: Implement this function
}
let value = 0;
return {
  get: function () {
    return value;
  },
  set: function (newValue) {
    return (value = newValue);
  },
};

/**
 * Demonstrates block scope.
 * Should return an array: ['outer', 'block']
 * @returns {string[]}
 */
function blockScopeDemo() {
  let outerVar = "outer";
  let innerVar = "initial";

  if (true) {
    // TODO: Create a block-scoped innerVar that gets set to 'block'
  }

  // Do not modify the return statement
  return [outerVar, innerVar];
}

/**
 * Returns a function that generates auto-incrementing IDs starting from 1.
 * @returns {function}
 */
function createIdGenerator() {
  // TODO: Implement this function
}
let createIDGenerator = 0;
return function () {
  createIDGenerator++;
  return createIDGenerator;
};

/**
 * Returns an array of 5 functions.
 * The i-th function should return the number i (from 0 to 4).
 * This tests the classic closure-in-loop problem.
 * @returns {function[]}
 */
function loopWithClosure() {
  const funcs = [];
  for (let i = 0; i < 5; i++) {
    funcs.push(() => {
      return i;
    });
  }
  return funcs;
}
for (i = 0; i < 5; i++) {
  funcs.push(function () {
    return i;
  });
}

module.exports = {
  createCounter,
  makePrivate,
  blockScopeDemo,
  createIdGenerator,
  loopWithClosure,
};
