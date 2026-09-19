/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function safeDivide(a, b) {
  // TODO: divide a by b, throw Error with message 'Division by zero' if b is 0
}if (b === 0) {
  throw new Error('Division by zero');
} return a/b;

/**
 * @param {string} jsonString
 * @returns {Object} { success: true, data } or { success: false, error: <error message> }
 */
function parseJSON(jsonString) {
  // TODO: try to parse JSON, return success and data or error
}try{
  throw new Database("Connection failed, SELECT * FROM users ")
} catch(err) {
  if (err instanceof Database) {
    return { success: false, error: err.message };
  }
}

/**
 * @param {number} age
 * @returns {number}
 */
function validateAge(age) {
  // TODO: throw TypeError if not a number, RangeError if < 0 or > 150, else return age
}if (typeof age !== `number`) {
  throw new TypeError(`Age must be a number`);
}
if (age < 0 || age > 150) {
  throw new RangeError(`Age must be between 0 and 150`);
}
return age;

class ValidationError extends Error {
  // TODO: extend Error, set 'field' property in constructor
}

/**
 * @param {string} email
 * @returns {string}
 */
function validateEmail(email) {
  // TODO: throw ValidationError with field='email' if no '@', else return email
}if (email.includes(`@`)) {
  throw new ValidationError (`Invalid email address`, `email`);
}

/**
 * @param {Function} operation
 * @param {number} maxRetries
 * @returns {any}
 */
function retryOperation(operation, maxRetries) {
  // TODO: call operation(). If it throws, retry up to maxRetries times.
}

module.exports = { safeDivide, parseJSON, validateAge, ValidationError, validateEmail, retryOperation };
