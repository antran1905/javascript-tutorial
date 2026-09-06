/**
 * Returns a letter grade based on a score.
 * 90-100: 'A', 80-89: 'B', 70-79: 'C', 60-69: 'D', Below 60: 'F'
 * @param {number} score - The score.
 * @returns {string} The letter grade.
 */
function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

/**
 * Standard FizzBuzz logic.
 * Divisible by 3 and 5 -> 'FizzBuzz'
 * Divisible by 3 -> 'Fizz'
 * Divisible by 5 -> 'Buzz'
 * Otherwise -> string representation of n
 * @param {number} n
 * @returns {string}
 */
function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else {
    return String(n);
  }
}

/**
 * Returns 'Weekday' or 'Weekend' based on the day string.
 * @param {string} day - e.g., 'Monday', 'Saturday'
 * @returns {string}
 */
function getDayType(day) {
  if (
    day == "Monday" ||
    day == "Tuesday" ||
    day == "Wednesday" ||
    day == "Thursday" ||
    day == "Friday"
  ) {
    return "Weekday";
  } else {
    return "Weekend";
  }
}

/**
 * Returns 'positive', 'negative', or 'zero'.
 * @param {number} num
 * @returns {string}
 */
function getSign(num) {
  if (num > 0) return "positive";
  if (num < 0) return "negative";
  return "zero";
}

/**
 * Checks if a person can vote.
 * @param {number} age
 * @param {boolean} isCitizen
 * @returns {boolean} True if age >= 18 and isCitizen is true.
 */
function canVote(age, isCitizen) {
  if (age >= 18 && isCitizen == true) {
    return true;
  }
  return false;
}

module.exports = { getGrade, fizzBuzz, getDayType, getSign, canVote };
