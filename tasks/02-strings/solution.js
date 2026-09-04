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
  let count = 0;
  let word = "";
  if (str.length > maxLength) {
    while (count < maxLength) {
      word = word + str[count];
      count++;
    }
    return word + "...";
  } else {
    while (count < str.length) {
      word = word + str[count];
      count++;
    }
    return word;
  }
}

/**
 * Checks if a string reads the same forwards and backwards (case-insensitive).
 * @param {string} str - The input string.
 * @returns {boolean} True if palindrome, false otherwise.
 */
function isPalindrome(str) {
  let count = str.length - 1;
  let word = "";
  while (count >= 0) {
    word = word + str[count];
    count--;
  }
  if (word.toLowerCase() === str.toLowerCase()) return true;
  return false;
}

module.exports = {
  capitalize,
  countCharacters,
  reverseString,
  truncate,
  isPalindrome
};
