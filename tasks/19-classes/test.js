const assert = require('assert');

function runTests() {
  const results = [];
  
  try {
    const { Calculator } = require('./solution');
    const calc = new Calculator();
    assert.strictEqual(calc.add(10).subtract(2).multiply(3).getResult(), 24);
    assert.throws(() => calc.divide(0), Error);
    calc.reset();
    assert.strictEqual(calc.getResult(), 0);
    results.push({ name: 'Calculator', passed: true });
  } catch (error) { results.push({ name: 'Calculator', passed: false, error: error.message }); }
  
  try {
    const { EventEmitter } = require('./solution');
    const ee = new EventEmitter();
    let val = 0;
    const cb = (n) => val += n;
    ee.on('test', cb);
    ee.emit('test', 5);
    assert.strictEqual(val, 5);
    ee.off('test', cb);
    ee.emit('test', 5);
    assert.strictEqual(val, 5);
    results.push({ name: 'EventEmitter', passed: true });
  } catch (error) { results.push({ name: 'EventEmitter', passed: false, error: error.message }); }
  
  try {
    const { LinkedList } = require('./solution');
    const ll = new LinkedList();
    ll.append(1);
    ll.prepend(2);
    assert.deepStrictEqual(ll.toArray(), [2, 1]);
    assert.strictEqual(ll.size, 2);
    assert.strictEqual(ll.find(1).value, 1);
    results.push({ name: 'LinkedList', passed: true });
  } catch (error) { results.push({ name: 'LinkedList', passed: false, error: error.message }); }
  
  try {
    const { Stack } = require('./solution');
    const s = new Stack();
    s.push(1); s.push(2);
    assert.strictEqual(s.peek(), 2);
    assert.strictEqual(s.pop(), 2);
    assert.strictEqual(s.size, 1);
    assert.strictEqual(s.isEmpty(), false);
    results.push({ name: 'Stack', passed: true });
  } catch (error) { results.push({ name: 'Stack', passed: false, error: error.message }); }
  
  try {
    const { Circle, Rectangle, Shape } = require('./solution');
    const c = new Circle(10);
    assert.strictEqual(Math.round(c.getArea()), 314);
    const r = new Rectangle(5, 10);
    assert.strictEqual(r.getPerimeter(), 30);
    assert.throws(() => new Shape().getArea(), /Not implemented/);
    results.push({ name: 'Shape, Circle, Rectangle', passed: true });
  } catch (error) { results.push({ name: 'Shape, Circle, Rectangle', passed: false, error: error.message }); }
  
  return results;
}

module.exports = { runTests };
