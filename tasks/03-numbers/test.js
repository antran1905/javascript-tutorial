const assert = require('assert');

function runTests() {
  const results = [];
  
  try {
    const { add, isEven, clamp, roundTo, celsiusToFahrenheit } = require('./solution');
    
    try {
      assert.strictEqual(add(5, 10), 15);
      assert.strictEqual(add(-5, 5), 0);
      results.push({ name: 'add works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'add works correctly', passed: false, error: error.message });
    }

    try {
      assert.strictEqual(isEven(4), true);
      assert.strictEqual(isEven(7), false);
      assert.strictEqual(isEven(0), true);
      assert.strictEqual(isEven(-2), true);
      results.push({ name: 'isEven works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'isEven works correctly', passed: false, error: error.message });
    }

    try {
      assert.strictEqual(clamp(15, 0, 10), 10);
      assert.strictEqual(clamp(-5, 0, 10), 0);
      assert.strictEqual(clamp(5, 0, 10), 5);
      results.push({ name: 'clamp works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'clamp works correctly', passed: false, error: error.message });
    }

    try {
      assert.strictEqual(roundTo(3.14159, 2), 3.14);
      assert.strictEqual(roundTo(1.005, 2), 1.01);
      assert.strictEqual(roundTo(5, 2), 5);
      results.push({ name: 'roundTo works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'roundTo works correctly', passed: false, error: error.message });
    }

    try {
      assert.strictEqual(celsiusToFahrenheit(0), 32);
      assert.strictEqual(celsiusToFahrenheit(100), 212);
      assert.strictEqual(celsiusToFahrenheit(-40), -40);
      results.push({ name: 'celsiusToFahrenheit works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'celsiusToFahrenheit works correctly', passed: false, error: error.message });
    }

  } catch (err) {
    results.push({ name: 'Load solution file', passed: false, error: err.message });
  }
  
  return results;
}

module.exports = { runTests };
