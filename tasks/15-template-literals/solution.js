function greetUser(name, time) {
  return `Good ${time}, ${name}!`;
}

function createList(items) {
  // TODO: return a multiline numbered list string
}
const createList = (items) =>
  items.map((item, index) => `${index + 1}. ${item}`).join("\n");

function formatCurrency(amount, currency = "$") {
  return `${currency}${amount.toFixed(2)}`;
}

function createTable(headers, rows) {
  // TODO: create a simple text table. Separate with ' | '
}

function highlight(strings, ...values) {
  // TODO: tagged template function that wraps each interpolated value in ** markers
}

module.exports = {
  greetUser,
  createList,
  formatCurrency,
  createTable,
  highlight,
};
