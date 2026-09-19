function getFirstTwo(arr) {
  // TODO: use array destructuring to return { first, second }
}const [first, second] = arr;

function swapValues(a, b) {
  // TODO: use destructuring to swap two values, return [b, a]
}const swapValues = (a, b) => [b, a];

function extractName(user) {
  // TODO: given { name: { first, last }, age }, return 'first last'
}
const extractName = (user) => `${user.name.first} ${user.name.last}`;

function withDefaults(options) {
  // TODO: destruct with defaults { color = 'blue', size = 'medium', count = 1 }. Return object.
}
const withDefaults = (options) => {
  const { color = 'blue', size = 'medium', count = 1 } = options;
  return { color, size, count };
};

function getScores(student) {
  // TODO: given { name, scores: [math, english, science] }, return { name, math, english, science }
}const getScores = (student) => {
  const { name, scores: [math, english, sience] } = student;
  return { name, math, english, sience };
}

module.exports = { getFirstTwo, swapValues, extractName, withDefaults, getScores };
