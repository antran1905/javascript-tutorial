const assert = require('assert');

function runTests() {
  const results = [];

  // ─── Test 1: Arithmetic Operators ───────────────────────────────
  try {
    const { arithmeticOps } = require('./solution');
    const r = arithmeticOps(10, 3);
    assert.strictEqual(r.sum, 13);
    assert.strictEqual(r.difference, 7);
    assert.strictEqual(r.product, 30);
    assert.ok(Math.abs(r.quotient - 10 / 3) < 0.0001);
    assert.strictEqual(r.remainder, 1);
    assert.strictEqual(r.power, 1000);

    // Test with negative numbers
    const r2 = arithmeticOps(-6, 4);
    assert.strictEqual(r2.sum, -2);
    assert.strictEqual(r2.difference, -10);
    assert.strictEqual(r2.product, -24);
    assert.strictEqual(r2.quotient, -1.5);
    assert.strictEqual(r2.remainder, -2);
    assert.strictEqual(r2.power, 1296);

    results.push({ name: 'arithmeticOps returns correct results', passed: true });
  } catch (error) {
    results.push({ name: 'arithmeticOps returns correct results', passed: false, error: error.message });
  }

  // ─── Test 2: Comparison Operators (numbers) ─────────────────────
  try {
    const { compareValues } = require('./solution');
    const r = compareValues(10, 3);
    assert.strictEqual(r.equal, false);
    assert.strictEqual(r.strictEqual, false);
    assert.strictEqual(r.notEqual, true);
    assert.strictEqual(r.strictNotEqual, true);
    assert.strictEqual(r.greater, true);
    assert.strictEqual(r.less, false);
    assert.strictEqual(r.greaterOrEqual, true);
    assert.strictEqual(r.lessOrEqual, false);
    results.push({ name: 'compareValues with numbers', passed: true });
  } catch (error) {
    results.push({ name: 'compareValues with numbers', passed: false, error: error.message });
  }

  // ─── Test 3: Comparison Operators (loose vs strict) ─────────────
  try {
    const { compareValues } = require('./solution');
    const r = compareValues(5, "5");
    assert.strictEqual(r.equal, true);          // 5 == "5" → true
    assert.strictEqual(r.strictEqual, false);    // 5 === "5" → false
    assert.strictEqual(r.notEqual, false);       // 5 != "5" → false
    assert.strictEqual(r.strictNotEqual, true);  // 5 !== "5" → true
    results.push({ name: 'compareValues loose vs strict equality', passed: true });
  } catch (error) {
    results.push({ name: 'compareValues loose vs strict equality', passed: false, error: error.message });
  }

  // ─── Test 4: Logical Operators ──────────────────────────────────
  try {
    const { logicalOps } = require('./solution');

    // Boolean values
    const r1 = logicalOps(true, false);
    assert.strictEqual(r1.and, false);
    assert.strictEqual(r1.or, true);
    assert.strictEqual(r1.notA, false);
    assert.strictEqual(r1.notB, true);

    // Truthy/falsy values (short-circuit)
    const r2 = logicalOps(1, 0);
    assert.strictEqual(r2.and, 0);
    assert.strictEqual(r2.or, 1);
    assert.strictEqual(r2.notA, false);
    assert.strictEqual(r2.notB, true);

    // String values
    const r3 = logicalOps("hello", "");
    assert.strictEqual(r3.and, "");
    assert.strictEqual(r3.or, "hello");
    assert.strictEqual(r3.notA, false);
    assert.strictEqual(r3.notB, true);

    results.push({ name: 'logicalOps with booleans and truthy/falsy', passed: true });
  } catch (error) {
    results.push({ name: 'logicalOps with booleans and truthy/falsy', passed: false, error: error.message });
  }

  // ─── Test 5: Assignment Operators ───────────────────────────────
  try {
    const { assignmentOps } = require('./solution');
    const r = assignmentOps(10, 3);
    assert.strictEqual(r.afterAdd, 13);    // 10 + 3 = 13
    assert.strictEqual(r.afterSub, 10);    // 13 - 3 = 10
    assert.strictEqual(r.afterMul, 30);    // 10 * 3 = 30
    assert.strictEqual(r.afterDiv, 10);    // 30 / 3 = 10
    assert.strictEqual(r.afterMod, 1);     // 10 % 3 = 1

    const r2 = assignmentOps(20, 7);
    assert.strictEqual(r2.afterAdd, 27);   // 20 + 7 = 27
    assert.strictEqual(r2.afterSub, 20);   // 27 - 7 = 20
    assert.strictEqual(r2.afterMul, 140);  // 20 * 7 = 140
    assert.strictEqual(r2.afterDiv, 20);   // 140 / 7 = 20
    assert.strictEqual(r2.afterMod, 6);    // 20 % 7 = 6

    results.push({ name: 'assignmentOps sequential operations', passed: true });
  } catch (error) {
    results.push({ name: 'assignmentOps sequential operations', passed: false, error: error.message });
  }

  // ─── Test 6: Nullish Coalescing & Optional Chaining ─────────────
  try {
    const { nullishAndOptional } = require('./solution');

    // Full object
    const r1 = nullishAndOptional({
      name: "Alice",
      address: { city: "Paris", zip: "75001" },
      contact: { phone: "123-456" },
    });
    assert.strictEqual(r1.name, "Alice");
    assert.strictEqual(r1.city, "Paris");
    assert.strictEqual(r1.zip, "75001");
    assert.strictEqual(r1.phone, "123-456");

    // Empty object — all defaults
    const r2 = nullishAndOptional({});
    assert.strictEqual(r2.name, "Unknown");
    assert.strictEqual(r2.city, "N/A");
    assert.strictEqual(r2.zip, "00000");
    assert.strictEqual(r2.phone, "No phone");

    // Empty strings should NOT be replaced by ?? (they are not null/undefined)
    const r3 = nullishAndOptional({ name: "", address: { city: "" } });
    assert.strictEqual(r3.name, "");
    assert.strictEqual(r3.city, "");
    assert.strictEqual(r3.zip, "00000");
    assert.strictEqual(r3.phone, "No phone");

    results.push({ name: 'nullishAndOptional with ?. and ??', passed: true });
  } catch (error) {
    results.push({ name: 'nullishAndOptional with ?. and ??', passed: false, error: error.message });
  }

  // ─── Test 7: Bitwise Operators ──────────────────────────────────
  try {
    const { bitwiseOps } = require('./solution');
    const r = bitwiseOps(5, 3);
    assert.strictEqual(r.and, 1);         // 0101 & 0011 = 0001
    assert.strictEqual(r.or, 7);          // 0101 | 0011 = 0111
    assert.strictEqual(r.xor, 6);         // 0101 ^ 0011 = 0110
    assert.strictEqual(r.notA, -6);       // ~5 = -6
    assert.strictEqual(r.leftShift, 10);  // 5 << 1 = 1010 = 10
    assert.strictEqual(r.rightShift, 2);  // 5 >> 1 = 0010 = 2

    // Additional test
    const r2 = bitwiseOps(12, 10);
    assert.strictEqual(r2.and, 8);        // 1100 & 1010 = 1000
    assert.strictEqual(r2.or, 14);        // 1100 | 1010 = 1110
    assert.strictEqual(r2.xor, 6);        // 1100 ^ 1010 = 0110
    assert.strictEqual(r2.notA, -13);     // ~12 = -13
    assert.strictEqual(r2.leftShift, 24); // 12 << 1 = 11000 = 24
    assert.strictEqual(r2.rightShift, 6); // 12 >> 1 = 0110 = 6

    results.push({ name: 'bitwiseOps returns correct bit operations', passed: true });
  } catch (error) {
    results.push({ name: 'bitwiseOps returns correct bit operations', passed: false, error: error.message });
  }

  // ─── Test 8: Ternary Operator ───────────────────────────────────
  try {
    const { ternaryGrade } = require('./solution');
    assert.strictEqual(ternaryGrade(100), "A");
    assert.strictEqual(ternaryGrade(95), "A");
    assert.strictEqual(ternaryGrade(90), "A");
    assert.strictEqual(ternaryGrade(89), "B");
    assert.strictEqual(ternaryGrade(82), "B");
    assert.strictEqual(ternaryGrade(80), "B");
    assert.strictEqual(ternaryGrade(79), "C");
    assert.strictEqual(ternaryGrade(71), "C");
    assert.strictEqual(ternaryGrade(70), "C");
    assert.strictEqual(ternaryGrade(69), "D");
    assert.strictEqual(ternaryGrade(65), "D");
    assert.strictEqual(ternaryGrade(60), "D");
    assert.strictEqual(ternaryGrade(59), "F");
    assert.strictEqual(ternaryGrade(42), "F");
    assert.strictEqual(ternaryGrade(0), "F");
    results.push({ name: 'ternaryGrade returns correct grades', passed: true });
  } catch (error) {
    results.push({ name: 'ternaryGrade returns correct grades', passed: false, error: error.message });
  }

  return results;
}

module.exports = { runTests };
