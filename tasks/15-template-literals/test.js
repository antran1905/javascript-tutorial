const assert = require('assert');

function runTests() {
  const results = [];
  try {
    const { greetUser, createList, formatCurrency, createTable, highlight } = require('./solution');

    try {
      assert.strictEqual(greetUser('Alice', 'Morning'), 'Good Morning, Alice!');
      results.push({ name: 'greetUser', passed: true });
    } catch (e) { results.push({ name: 'greetUser', passed: false, error: e.message }); }

    try {
      assert.strictEqual(createList(['A', 'B']).trim(), '1. A\n2. B');
      results.push({ name: 'createList', passed: true });
    } catch (e) { results.push({ name: 'createList', passed: false, error: e.message }); }

    try {
      assert.strictEqual(formatCurrency(100), '$100.00');
      assert.strictEqual(formatCurrency(50.5, '€'), '€50.50');
      results.push({ name: 'formatCurrency', passed: true });
    } catch (e) { results.push({ name: 'formatCurrency', passed: false, error: e.message }); }

    try {
      assert.strictEqual(createTable(['A', 'B'], [[1, 2]]).trim(), 'A | B\n1 | 2');
      results.push({ name: 'createTable', passed: true });
    } catch (e) { results.push({ name: 'createTable', passed: false, error: e.message }); }

    try {
      const name = 'World';
      assert.strictEqual(highlight`Hello ${name}`, 'Hello **World**');
      results.push({ name: 'highlight', passed: true });
    } catch (e) { results.push({ name: 'highlight', passed: false, error: e.message }); }

  } catch (error) {
    results.push({ name: 'Module load', passed: false, error: error.message });
  }
  return results;
}

module.exports = { runTests };
