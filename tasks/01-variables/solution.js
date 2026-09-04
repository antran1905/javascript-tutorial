/**
 * Returns the greeting string 'Hello, JavaScript!'
 * @returns {string}
 */
function getGreeting() {
  return "Hello, JavaScript!";
}

/**
 * Returns your age as a number.
 * @returns {number}
 */
function getAge() {
  return 25;
}

/**
 * Returns true if you are a student, otherwise false.
 * @returns {boolean}
 */
function isStudent() {
  return true;
}

/**
 * Returns the value null to represent nothing.
 * @returns {null}
 */
function getNothing() {
  return null;
}

/**
 * Returns the type of the given value.
 * @param {*} value - The value to check.
 * @returns {string} The type of the value.
 */
function getTypeOf(value) {
  return typeof value;
}

module.exports = {
  getGreeting,
  getAge,
  isStudent,
  getNothing,
  getTypeOf,
};
