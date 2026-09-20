/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function doubleAll(arr) {
  const result = arr.map((number) => number * 2);
  return result;
}

/**
 * @param {Array<{name: string, age: number}>} people
 * @returns {Array<{name: string, age: number}>}
 */
function getAdults(people) {
  const result = people.filter((person) => person.age >= 18);
  return result;
}

/**
 * @param {Array<{name: string, price: number}>} items
 * @returns {number}
 */
function totalPrice(items) {
  const result = items.reduce((sum, numbers) => sum + numbers.price);
  return result;
}

/**
 * @param {Array<{name: string}>} people
 * @param {string} name
 * @returns {Object|undefined}
 */
function findByName(people, name) {
  const result = people.find((n) => n.name === name);
  return result;
}

/**
 * @param {number[]} arr
 * @returns {boolean}
 */
function allPositive(arr) {
  // TODO: use .every() to check if all numbers are positive
}
const allPos = arr.every((n) => n > 0);

/**
 * @param {Array<{name: string, age: number}>} people
 * @returns {Array<{name: string, age: number}>}
 */
function sortByAge(people) {
  // TODO: use .sort() to sort ascending by age. Return NEW sorted array.
}
const SortBA = [...people].sort((a, b) => a.age - b.age);

module.exports = {
  doubleAll,
  getAdults,
  totalPrice,
  findByName,
  allPositive,
  sortByAge,
};
