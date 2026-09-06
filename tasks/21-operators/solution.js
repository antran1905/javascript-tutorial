/**
 * Task 21: Operators
 *
 * JavaScript operators let you perform calculations, compare values,
 * combine conditions, and more. Complete each function below.
 */

// ─── 1. Arithmetic Operators ────────────────────────────────────────

/**
 * Perform all arithmetic operations on two numbers.
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {{ sum: number, difference: number, product: number, quotient: number, remainder: number, power: number }}
 *
 * Examples:
 *   arithmeticOps(10, 3) → { sum: 13, difference: 7, product: 30, quotient: 3.3333..., remainder: 1, power: 1000 }
 *   arithmeticOps(7, 2)  → { sum: 9, difference: 5, product: 14, quotient: 3.5, remainder: 1, power: 49 }
 */
function arithmeticOps(a, b) {
  // TODO: Return an object with sum (+), difference (-), product (*),
  //       quotient (/), remainder (%), and power (**)
}

// ─── 2. Comparison Operators ────────────────────────────────────────

/**
 * Compare two values using all comparison operators.
 * @param {*} a - First value
 * @param {*} b - Second value
 * @returns {{ equal: boolean, strictEqual: boolean, notEqual: boolean, strictNotEqual: boolean, greater: boolean, less: boolean, greaterOrEqual: boolean, lessOrEqual: boolean }}
 *
 * Examples:
 *   compareValues(5, "5") → { equal: true, strictEqual: false, notEqual: false, strictNotEqual: true, greater: false, less: false, greaterOrEqual: true, lessOrEqual: true }
 *   compareValues(10, 3)  → { equal: false, strictEqual: false, notEqual: true, strictNotEqual: true, greater: true, less: false, greaterOrEqual: true, lessOrEqual: false }
 */
function compareValues(a, b) {
  // TODO: Return an object with the result of each comparison operator
  //       ==, ===, !=, !==, >, <, >=, <=
}

// ─── 3. Logical Operators ───────────────────────────────────────────

/**
 * Apply logical operators to two values.
 * @param {*} a - First value
 * @param {*} b - Second value
 * @returns {{ and: *, or: *, notA: boolean, notB: boolean }}
 *
 * Examples:
 *   logicalOps(true, false) → { and: false, or: true, notA: false, notB: true }
 *   logicalOps(1, 0)        → { and: 0, or: 1, notA: false, notB: true }
 *   logicalOps("hello", "") → { and: "", or: "hello", notA: false, notB: true }
 */
function logicalOps(a, b) {
  // TODO: Return an object with:
  //   and: a && b
  //   or: a || b
  //   notA: !a
  //   notB: !b
}

// ─── 4. Assignment Operators ────────────────────────────────────────

/**
 * Demonstrate compound assignment operators by applying them sequentially.
 * Starting from `initial`, apply each operation with `value` in order:
 *   1. Add value       (+=)
 *   2. Subtract value  (-=)
 *   3. Multiply by value (*=)
 *   4. Divide by value (/=)
 *   5. Remainder by value (%=)
 *
 * @param {number} initial - Starting number
 * @param {number} value - The value to use in each operation
 * @returns {{ afterAdd: number, afterSub: number, afterMul: number, afterDiv: number, afterMod: number }}
 *
 * Examples:
 *   assignmentOps(10, 3) → { afterAdd: 13, afterSub: 10, afterMul: 30, afterDiv: 10, afterMod: 1 }
 *   // 10+3=13, 13-3=10, 10*3=30, 30/3=10, 10%3=1
 */
function assignmentOps(initial, value) {
  // TODO: Start with `initial`, apply each compound assignment operator
  //       sequentially with `value`, and record the result after each step
}

// ─── 5. Nullish Coalescing & Optional Chaining ──────────────────────

/**
 * Safely access nested object properties using ?. and ??.
 *
 * @param {object} obj - An object that may have nested properties
 * @returns {{ name: string, city: string, zip: string, phone: string }}
 *
 * The function should:
 *   - Get obj.name, defaulting to "Unknown" if null/undefined (use ??)
 *   - Get obj.address?.city, defaulting to "N/A" if null/undefined
 *   - Get obj.address?.zip, defaulting to "00000" if null/undefined
 *   - Get obj.contact?.phone, defaulting to "No phone" if null/undefined
 *
 * Examples:
 *   nullishAndOptional({ name: "Alice", address: { city: "Paris", zip: "75001" } })
 *   → { name: "Alice", city: "Paris", zip: "75001", phone: "No phone" }
 *
 *   nullishAndOptional({})
 *   → { name: "Unknown", city: "N/A", zip: "00000", phone: "No phone" }
 *
 *   nullishAndOptional({ name: "", address: { city: "" } })
 *   → { name: "", city: "", zip: "00000", phone: "No phone" }
 *   // Note: "" is NOT null/undefined, so ?? does NOT replace it!
 */
function nullishAndOptional(obj) {
  // TODO: Use optional chaining (?.) and nullish coalescing (??) to
  //       safely extract properties with fallback defaults
}

// ─── 6. Bitwise Operators ───────────────────────────────────────────

/**
 * Perform bitwise operations on two numbers.
 * @param {number} a - First number (integer)
 * @param {number} b - Second number (integer)
 * @returns {{ and: number, or: number, xor: number, notA: number, leftShift: number, rightShift: number }}
 *
 * Examples:
 *   bitwiseOps(5, 3) → { and: 1, or: 7, xor: 6, notA: -6, leftShift: 10, rightShift: 2 }
 *   // 5 = 0101, 3 = 0011
 *   // AND: 0001=1, OR: 0111=7, XOR: 0110=6, NOT 5: -6
 *   // 5 << 1 = 1010 = 10, 5 >> 1 = 0010 = 2
 */
function bitwiseOps(a, b) {
  // TODO: Return an object with:
  //   and: a & b
  //   or: a | b
  //   xor: a ^ b
  //   notA: ~a
  //   leftShift: a << 1
  //   rightShift: a >> 1
}

// ─── 7. Ternary Operator ────────────────────────────────────────────

/**
 * Use the ternary operator (chained) to convert a numeric score to a letter grade.
 * @param {number} score - A score from 0 to 100
 * @returns {string} The letter grade: "A" (90-100), "B" (80-89), "C" (70-79), "D" (60-69), "F" (below 60)
 *
 * You MUST use the ternary operator (? :), not if/else or switch.
 *
 * Examples:
 *   ternaryGrade(95) → "A"
 *   ternaryGrade(82) → "B"
 *   ternaryGrade(71) → "C"
 *   ternaryGrade(65) → "D"
 *   ternaryGrade(42) → "F"
 */
function ternaryGrade(score) {
  // TODO: Use chained ternary operators to return the grade
  //       score >= 90 ? "A" : score >= 80 ? "B" : ...
}

module.exports = {
  arithmeticOps,
  compareValues,
  logicalOps,
  assignmentOps,
  nullishAndOptional,
  bitwiseOps,
  ternaryGrade,
};
