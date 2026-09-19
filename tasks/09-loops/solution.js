/**
 * Returns the sum of all integers from start to end (inclusive).
 * @param {number} start
 * @param {number} end
 * @returns {number}
 */
function sumRange(start, end) {
  // TODO: Implement this function
}

/**
 * Returns n factorial (n!) using a loop.
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  // TODO: Implement this function
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
} let result = ' ';
for (i=0 ; i< times; i++){
  result += str;
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
}for (let i = 0; i < arr.length; i++) {
  if (arr[i]== target){
    return i;
  }
}
return -1;
/**
 * Counts the number of vowels (a, e, i, o, u) in a string (case-insensitive).
 * @param {string} str
 * @returns {number}
 */
function countVowels(str) {
  // TODO: Implement this function
}let count = 0;
for (let i =0; i< str.length; i++)
  if (str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e' || str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u'){
    count++;
  }
return count;

module.exports = { sumRange, factorial, repeatString, findIndex, countVowels };
