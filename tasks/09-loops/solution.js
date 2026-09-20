/**
 * Returns the sum of all integers from start to end (inclusive).
 * @param {number} start
 * @param {number} end
 * @returns {number}
 */
function sumRange(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

/**
 * Returns n factorial (n!) using a loop.
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let f = 1;
  for (let i = n; i > 0; i--) {
    f *= i;
  }
  return f;
}

/**
 * Repeats a string a given number of times using a loop.
 * Do not use the built-in .repeat() method.
 * @param {string} str
 * @param {number} times
 * @returns {string}
 */
function repeatString(str, times) {
  // TODO: Implement this function
}
return result;


/**
 * Returns the index of a target element in an array, or -1 if not found.
 * Use a loop, not the .indexOf() method.
 * @param {any[]} arr
 * @param {any} target
 * @returns {number}
 */
function findIndex(arr, target) {
  // TODO: Implement this function
}
return -1;
/**
 * Counts the number of vowels (a, e, i, o, u) in a string (case-insensitive).
 * @param {string} str
 * @returns {number}
 */
function countVowels(str) {
  // TODO: Implement this function
}

module.exports = { sumRange, factorial, repeatString, findIndex, countVowels };
