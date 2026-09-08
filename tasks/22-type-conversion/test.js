const assert = require('assert');

function runTests() {
  const results = [];
  try {
    const { toNumber, toStringValue, toBooleanValue, explicitParsing, coercionQuiz, strictVsLoose } = require('./solution');
    
    // Test toNumber
    try {
      assert.strictEqual(toNumber("123"), 123);
      assert.strictEqual(Number.isNaN(toNumber("abc")), true);
      assert.strictEqual(toNumber(null), 0);
      results.push({ name: 'toNumber converts string to number', passed: true });
    } catch (error) {
      results.push({ name: 'toNumber converts string to number', passed: false, error: error.message });
    }

    // Test toStringValue
    try {
      assert.strictEqual(toStringValue(123), "123");
      assert.strictEqual(toStringValue(false), "false");
      assert.strictEqual(toStringValue(null), "null");
      results.push({ name: 'toStringValue converts value to string', passed: true });
    } catch (error) {
      results.push({ name: 'toStringValue converts value to string', passed: false, error: error.message });
    }

    // Test toBooleanValue
    try {
      assert.strictEqual(toBooleanValue(""), false);
      assert.strictEqual(toBooleanValue("hello"), true);
      assert.strictEqual(toBooleanValue(0), false);
      assert.strictEqual(toBooleanValue(null), false);
      results.push({ name: 'toBooleanValue converts value to boolean', passed: true });
    } catch (error) {
      results.push({ name: 'toBooleanValue converts value to boolean', passed: false, error: error.message });
    }

    // Test explicitParsing
    try {
      assert.deepStrictEqual(explicitParsing("12.34abc"), { int: 12, float: 12.34 });
      assert.deepStrictEqual(explicitParsing("42"), { int: 42, float: 42 });
      results.push({ name: 'explicitParsing parses int and float', passed: true });
    } catch (error) {
      results.push({ name: 'explicitParsing parses int and float', passed: false, error: error.message });
    }

    // Test coercionQuiz
    try {
      const quiz = coercionQuiz();
      assert.strictEqual(quiz.stringPlusNumber, "53");
      assert.strictEqual(quiz.stringMinusNumber, 2);
      assert.strictEqual(quiz.booleanPlusNumber, 2);
      assert.strictEqual(quiz.nullPlusNumber, 5);
      assert.strictEqual(Number.isNaN(quiz.undefinedPlusNumber), true);
      assert.strictEqual(quiz.emptyStringToNumber, 0);
      assert.strictEqual(quiz.falseToNumber, 0);
      results.push({ name: 'coercionQuiz returns correct coercion results', passed: true });
    } catch (error) {
      results.push({ name: 'coercionQuiz returns correct coercion results', passed: false, error: error.message });
    }

    // Test strictVsLoose
    try {
      assert.deepStrictEqual(strictVsLoose("5", 5), { loose: true, strict: false });
      assert.deepStrictEqual(strictVsLoose(0, false), { loose: true, strict: false });
      assert.deepStrictEqual(strictVsLoose(null, undefined), { loose: true, strict: false });
      assert.deepStrictEqual(strictVsLoose(true, 1), { loose: true, strict: false });
      results.push({ name: 'strictVsLoose differentiates == and ===', passed: true });
    } catch (error) {
      results.push({ name: 'strictVsLoose differentiates == and ===', passed: false, error: error.message });
    }

  } catch (error) {
    results.push({ name: 'Load solution module', passed: false, error: error.message });
  }
  return results;
}

module.exports = { runTests };
