function getPropertyNames(obj) {
  return Object.keys(obj);
}

function getPropertyValues(obj) {
  return Object.values(obj);
}

function toPairs(obj) {
  return Object.entries(obj);
}

function fromPairs(pairs) {
  return Object.fromEntries(pairs);
}

function pick(obj, keys) {
  const result = {};
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}

function invert(obj) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    result[value] = key;
  }
  return result;
}

module.exports = {
  getPropertyNames,
  getPropertyValues,
  toPairs,
  fromPairs,
  pick,
  invert,
};
