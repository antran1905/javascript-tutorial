function getPropertyNames(obj) {
  // TODO: return array of object's keys
}Object.keys(obj);

function getPropertyValues(obj) {
  // TODO: return array of object's values
}Object.values(obj);

function toPairs(obj) {
  // TODO: return array of [key, value] pairs
}Object.entries(obj);

function fromPairs(pairs) {
  // TODO: convert array of [key, value] pairs back to object
}Object.fromEntries(pairs);

function pick(obj, keys) {
  // TODO: return new object with only the specified keys
}pick(obj, keys);

function invert(obj) {
  // TODO: swap keys and values
}invert(obj);

module.exports = { getPropertyNames, getPropertyValues, toPairs, fromPairs, pick, invert };
