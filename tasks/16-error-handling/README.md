# Task 16: Error Handling

In this task, we will explore how to gracefully handle runtime errors in JavaScript using `try...catch...finally` and how to throw custom exceptions.

## 📖 Concepts

### The `try...catch...finally` Statement
The `try` block lets you test a block of code for errors. The `catch` block lets you handle the error if one occurs. The `finally` block executes regardless of whether an error occurred or not, making it useful for cleanup operations.

```javascript
try {
  // Code that may throw an error
  const result = riskyOperation();
} catch (error) {
  // Executes if an error is thrown in the try block
  console.error("An error occurred:", error.message);
} finally {
  // Always executes at the end
  console.log("Cleanup operations");
}
```

### Throwing Errors
You can generate your own errors using the `throw` statement. It's best practice to throw instances of the built-in `Error` object rather than plain strings.

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}
```

### Built-in Error Types
JavaScript has several built-in error types for different situations:
- `Error`: Generic error.
- `TypeError`: Value is not of the expected type.
- `RangeError`: Number is outside an allowable range of values.
- `SyntaxError`: Invalid JavaScript syntax (usually occurs during parsing).
- `ReferenceError`: Referencing an undeclared variable.

### Error Object Properties
When an error is caught, the error object usually has three important properties:
- `error.message`: Human-readable description of the error.
- `error.name`: Name of the error type (e.g., 'TypeError').
- `error.stack`: Stack trace indicating where the error originated.

### Custom Error Classes
You can create custom error types by extending the built-in `Error` class. This is useful for providing specific error types in your application.

```javascript
class DatabaseError extends Error {
  constructor(message, query) {
    super(message);
    this.name = 'DatabaseError';
    this.query = query;
  }
}

try {
  throw new DatabaseError("Connection failed", "SELECT * FROM users");
} catch (err) {
  if (err instanceof DatabaseError) {
    console.log("DB Error in query:", err.query);
  }
}
```

### Throwing vs Returning Errors
- **Throwing**: Use for exceptional, unexpected situations (e.g., missing file, network failure).
- **Returning Objects**: Use for expected validation failures (e.g., `{ success: false, error: 'Invalid format' }`).

### Retry Patterns
Sometimes an error is temporary (like a network timeout). A retry pattern attempts the operation again if it fails.

```javascript
function retry(fn, maxRetries) {
  let lastError;
  for (let i = 0; i < maxRetries; i++) {
    try {
      return fn(); // Return on success
    } catch (err) {
      lastError = err; // Store error and loop again
    }
  }
  throw lastError; // Throw if max retries exceeded
}
```

## ✏️ Instructions

Open `solution.js` and implement the following:

1.  **safeDivide**: Divide `a` by `b`, but `throw new Error('Division by zero')` if `b` is 0.
2.  **parseJSON**: Use `try...catch` with `JSON.parse`. Return `{ success: true, data }` on success, or `{ success: false, error: <msg> }` on failure.
3.  **validateAge**: Throw a `TypeError` if not a number, a `RangeError` if < 0 or > 150. Otherwise return the age.
4.  **ValidationError**: Implement a custom error class extending `Error` that accepts a message and sets a `field` property.
5.  **validateEmail**: Throw a `ValidationError` with `field='email'` if there is no `@` in the string.
6.  **retryOperation**: A function that tries to execute an operation. If it throws, catch it and retry up to `maxRetries` times.

## 💡 Hints

- When creating custom errors, remember to call `super(message)` in the constructor before using `this`.
- In `parseJSON`, the `JSON.parse` function inherently throws a `SyntaxError` if the string is invalid JSON.
- For `retryOperation`, a simple `while` or `for` loop combined with `try/catch` is the most straightforward approach. If the operation succeeds, you can `return` immediately out of the loop.

To test your implementation, run:

```bash
npm run check:task 16
```
