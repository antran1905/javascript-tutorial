# Task 21: Operators

Operators are the building blocks of any JavaScript expression. They let you perform calculations, compare values, combine conditions, and much more.

---

## 📖 Concepts

### 1. Arithmetic Operators

Arithmetic operators perform mathematical calculations:

```javascript
let a = 10, b = 3;

a + b    // 13   → Addition
a - b    // 7    → Subtraction
a * b    // 30   → Multiplication
a / b    // 3.33 → Division
a % b    // 1    → Modulus (remainder)
a ** b   // 1000 → Exponentiation (power)
```

### 2. Comparison Operators

Comparison operators compare two values and return a boolean (`true` or `false`):

```javascript
5 == "5"    // true  → Equal (loose, with type coercion)
5 === "5"   // false → Strict equal (no type coercion)
5 != "5"    // false → Not equal (loose)
5 !== "5"   // true  → Strict not equal
5 > 3       // true  → Greater than
5 < 3       // false → Less than
5 >= 5      // true  → Greater than or equal
5 <= 3      // false → Less than or equal
```

> ⚠️ **Important:** Always prefer `===` and `!==` (strict) over `==` and `!=` (loose) to avoid unexpected type coercion bugs!

### 3. Logical Operators

Logical operators combine boolean expressions:

```javascript
true && false   // false → AND (both must be true)
true || false   // true  → OR (at least one must be true)
!true           // false → NOT (inverts the value)
```

**Short-circuit evaluation:**
```javascript
// && returns the first falsy value, or the last value
0 && "hello"       // 0
"hello" && "world" // "world"

// || returns the first truthy value, or the last value
0 || "hello"       // "hello"
"hello" || "world" // "hello"
```

### 4. Assignment Operators

Assignment operators assign and modify values:

```javascript
let x = 10;   // Assignment
x += 5;       // x = x + 5  → 15
x -= 3;       // x = x - 3  → 12
x *= 2;       // x = x * 2  → 24
x /= 4;       // x = x / 4  → 6
x %= 4;       // x = x % 4  → 2
x **= 3;      // x = x ** 3 → 8
```

### 5. Nullish Coalescing (`??`) and Optional Chaining (`?.`)

These modern operators help you handle `null` and `undefined` safely:

```javascript
// ?? returns the right side ONLY if the left side is null or undefined
let name = null ?? "Anonymous";   // "Anonymous"
let count = 0 ?? 42;             // 0 (0 is NOT null/undefined)

// Compare with ||, which treats 0, "", and false as falsy:
let count2 = 0 || 42;            // 42 (0 is falsy!)

// ?. safely accesses nested properties without throwing errors
let user = { address: { city: "Paris" } };
user.address?.city       // "Paris"
user.phone?.number       // undefined (no error!)
user.phone.number        // ❌ TypeError: Cannot read property 'number' of undefined
```

### 6. Bitwise Operators

Bitwise operators work on the binary (bit) representation of numbers:

```javascript
let a = 5;  // Binary: 0101
let b = 3;  // Binary: 0011

a & b    // 1  (0001) → AND
a | b    // 7  (0111) → OR
a ^ b    // 6  (0110) → XOR
~a       // -6        → NOT (inverts all bits)
a << 1   // 10 (1010) → Left shift
a >> 1   // 2  (0010) → Right shift
```

### 7. Ternary (Conditional) Operator

The ternary operator is a shorthand for `if/else`:

```javascript
// condition ? valueIfTrue : valueIfFalse
let age = 20;
let status = age >= 18 ? "adult" : "minor";  // "adult"

// Can be chained (like else if):
let score = 85;
let grade = score >= 90 ? "A"
          : score >= 80 ? "B"
          : score >= 70 ? "C"
          : score >= 60 ? "D"
          : "F";
// grade = "B"
```

---

## ✏️ Instructions

Open `solution.js` and implement all the functions. Each function focuses on a specific category of operators.

Run `npm run check:task 21` to test your solutions.

---

## 💡 Hints

- Use `**` for exponentiation (not `Math.pow()`)
- Remember the difference between `==` (loose) and `===` (strict)
- `??` only checks for `null`/`undefined`, while `||` checks for any falsy value
- `?.` returns `undefined` if the chain is broken — it never throws
- Bitwise operators convert numbers to 32-bit integers first
