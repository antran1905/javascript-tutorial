const assert = require('assert');

function runTests() {
  const results = [];
  
  try {
    const { createCounter } = require('./solution');
    const counter = createCounter(5);
    counter.increment();
    assert.strictEqual(counter.getCount(), 6);
    counter.decrement();
    assert.strictEqual(counter.getCount(), 5);
    counter.reset();
    assert.strictEqual(counter.getCount(), 0);
    results.push({ name: 'createCounter', passed: true });
  } catch (error) { results.push({ name: 'createCounter', passed: false, error: error.message }); }
  
  try {
    const { createCache } = require('./solution');
    const cache = createCache();
    cache.set('a', 1);
    assert.strictEqual(cache.has('a'), true);
    assert.strictEqual(cache.get('a'), 1);
    cache.clear();
    assert.strictEqual(cache.has('a'), false);
    results.push({ name: 'createCache', passed: true });
  } catch (error) { results.push({ name: 'createCache', passed: false, error: error.message }); }
  
  try {
    const { once } = require('./solution');
    let calls = 0;
    const add = (a, b) => { calls++; return a + b; };
    const onceAdd = once(add);
    assert.strictEqual(onceAdd(2, 3), 5);
    assert.strictEqual(onceAdd(4, 5), 5);
    assert.strictEqual(calls, 1);
    results.push({ name: 'once', passed: true });
  } catch (error) { results.push({ name: 'once', passed: false, error: error.message }); }
  
  try {
    const { createRateLimiter } = require('./solution');
    const limiter = createRateLimiter(2, 100);
    assert.strictEqual(limiter(() => 1), 1);
    assert.strictEqual(limiter(() => 2), 2);
    assert.throws(() => limiter(() => 3), Error);
    results.push({ name: 'createRateLimiter', passed: true });
  } catch (error) { results.push({ name: 'createRateLimiter', passed: false, error: error.message }); }
  
  try {
    const { pipe } = require('./solution');
    const add1 = x => x + 1;
    const double = x => x * 2;
    const pipeline = pipe(add1, double);
    assert.strictEqual(pipeline(5), 12);
    results.push({ name: 'pipe', passed: true });
  } catch (error) { results.push({ name: 'pipe', passed: false, error: error.message }); }
  
  return results;
}

module.exports = { runTests };
