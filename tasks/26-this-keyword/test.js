const assert = require('assert');

function runTests() {
  const results = [];
  const {
    createGreeter,
    fixThis,
    callWithContext,
    applyWithContext,
    createTimer
  } = require('./solution');

  try {
    const greeter = createGreeter('Alice');
    assert.strictEqual(greeter.greet(), 'Hello, I am Alice');
    const unboundGreet = greeter.greet;
    // We expect it not to be 'Hello, I am Alice' because `this` is lost
    assert.notStrictEqual(unboundGreet(), 'Hello, I am Alice');
    results.push({ name: 'createGreeter', passed: true });
  } catch (error) {
    results.push({ name: 'createGreeter', passed: false, error: error.message });
  }

  try {
    const obj = { value: 42, getValue: function() { return this.value; } };
    const boundFn = fixThis(obj, 'getValue');
    assert.strictEqual(boundFn(), 42);
    results.push({ name: 'fixThis', passed: true });
  } catch (error) {
    results.push({ name: 'fixThis', passed: false, error: error.message });
  }

  try {
    const fn = function(a, b) { return this.val + a + b; };
    const ctx = { val: 10 };
    assert.strictEqual(callWithContext(fn, ctx, 5, 2), 17);
    results.push({ name: 'callWithContext', passed: true });
  } catch (error) {
    results.push({ name: 'callWithContext', passed: false, error: error.message });
  }

  try {
    const fn = function(a, b) { return this.val + a + b; };
    const ctx = { val: 10 };
    assert.strictEqual(applyWithContext(fn, ctx, [5, 2]), 17);
    results.push({ name: 'applyWithContext', passed: true });
  } catch (error) {
    results.push({ name: 'applyWithContext', passed: false, error: error.message });
  }

  try {
    const timer = createTimer('TestTimer');
    assert.strictEqual(timer.label, 'TestTimer');
    timer.start();
    const elapsed = timer.elapsed();
    assert.strictEqual(typeof elapsed, 'number');
    assert.ok(elapsed >= 0);
    results.push({ name: 'createTimer', passed: true });
  } catch (error) {
    results.push({ name: 'createTimer', passed: false, error: error.message });
  }

  return results;
}

module.exports = { runTests };
