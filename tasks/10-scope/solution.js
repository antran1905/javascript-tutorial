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
  let value = initialValue;
  function get() {
    return value;
  }

  function set(newValue) {
    value = newValue;
  }

  return { get, set };
}

/**
 * Demonstrates block scope.
 * Should return an array: ['outer', 'block']
 * @returns {string[]}
 */
function blockScopeDemo() {
  let outerVar = "outer";
  let innerVar = "initial";

  if (true) {
    innerVar = "block";
  }

  // Do not modify the return statement
  return [outerVar, innerVar];
}

/**
 * Returns a function that generates auto-incrementing IDs starting from 1.
 * @returns {function}
 */
function createIdGenerator() {
  let id = 1;

  function incrementIDs() {
    let result = id;
    id++;

    return result;
  }

  return incrementIDs;
}

/**
 * Returns an array of 5 functions.
 * The i-th function should return the number i (from 0 to 4).
 * This tests the classic closure-in-loop problem.
 * @returns {function[]}
 */
function loopWithClosure() {
  const funcs = [];
  for (let i = 0; i < 5; i++) {
    funcs.push(function () {
      return i;
    });
  }
  return funcs;
}

module.exports = {
  createCounter,
  makePrivate,
  blockScopeDemo,
  createIdGenerator,
  loopWithClosure,
};
