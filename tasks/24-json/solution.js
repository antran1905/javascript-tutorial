function toJSON(value) {
  // TODO: Implement this function
  return JSON.stringify(value);
}

function fromJSON(jsonStr) {
  // TODO: Implement this function
  return JSON.parse(jsonStr);
}

function deepClone(obj) {
  // TODO: Implement this function
  return JSON.parse(JSON.stringify(obj));
}

function prettyPrint(obj) {
  // TODO: Implement this function
  return JSON.stringify(obj, null, 2);
}

function filterAndStringify(obj, allowedKeys) {
  // TODO: Implement this function
}

function safeJsonParse(jsonStr, defaultValue) {
  // TODO: Implement this function
}

module.exports = {
  toJSON,
  fromJSON,
  deepClone,
  prettyPrint,
  filterAndStringify,
  safeJsonParse,
};
