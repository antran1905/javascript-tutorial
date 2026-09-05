/**
 * Greets a person by name. If no name is provided, greets "World".
 * @param {string} [name="World"] - The name to greet.
 * @returns {string} The greeting string.
 */
function greet(name = "World") {
  return "Hello, " + name + "!";
}

/**
 * Multiplies two numbers.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} The product.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Returns the sum of all passed numbers.
 * @param {...number} numbers - Any number of arguments.
 * @returns {number} The sum.
 */
function sum(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

/**
 * Applies an operation (callback) to two numbers.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @param {function} operation - A function that takes two numbers and returns a result.
 * @returns {number} The result of the operation.
 */
function applyOperation(a, b, operation) {
  return operation(a, b);
}

/**
 * Creates a function that multiplies its argument by a given factor.
 * @param {number} factor - The multiplier factor.
 * @returns {function} A function that takes a number and multiplies it by factor.
 */
function createMultiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

module.exports = { greet, multiply, sum, applyOperation, createMultiplier };
