# Task 22: Type Conversion

JavaScript is a dynamically typed language, which means you don't have to specify the data type of a variable when you declare it, and data types are automatically converted as-needed during script execution. Understanding how JavaScript converts types, both explicitly and implicitly, is crucial for avoiding bugs.

## Explicit Conversion
You can explicitly convert a value to another type using built-in functions:
```javascript
// To Number
Number("123"); // 123
Number("abc"); // NaN (Not a Number)

// To String
String(123); // "123"
String(false); // "false"

// To Boolean
Boolean(1); // true
Boolean(""); // false

// Parsing Numbers
parseInt("12.34px", 10); // 12
parseFloat("12.34px"); // 12.34
```

## Implicit Coercion
JavaScript often implicitly converts values to the expected type. This can lead to unexpected results.
```javascript
"5" + 3; // "53" (number 3 is coerced to string)
"5" - 3; // 2 (string "5" is coerced to number)
true + 1; // 2 (true is coerced to 1)
```

## Truthy and Falsy Values
In JavaScript, a truthy value is a value that is considered `true` when encountered in a Boolean context. All values are truthy unless they are defined as falsy.
The following are the only falsy values in JavaScript:
- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

## The `typeof` Operator
The `typeof` operator returns a string indicating the type of the unevaluated operand.
```javascript
typeof 42; // "number"
typeof "hello"; // "string"
typeof true; // "boolean"
```
**Quirks**:
```javascript
typeof null; // "object" (this is a known bug in JavaScript)
typeof NaN; // "number"
typeof undefined; // "undefined"
```

## `==` vs `===`
- `==` (Loose equality): Compares two values for equality, after converting both values to a common type (coercion).
- `===` (Strict equality): Compares two values for equality. No type conversion is performed.

```javascript
"5" == 5; // true
"5" === 5; // false
0 == false; // true
0 === false; // false
null == undefined; // true
null === undefined; // false
```

## Instructions

Implement the following functions in `solution.js`:

1.  **`toNumber(value)`**
    Convert the given `value` to a number using the `Number()` function and return the result.
2.  **`toStringValue(value)`**
    Convert the given `value` to a string using the `String()` function and return the result.
3.  **`toBooleanValue(value)`**
    Convert the given `value` to a boolean using the `Boolean()` function and return the result.
4.  **`explicitParsing(str)`**
    Parse the given string `str`. Return an object with two properties: `int` containing the integer parsed with `parseInt(str, 10)`, and `float` containing the float parsed with `parseFloat(str)`.
5.  **`coercionQuiz()`**
    Return an object containing the results of evaluating the following expressions exactly as written:
    - `stringPlusNumber`: `"5" + 3`
    - `stringMinusNumber`: `"5" - 3`
    - `booleanPlusNumber`: `true + 1`
    - `nullPlusNumber`: `null + 5`
    - `undefinedPlusNumber`: `undefined + 5`
    - `emptyStringToNumber`: `Number("")`
    - `falseToNumber`: `Number(false)`
6.  **`strictVsLoose(a, b)`**
    Given two values `a` and `b`, return an object with two properties: `loose` containing the result of `a == b`, and `strict` containing the result of `a === b`.

## Hints
- Pay attention to how `undefined` and `null` behave in numeric operations.
- `Number("")` and `Number(false)` both evaluate to `0`.

Run your code to check your solution:
```bash
npm run check:task 22
```
