function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

function cloneObject(obj) {
  return [...obj];
}

function addDefaults(obj, defaults) {
  return { ...defaults, ...obj };
}

function firstAndRest(arr) {
  const [first, ...rest] = arr;
  return { first, rest };
}

function maxOfAll(...numbers) {
  return Math.max(...numbers);
}

function removeProperty(obj, prop) {
  // TODO: use rest/destructuring to return new object without the specified property
  // Hint: you can destructure with a dynamic key by using {[prop]: removed, ...rest} = obj
}
const { [prop]: removed, ...rest } = obj;
return rest;

module.exports = {
  mergeArrays,
  cloneObject,
  addDefaults,
  firstAndRest,
  maxOfAll,
  removeProperty,
};
