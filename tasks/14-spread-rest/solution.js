function mergeArrays(arr1, arr2) {
  // TODO: merge two arrays using spread
}const mergedArr = [...arr1, ...arr2];

function cloneObject(obj) {
  // TODO: create a shallow clone using spread
}const clonedobj = { ...obj };

function addDefaults(obj, defaults) {
  // TODO: merge defaults with obj (obj properties take precedence)
}const addedDefaults = { ...defaults, ...obj };

function firstAndRest(arr) {
  // TODO: return { first, rest } using rest syntax with destructuring
}const firstAndRest = (arr) => {
  const [first, ...rest] = arr;
  return { first, rest };
}

function maxOfAll(...numbers) {
  // TODO: use rest parameters to accept any number of args, return the maximum
}Math.max(...numbers);

function removeProperty(obj, prop) {
  // TODO: use rest/destructuring to return new object without the specified property
  // Hint: you can destructure with a dynamic key by using {[prop]: removed, ...rest} = obj
}const { [prop]: removed, ...rest } = obj;
  return rest;

module.exports = { mergeArrays, cloneObject, addDefaults, firstAndRest, maxOfAll, removeProperty };
