/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function doubleAll(arr) {
  // TODO: use .map() to double every number
}

/**
 * @param {Array<{name: string, age: number}>} people
 * @returns {Array<{name: string, age: number}>}
 */
function getAdults(people) {
  // TODO: use .filter() to return those with age >= 18
}

/**
 * @param {Array<{name: string, price: number}>} items
 * @returns {number}
 */
function totalPrice(items) {
  // TODO: use .reduce() to sum all prices
}

/**
 * @param {Array<{name: string}>} people
 * @param {string} name
 * @returns {Object|undefined}
 */
function findByName(people, name) {
  // TODO: use .find() to find first person with matching name
}

/**
 * @param {number[]} arr
 * @returns {boolean}
 */
function allPositive(arr) {
  // TODO: use .every() to check if all numbers are positive
}

/**
 * @param {Array<{name: string, age: number}>} people
 * @returns {Array<{name: string, age: number}>}
 */
function sortByAge(people) {
  // TODO: use .sort() to sort ascending by age. Return NEW sorted array.
}

module.exports = { doubleAll, getAdults, totalPrice, findByName, allPositive, sortByAge };
