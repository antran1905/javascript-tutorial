/**
 * Returns an object representing a person.
 * @param {string} name - The person's name.
 * @param {number} age - The person's age.
 * @returns {Object} The person object { name, age }.
 */
function createPerson(name, age) {
  // TODO: return { name, age } object
}

/**
 * Returns the full name of a person.
 * @param {Object} person - An object with { firstName, lastName }.
 * @returns {string} The full name formatted as 'firstName lastName'.
 */
function getFullName(person) {
  // TODO: given { firstName, lastName }, return 'firstName lastName'
}

/**
 * Returns an array of an object's keys.
 * @param {Object} obj - The input object.
 * @returns {Array<string>} An array of keys.
 */
function getKeys(obj) {
  // TODO: return array of object's keys
}

/**
 * Checks if an object has a specific property.
 * @param {Object} obj - The object to check.
 * @param {string} prop - The property name.
 * @returns {boolean} True if the property exists, false otherwise.
 */
function hasProperty(obj, prop) {
  // TODO: return true if object has the property
}

/**
 * Merges two objects together into a new object.
 * obj2 should overwrite obj1 on conflicts.
 * @param {Object} obj1 - The first object.
 * @param {Object} obj2 - The second object.
 * @returns {Object} The new merged object.
 */
function mergObjects(obj1, obj2) {
  // TODO: return a new merged object (obj2 overwrites obj1 on conflicts)
}

module.exports = {
  createPerson,
  getFullName,
  getKeys,
  hasProperty,
  mergObjects
};
