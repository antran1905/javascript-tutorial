const assert = require('assert');

function runTests() {
  const results = [];
  
  try {
    const { getGrade, fizzBuzz, getDayType, getSign, canVote } = require('./solution');
    
    // Test getGrade
    try {
      assert.strictEqual(getGrade(95), 'A');
      assert.strictEqual(getGrade(80), 'B');
      assert.strictEqual(getGrade(75), 'C');
      assert.strictEqual(getGrade(60), 'D');
      assert.strictEqual(getGrade(59), 'F');
      results.push({ name: 'getGrade works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'getGrade works correctly', passed: false, error: error.message });
    }

    // Test fizzBuzz
    try {
      assert.strictEqual(fizzBuzz(15), 'FizzBuzz');
      assert.strictEqual(fizzBuzz(9), 'Fizz');
      assert.strictEqual(fizzBuzz(10), 'Buzz');
      assert.strictEqual(fizzBuzz(7), '7');
      results.push({ name: 'fizzBuzz works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'fizzBuzz works correctly', passed: false, error: error.message });
    }

    // Test getDayType
    try {
      assert.strictEqual(getDayType('Monday'), 'Weekday');
      assert.strictEqual(getDayType('Saturday'), 'Weekend');
      results.push({ name: 'getDayType works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'getDayType works correctly', passed: false, error: error.message });
    }

    // Test getSign
    try {
      assert.strictEqual(getSign(42), 'positive');
      assert.strictEqual(getSign(-1), 'negative');
      assert.strictEqual(getSign(0), 'zero');
      results.push({ name: 'getSign works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'getSign works correctly', passed: false, error: error.message });
    }

    // Test canVote
    try {
      assert.strictEqual(canVote(18, true), true);
      assert.strictEqual(canVote(17, true), false);
      assert.strictEqual(canVote(25, false), false);
      results.push({ name: 'canVote works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'canVote works correctly', passed: false, error: error.message });
    }

  } catch (error) {
    results.push({ name: 'Import failed or fatal error', passed: false, error: error.message });
  }
  
  return results;
}

module.exports = { runTests };
