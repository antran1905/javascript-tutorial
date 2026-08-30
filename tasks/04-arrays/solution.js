/**
 * Returns the first element of an array.
 * @param {Array} arr - The input array.
 * @returns {*} The first element.
 */
function getFirst(arr) {
  // TODO: return first element
}

/**
 * Returns the last element of an array.
 * @param {Array} arr - The input array.
 * @returns {*} The last element.
 */
function getLast(arr) {
  // TODO: return last element
}

/**
 * Returns a NEW array without the first element.
 * Does not mutate the original array.
 * @param {Array} arr - The input array.
 * @returns {Array} The new array.
 */
function removeFirst(arr) {
  // TODO: return NEW array without first element (don't mutate original)
}

/**
 * Returns a NEW array with a value inserted at a specific index.
 * @param {Array} arr - The original array.
 * @param {number} index - The index to insert at.
 * @param {*} value - The value to insert.
 * @returns {Array} The new array.
 */
function insertAt(arr, index, value) {
  // TODO: return NEW array with value inserted at index
}

/**
 * Returns a NEW array with duplicates removed.
 * @param {Array} arr - The input array.
 * @returns {Array} The array with unique values.
 */
function unique(arr) {
  // TODO: return NEW array with duplicates removed: [1,2,2,3,3] -> [1,2,3]
}

module.exports = {
  getFirst,
  getLast,
  removeFirst,
  insertAt,
  unique
};
