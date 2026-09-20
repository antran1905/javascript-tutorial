/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The input string.
 * @returns {string} The capitalized string.
 */
function capitalize(str) {
  if (str == "") return "";
  return str[0].toUpperCase() + str.slice(1);
}

/**
 * Returns the length of the string.
 * @param {string} str - The input string.
 * @returns {number} The string length.
 */
function countCharacters(str) {
  // TODO: return the length of `str`
  return str.length;
}

/**
 * Reverses a string.
 * @param {string} str - The input string.
 * @returns {string} The reversed string.
 */
function reverseString(str) {
  let count = str.length - 1;
  let word = "";
  while (count >= 0) {
    word = word + str[count];
    count--;
  }
  return word;
}

/**
 * Truncates a string if it's longer than maxLength, appending '...'.
 * @param {string} str - The input string.
 * @param {number} maxLength - The maximum allowed length.
 * @returns {string} The truncated string.
 */
function truncate(str, maxLength) {
  // TODO: if str is longer than maxLength, cut it and add '...': truncate('Hello World', 5) -> 'Hello...'
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }
  return str;
}

/**
 * Checks if a string reads the same forwards and backwards (case-insensitive).
 * @param {string} str - The input string.
 * @returns {boolean} True if palindrome, false otherwise.
 */
function isPalindrome(str) {
  // TODO: check if string reads same forwards/backwards (case-insensitive): 'Racecar' -> true
}
if (str.toLowerCase() === str.toLowerCase().split("").reverse().join("")) {
  return true;
} else {
  return false;
}

module.exports = {
  capitalize,
  countCharacters,
  reverseString,
  truncate,
  isPalindrome,
};
