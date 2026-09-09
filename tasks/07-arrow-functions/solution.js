/**
 * Doubles a number.
 * @param {number} n - The number to double.
 * @returns {number} The doubled number.
 */
const double = (n) => {
  return n * 2;
}; // TODO: Implement as arrow function

/**
 * Checks if a number is strictly greater than 0.
 * @param {number} n - The number to check.
 * @returns {boolean} True if positive, false otherwise.
 */
const isPositive = (n) => {
  if (n > 0) {
    return true;
  }
  return false;
};

/**
 * Returns a full name from first and last name.
 * @param {string} first - First name.
 * @param {string} last - Last name.
 * @returns {string} The full name separated by a space.
 */
const getFullName = (first, last) => {
  return first + last;
}; // TODO: Implement as arrow function

/**
 * Filters an array to keep only even numbers.
 * @param {number[]} arr - Array of numbers.
 * @returns {number[]} New array with only even numbers.
 */
const filterEvens = (arr) => {
  let newArrays = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArrays.push(arr[i]);
    }
  }
  return newArrays;
}; // TODO: Implement as arrow function

/**
 * Sorts an array of numbers in descending order.
 * @param {number[]} arr - Array of numbers.
 * @returns {number[]} New sorted array.
 */
const sortDescending = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        result = arr[i];
        arr[i] = arr[j];
        arr[j] = result;
      }
    }
  }
  return arr;
}; // TODO: Implement as arrow function

module.exports = {
  double,
  isPositive,
  getFullName,
  filterEvens,
  sortDescending,
};
