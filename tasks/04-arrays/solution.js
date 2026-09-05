/**
 * Returns the first element of an array.
 * @param {Array} arr - The input array.
 * @returns {*} The first element.
 */
function getFirst(arr) {
  return arr[0];
}

/**
 * Returns the last element of an array.
 * @param {Array} arr - The input array.
 * @returns {*} The last element.
 */
function getLast(arr) {
  const count = arr.length;
  return arr[count - 1];
}

/**
 * Returns a NEW array without the first element.
 * Does not mutate the original array.
 * @param {Array} arr - The input array.
 * @returns {Array} The new array.
 */
function removeFirst(arr) {
  let result = [...arr];
  result.splice(0, 1);
  return result;
}

/**
 * Returns a NEW array with a value inserted at a specific index.
 * @param {Array} arr - The original array.
 * @param {number} index - The index to insert at.
 * @param {*} value - The value to insert.
 * @returns {Array} The new array.
 */
function insertAt(arr, index, value) {
  let result = [...arr];
  result.splice(index, 0, value);
  return result;
}

/**
 * Returns a NEW array with duplicates removed.
 * @param {Array} arr - The input array.
 * @returns {Array} The array with unique values.
 */
function unique(arr) {
  let newArrays = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    let isDuplicates = false;
    for (let j = 0; j <= newArrays.length - 1; j++) {
      if (arr[i] === newArrays[j]) {
        isDuplicates = true;
        break;
      }
    }
    if (!isDuplicates) {
      newArrays.push(arr[i]);
    }
  }
  return newArrays;
}

module.exports = {
  getFirst,
  getLast,
  removeFirst,
  insertAt,
  unique,
};
