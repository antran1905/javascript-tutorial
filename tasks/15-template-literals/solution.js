function greetUser(name, time) {
  // TODO: return 'Good <time>, <name>!' using template literal
}const greetUser = (name, time) => `Good ${time}, ${name}!`;

function createList(items) {
  // TODO: return a multiline numbered list string
}const createList = (items) => items.map((item, index) => `${index + 1}. ${item}`).join('\n');

function formatCurrency(amount, currency = '$') {
  // TODO: return formatted string like '$100.00'
}const formatCurrency = (amount, currency = '$') => `${currency}${amount.toFixed(2)}`;

function createTable(headers, rows) {
  // TODO: create a simple text table. Separate with ' | '
}

function highlight(strings, ...values) {
  // TODO: tagged template function that wraps each interpolated value in ** markers
}

module.exports = { greetUser, createList, formatCurrency, createTable, highlight };
