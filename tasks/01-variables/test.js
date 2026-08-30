const assert = require('assert');

function runTests() {
  const results = [];
  
  try {
    const { getGreeting, getAge, isStudent, getNothing, getTypeOf } = require('./solution');
    
    try {
      assert.strictEqual(getGreeting(), 'Hello, JavaScript!');
      results.push({ name: 'getGreeting returns correct string', passed: true });
    } catch (error) {
      results.push({ name: 'getGreeting returns correct string', passed: false, error: error.message });
    }

    try {
      assert.strictEqual(getAge(), 25);
      results.push({ name: 'getAge returns 25', passed: true });
    } catch (error) {
      results.push({ name: 'getAge returns 25', passed: false, error: error.message });
    }

    try {
      assert.strictEqual(isStudent(), true);
      results.push({ name: 'isStudent returns true', passed: true });
    } catch (error) {
      results.push({ name: 'isStudent returns true', passed: false, error: error.message });
    }

    try {
      assert.strictEqual(getNothing(), null);
      results.push({ name: 'getNothing returns null', passed: true });
    } catch (error) {
      results.push({ name: 'getNothing returns null', passed: false, error: error.message });
    }

    try {
      assert.strictEqual(getTypeOf('hello'), 'string');
      assert.strictEqual(getTypeOf(42), 'number');
      assert.strictEqual(getTypeOf(true), 'boolean');
      results.push({ name: 'getTypeOf returns correct types', passed: true });
    } catch (error) {
      results.push({ name: 'getTypeOf returns correct types', passed: false, error: error.message });
    }

  } catch (err) {
    results.push({ name: 'Load solution file', passed: false, error: err.message });
  }
  
  return results;
}

module.exports = { runTests };
