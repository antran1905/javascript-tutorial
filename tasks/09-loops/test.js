const assert = require('assert');

function runTests() {
  const results = [];
  
  try {
    const { sumRange, factorial, repeatString, findIndex, countVowels } = require('./solution');
    
    // Test sumRange
    try {
      assert.strictEqual(sumRange(1, 5), 15);
      assert.strictEqual(sumRange(3, 3), 3);
      results.push({ name: 'sumRange works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'sumRange works correctly', passed: false, error: error.message });
    }

    // Test factorial
    try {
      assert.strictEqual(factorial(5), 120);
      assert.strictEqual(factorial(0), 1);
      results.push({ name: 'factorial works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'factorial works correctly', passed: false, error: error.message });
    }

    // Test repeatString
    try {
      assert.strictEqual(repeatString('abc', 3), 'abcabcabc');
      assert.strictEqual(repeatString('x', 0), '');
      results.push({ name: 'repeatString works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'repeatString works correctly', passed: false, error: error.message });
    }

    // Test findIndex
    try {
      assert.strictEqual(findIndex([10, 20, 30], 20), 1);
      assert.strictEqual(findIndex(['a', 'b', 'c'], 'z'), -1);
      results.push({ name: 'findIndex works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'findIndex works correctly', passed: false, error: error.message });
    }

    // Test countVowels
    try {
      assert.strictEqual(countVowels('Hello World'), 3);
      assert.strictEqual(countVowels('AEIOU'), 5);
      assert.strictEqual(countVowels('xyz'), 0);
      results.push({ name: 'countVowels works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'countVowels works correctly', passed: false, error: error.message });
    }

  } catch (error) {
    results.push({ name: 'Import failed or fatal error', passed: false, error: error.message });
  }
  
  return results;
}

module.exports = { runTests };
