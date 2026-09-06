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
  let result = "";
  for (let i = 1; i <= times; i++) {
    result += str;
  }
  return result;
}

/**
 * Returns the index of a target element in an array, or -1 if not found.
 * Use a loop, not the .indexOf() method.
 * @param {any[]} arr
 * @param {any} target
 * @returns {number}
 */
function findIndex(arr, target) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

/**
 * Counts the number of vowels (a, e, i, o, u) in a string (case-insensitive).
 * @param {string} str
 * @returns {number}
 */
function countVowels(str) {
  let string = str.toLowerCase().split("");
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i <= string.length - 1; i++) {
    for (let j = 0; j <= vowels.length; j++) {
      if (string[i] === vowels[j]) {
        count++;
      }
    }
  }
  return count;
}
module.exports = { sumRange, factorial, repeatString, findIndex, countVowels };
