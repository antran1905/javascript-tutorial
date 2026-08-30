const assert = require('assert');

function runTests() {
  const results = [];
  
  try {
    const { createCounter, makePrivate, blockScopeDemo, createIdGenerator, loopWithClosure } = require('./solution');
    
    // Test createCounter
    try {
      const counter = createCounter();
      counter.increment();
      counter.increment();
      counter.decrement();
      assert.strictEqual(counter.getCount(), 1);
      results.push({ name: 'createCounter works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'createCounter works correctly', passed: false, error: error.message });
    }

    // Test makePrivate
    try {
      const p = makePrivate('secret');
      assert.strictEqual(p.get(), 'secret');
      p.set('newSecret');
      assert.strictEqual(p.get(), 'newSecret');
      assert.strictEqual(p.initialValue, undefined); // Should be private
      results.push({ name: 'makePrivate works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'makePrivate works correctly', passed: false, error: error.message });
    }

    // Test blockScopeDemo
    try {
      // NOTE: the test might require blockScopeDemo to be fully functional or structured properly
      // If innerVar is strictly tested as block scoped:
      const arr = blockScopeDemo();
      assert.deepStrictEqual(arr, ['outer', 'block']);
      results.push({ name: 'blockScopeDemo works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'blockScopeDemo works correctly', passed: false, error: error.message });
    }

    // Test createIdGenerator
    try {
      const generateId = createIdGenerator();
      assert.strictEqual(generateId(), 1);
      assert.strictEqual(generateId(), 2);
      assert.strictEqual(generateId(), 3);
      results.push({ name: 'createIdGenerator works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'createIdGenerator works correctly', passed: false, error: error.message });
    }

    // Test loopWithClosure
    try {
      const funcs = loopWithClosure();
      assert.strictEqual(funcs.length, 5);
      assert.strictEqual(funcs[0](), 0);
      assert.strictEqual(funcs[4](), 4);
      results.push({ name: 'loopWithClosure works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'loopWithClosure works correctly', passed: false, error: error.message });
    }

  } catch (error) {
    results.push({ name: 'Import failed or fatal error', passed: false, error: error.message });
  }
  
  return results;
}

module.exports = { runTests };
