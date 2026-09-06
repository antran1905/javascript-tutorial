# Task 20: Async/Await

In this task, we will explore **async/await**, a modern syntactic feature that allows you to write promise-based asynchronous code as if it were synchronous, making it much easier to read and maintain.

## 📖 Concepts

### The `async` function
Placing the `async` keyword before a function ensures that the function always returns a Promise. If the function returns a non-promise value, it is automatically wrapped in a resolved promise.

```javascript
async function greet() {
  return "Hello"; // Automatically wrapped in Promise.resolve("Hello")
}

greet().then(console.log); // Output: Hello
```

### The `await` keyword
The `await` keyword can only be used inside an `async` function. It makes JavaScript pause execution of the function until the awaited Promise settles (resolves or rejects), and then returns its result.

```javascript
async function fetchUser() {
  // Execution pauses here until fetching is done
  const response = await fetch('/api/user');
  const user = await response.json();
  return user;
}
```

### Error Handling with Try/Catch
Because `await` pauses execution, you can use standard synchronous `try...catch` blocks to handle rejected promises, avoiding deeply nested `.catch()` callbacks.

```javascript
async function safeFetch() {
  try {
    const data = await riskyAsyncOperation();
    return data;
  } catch (error) {
    console.error("Async operation failed:", error);
    return null; // Return fallback value
  }
}
```

### Sequential vs Parallel Execution
Understanding when things run sequentially vs concurrently is critical.

**Sequential (slower):**
```javascript
async function sequential() {
  const user = await fetchUser();       // Waits...
  const posts = await fetchPosts(user); // Waits...
}
```

**Parallel (faster):**
To execute promises at the same time, trigger them first, then `await Promise.all()`.
```javascript
async function parallel() {
  // Both start immediately
  const p1 = fetchUser();
  const p2 = fetchConfig();
  
  // Await both to finish
  const [user, config] = await Promise.all([p1, p2]);
}
```

### Processing Items
When processing an array of items asynchronously, `for...of` executes sequentially, while `Array.map` combined with `Promise.all` executes in parallel.

## ✏️ Instructions

Open `solution.js` and implement the following functions using `async/await`:

1.  **asyncAdd**: An async function that simply adds `a` and `b`. Notice how the async keyword wraps the return value in a Promise automatically.
2.  **fetchSequential**: Given an array of URLs, use `simulateFetch` to fetch each URL one by one, waiting for the previous to finish. Return an array of results.
3.  **fetchParallel**: Given an array of URLs, use `simulateFetch` to fetch all of them concurrently. Use `Promise.all`. Return the array of results.
4.  **asyncRetry**: Execute `fn()`. If it rejects, use a `try...catch` block in a loop to retry up to `maxRetries` times.
5.  **processItems**: Iterate through an array of items. Call `asyncProcessor(item)` for each item sequentially, waiting for it to finish before moving to the next. Return the array of processed results.

## 💡 Hints

- For `fetchSequential` and `processItems`, use a standard `for...of` loop or a traditional `for` loop. `Array.prototype.forEach` does **not** work sequentially with `await`!
- For `fetchParallel`, map the array of urls to an array of pending promises: `urls.map(url => simulateFetch(url))`, then await `Promise.all()` on that array.
- For `asyncRetry`, wrap the `await fn()` in a `try...catch` inside a `for` loop. If it succeeds, `return` immediately. If it fails and you run out of retries, throw the error.

To test your implementation, run:

```bash
npm run check:task 20
```
