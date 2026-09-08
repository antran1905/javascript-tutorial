const assert = require('assert');

function runTests() {
  const results = [];
  try {
    const { getDateParts, formatDate, addDays, daysBetween, isWeekend, isLeapYear } = require('./solution');
    
    // Test getDateParts
    try {
      const d = new Date(2024, 2, 10, 15, 30, 45); // March 10, 2024
      assert.deepStrictEqual(getDateParts(d), {
        year: 2024, month: 3, day: 10, dayOfWeek: 0, hours: 15, minutes: 30, seconds: 45
      });
      results.push({ name: 'getDateParts returns correct parts including 1-based month', passed: true });
    } catch (error) {
      results.push({ name: 'getDateParts returns correct parts including 1-based month', passed: false, error: error.message });
    }

    // Test formatDate
    try {
      const d = new Date(2024, 0, 5); // Jan 5, 2024
      assert.strictEqual(formatDate(d, 'YYYY-MM-DD'), '2024-01-05');
      assert.strictEqual(formatDate(d, 'DD/MM/YYYY'), '05/01/2024');
      const d2 = new Date(2024, 11, 25); // Dec 25, 2024
      assert.strictEqual(formatDate(d2, 'YYYY-MM-DD'), '2024-12-25');
      results.push({ name: 'formatDate pads zeros correctly', passed: true });
    } catch (error) {
      results.push({ name: 'formatDate pads zeros correctly', passed: false, error: error.message });
    }

    // Test addDays
    try {
      const original = new Date(2024, 0, 15);
      const added = addDays(original, 5);
      assert.strictEqual(added.getDate(), 20);
      assert.strictEqual(original.getDate(), 15); // original should not mutate
      
      const boundaryDate = new Date(2024, 1, 28); // Feb 28, 2024
      const nextDay = addDays(boundaryDate, 2);
      assert.strictEqual(nextDay.getMonth(), 2);
      assert.strictEqual(nextDay.getDate(), 1); // leap year
      results.push({ name: 'addDays adds days without mutating', passed: true });
    } catch (error) {
      results.push({ name: 'addDays adds days without mutating', passed: false, error: error.message });
    }

    // Test daysBetween
    try {
      const d1 = new Date(2024, 0, 1);
      const d2 = new Date(2024, 0, 11);
      assert.strictEqual(daysBetween(d1, d2), 10);
      assert.strictEqual(daysBetween(d2, d1), 10);
      results.push({ name: 'daysBetween calculates absolute difference', passed: true });
    } catch (error) {
      results.push({ name: 'daysBetween calculates absolute difference', passed: false, error: error.message });
    }

    // Test isWeekend
    try {
      assert.strictEqual(isWeekend(new Date(2024, 0, 13)), true); // Saturday
      assert.strictEqual(isWeekend(new Date(2024, 0, 14)), true); // Sunday
      assert.strictEqual(isWeekend(new Date(2024, 0, 15)), false); // Monday
      results.push({ name: 'isWeekend detects Saturdays and Sundays', passed: true });
    } catch (error) {
      results.push({ name: 'isWeekend detects Saturdays and Sundays', passed: false, error: error.message });
    }

    // Test isLeapYear
    try {
      assert.strictEqual(isLeapYear(2024), true);
      assert.strictEqual(isLeapYear(2023), false);
      assert.strictEqual(isLeapYear(1900), false);
      assert.strictEqual(isLeapYear(2000), true);
      results.push({ name: 'isLeapYear identifies leap years correctly', passed: true });
    } catch (error) {
      results.push({ name: 'isLeapYear identifies leap years correctly', passed: false, error: error.message });
    }

  } catch (error) {
    results.push({ name: 'Load solution module', passed: false, error: error.message });
  }
  return results;
}

module.exports = { runTests };
