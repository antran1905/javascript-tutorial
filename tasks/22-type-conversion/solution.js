function toNumber(value) {
  return Number(value);
}

function toStringValue(value) {
  // TODO: Implement this function
  return String(value);
}

function toBooleanValue(value) {
  // TODO: Implement this function
  return Boolean(value);
}

function explicitParsing(str) {
  return {
    int: parseInt(str),
    float: parseFloat(str),
  };
}

function coercionQuiz() {
  // TODO: Implement this function
  return {
    add: "5" + 2,
    subtract: "5" - 2,
    multiply: "5" * 2,
    divide: "5" / 2,
    boolean: true + 1,
  };
}

function strictVsLoose(a, b) {
  // TODO: Implement this function
  return {
    loose: a == b,
    strict: a === b,
  };
}

module.exports = {
  toNumber,
  toStringValue,
  toBooleanValue,
  explicitParsing,
  coercionQuiz,
  strictVsLoose,
};
