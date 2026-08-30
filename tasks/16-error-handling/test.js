const assert = require('assert');

function runTests() {
  const results = [];
  
  try {
    const { safeDivide } = require('./solution');
    assert.throws(() => safeDivide(10, 0), /Division by zero/);
    assert.strictEqual(safeDivide(10, 2), 5);
    results.push({ name: 'safeDivide', passed: true });
  } catch (error) { results.push({ name: 'safeDivide', passed: false, error: error.message }); }
  
  try {
    const { parseJSON } = require('./solution');
    assert.deepStrictEqual(parseJSON('{"a":1}'), { success: true, data: { a: 1 } });
    assert.strictEqual(parseJSON('{bad').success, false);
    assert.strictEqual(typeof parseJSON('{bad').error, 'string');
    results.push({ name: 'parseJSON', passed: true });
  } catch (error) { results.push({ name: 'parseJSON', passed: false, error: error.message }); }
  
  try {
    const { validateAge } = require('./solution');
    assert.throws(() => validateAge('10'), TypeError);
    assert.throws(() => validateAge(-5), RangeError);
    assert.strictEqual(validateAge(25), 25);
    results.push({ name: 'validateAge', passed: true });
  } catch (error) { results.push({ name: 'validateAge', passed: false, error: error.message }); }
  
  try {
    const { validateEmail, ValidationError } = require('./solution');
    assert.throws(() => validateEmail('bademail.com'), (err) => err instanceof ValidationError && err.field === 'email');
    assert.strictEqual(validateEmail('test@example.com'), 'test@example.com');
    results.push({ name: 'validateEmail & ValidationError', passed: true });
  } catch (error) { results.push({ name: 'validateEmail & ValidationError', passed: false, error: error.message }); }
  
  try {
    const { retryOperation } = require('./solution');
    let calls = 0;
    const opFail = () => { calls++; throw new Error('fail'); };
    assert.throws(() => retryOperation(opFail, 2), /fail/);
    assert.strictEqual(calls, 3);
    let calls2 = 0;
    const opSuccess = () => { calls2++; if(calls2 < 2) throw new Error('fail'); return 'success'; };
    assert.strictEqual(retryOperation(opSuccess, 2), 'success');
    results.push({ name: 'retryOperation', passed: true });
  } catch (error) { results.push({ name: 'retryOperation', passed: false, error: error.message }); }
  
  return results;
}

module.exports = { runTests };
