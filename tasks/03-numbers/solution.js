/**
 * Returns the sum of two numbers.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} The sum.
 */
function add(a, b) {
  return a + b;
}

/**
 * Returns true if a number is even, otherwise false.
 * @param {number} num - The number to check.
 * @returns {boolean} True if even.
 */
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  }
  return false;
}

/**
 * Clamps a number to be within a specific range.
 * @param {number} num - The number to clamp.
 * @param {number} min - The minimum allowed value.
 * @param {number} max - The maximum allowed value.
 * @returns {number} The clamped value.
 */
function clamp(num, min, max) {
  if (num < min) return min;
  if (num >= min && num <= max) return num;
  if (num > max) return max;
}

/**
 * Rounds a number to a specified number of decimal places.
 * @param {number} num - The number to round.
 * @param {number} decimals - Number of decimal places.
 * @returns {number} The rounded number.
 */
function roundTo(num, decimals) {
  let rounds = Math.round(num * 10 ** decimals) / 10 ** decimals;
  return rounds;
}

/**
 * Converts Celsius to Fahrenheit.
 * @param {number} celsius - The temperature in Celsius.
 * @returns {number} The temperature in Fahrenheit.
 */
function celsiusToFahrenheit(celsius) {
  return celsius * (9 / 5) + 32;
}

module.exports = {
  add,
  isEven,
  clamp,
  roundTo,
  celsiusToFahrenheit,
};
