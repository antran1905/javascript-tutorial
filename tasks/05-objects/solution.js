/**
 * Returns an object representing a person.
 * @param {string} name - The person's name.
 * @param {number} age - The person's age.
 * @returns {Object} The person object { name, age }.
 */
function createPerson(name, age) {
  let student = {
    name: name,
    age: age,
  };
  return student;
}

/**
 * Returns the full name of a person.
 * @param {Object} person - An object with { firstName, lastName }.
 * @returns {string} The full name formatted as 'firstName lastName'.
 */
function getFullName(person) {
  return person.firstName + " " + person.lastName;
}

/**
 * Returns an array of an object's keys.
 * @param {Object} obj - The input object.
 * @returns {Array<string>} An array of keys.
 */
function getKeys(obj) {
  return Object.keys(obj);
}

/**
 * Checks if an object has a specific property.
 * @param {Object} obj - The object to check.
 * @param {string} prop - The property name.
 * @returns {boolean} True if the property exists, false otherwise.
 */
function hasProperty(obj, prop) {
  return prop in obj;
}

/**
 * Merges two objects together into a new object.
 * obj2 should overwrite obj1 on conflicts.
 * @param {Object} obj1 - The first object.
 * @param {Object} obj2 - The second object.
 * @returns {Object} The new merged object.
 */
function mergObjects(obj1, obj2) {
  let obj3 = { ...obj1, ...obj2 };
  return obj3;
}

module.exports = {
  createPerson,
  getFullName,
  getKeys,
  hasProperty,
  mergObjects,
};
