const assert = require('assert');

function runTests() {
  const results = [];
  
  try {
    const { capitalize, countCharacters, reverseString, truncate, isPalindrome } = require('./solution');
    
    try {
      assert.strictEqual(capitalize('hello'), 'Hello');
      assert.strictEqual(capitalize(''), '');
      results.push({ name: 'capitalize works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'capitalize works correctly', passed: false, error: error.message });
    }

    try {
      assert.strictEqual(countCharacters('hello'), 5);
      assert.strictEqual(countCharacters(''), 0);
      results.push({ name: 'countCharacters works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'countCharacters works correctly', passed: false, error: error.message });
    }

    try {
      assert.strictEqual(reverseString('abc'), 'cba');
      assert.strictEqual(reverseString('1234'), '4321');
      assert.strictEqual(reverseString(''), '');
      results.push({ name: 'reverseString works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'reverseString works correctly', passed: false, error: error.message });
    }

    try {
      assert.strictEqual(truncate('Hello World', 5), 'Hello...');
      assert.strictEqual(truncate('Hi', 5), 'Hi');
      assert.strictEqual(truncate('12345', 5), '12345');
      results.push({ name: 'truncate works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'truncate works correctly', passed: false, error: error.message });
    }

    try {
      assert.strictEqual(isPalindrome('Racecar'), true);
      assert.strictEqual(isPalindrome('hello'), false);
      assert.strictEqual(isPalindrome('a'), true);
      assert.strictEqual(isPalindrome(''), true);
      results.push({ name: 'isPalindrome works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'isPalindrome works correctly', passed: false, error: error.message });
    }

  } catch (err) {
    results.push({ name: 'Load solution file', passed: false, error: err.message });
  }
  
  return results;
}

module.exports = { runTests };
