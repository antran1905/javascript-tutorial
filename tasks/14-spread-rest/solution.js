function mergeArrays(arr1, arr2) {
  // TODO: merge two arrays using spread
}

function cloneObject(obj) {
  // TODO: create a shallow clone using spread
}

function addDefaults(obj, defaults) {
  // TODO: merge defaults with obj (obj properties take precedence)
}

function firstAndRest(arr) {
  // TODO: return { first, rest } using rest syntax with destructuring
}

function maxOfAll(...numbers) {
  // TODO: use rest parameters to accept any number of args, return the maximum
}

function removeProperty(obj, prop) {
  // TODO: use rest/destructuring to return new object without the specified property
  // Hint: you can destructure with a dynamic key by using {[prop]: removed, ...rest} = obj
}

module.exports = { mergeArrays, cloneObject, addDefaults, firstAndRest, maxOfAll, removeProperty };
