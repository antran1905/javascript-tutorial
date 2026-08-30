/**
 * Returns the sum of two numbers.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} The sum.
 */
function add(a, b) {
  // TODO: return sum of a and b
}

/**
 * Returns true if a number is even, otherwise false.
 * @param {number} num - The number to check.
 * @returns {boolean} True if even.
 */
function isEven(num) {
  // TODO: return true if num is even
}

/**
 * Clamps a number to be within a specific range.
 * @param {number} num - The number to clamp.
 * @param {number} min - The minimum allowed value.
 * @param {number} max - The maximum allowed value.
 * @returns {number} The clamped value.
 */
function clamp(num, min, max) {
  // TODO: clamp a number to a range: clamp(15, 0, 10) -> 10, clamp(-5, 0, 10) -> 0
}

/**
 * Rounds a number to a specified number of decimal places.
 * @param {number} num - The number to round.
 * @param {number} decimals - Number of decimal places.
 * @returns {number} The rounded number.
 */
function roundTo(num, decimals) {
  // TODO: round to specified decimal places: roundTo(3.14159, 2) -> 3.14
}

/**
 * Converts Celsius to Fahrenheit.
 * @param {number} celsius - The temperature in Celsius.
 * @returns {number} The temperature in Fahrenheit.
 */
function celsiusToFahrenheit(celsius) {
  // TODO: convert: formula is (celsius * 9/5) + 32
}

module.exports = {
  add,
  isEven,
  clamp,
  roundTo,
  celsiusToFahrenheit
};
