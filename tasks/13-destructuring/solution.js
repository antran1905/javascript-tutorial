function getFirstTwo(arr) {
  const [first, second] = arr;
  return { first, second };
}

function swapValues(a, b) {
  [a, b] = [b, a];
  return [a, b];
}

function extractName(user) {
  const {
    name: { first, last },
  } = user;
  return `${first} ${last}`;
}

function withDefaults(options) {
  const { color = "blue", size = "medium", count = 1 } = options;
  return { color, size, count };
}

function getScores(student) {
  // TODO: given { name, scores: [math, english, science] }, return { name, math, english, science }
  const {
    name,
    scores: [math, english, science],
  } = student;
  return { name, math, english, science };
}

module.exports = {
  getFirstTwo,
  swapValues,
  extractName,
  withDefaults,
  getScores,
};
