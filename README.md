# 🚀 JavaScript Tutorial — From Beginner to Expert

> A hands-on, project-based JavaScript course with **20 progressive coding tasks** and an **automated progress checker**. No frameworks, no complexity — just pure JavaScript.

---

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [How It Works](#-how-it-works)
- [How to Learn](#-how-to-learn)
- [Task Overview](#-task-overview)
- [Checking Your Progress](#-checking-your-progress)
- [Project Structure](#-project-structure)
- [Tips for Success](#-tips-for-success)
- [Troubleshooting](#-troubleshooting)

---

## ⚡ Quick Start

### Prerequisites

- **Node.js** (version 14 or higher) — [Download here](https://nodejs.org/)
- A **code editor** (we recommend [VS Code](https://code.visualstudio.com/))
- Basic computer skills (no prior programming experience needed!)

### Setup

```bash
# 1. Clone or download this repository
git clone <repository-url>
cd javascript-tutorial

# 2. Check your progress (should show all tasks as TODO)
npm run check
```

That's it! No `npm install` needed — this project uses **zero external dependencies**.

---

## 🎯 How It Works

This project contains **20 tasks** organized into 4 difficulty levels:

| Level | Tasks | Description |
|-------|-------|-------------|
| 🌱 **Beginner** | 01–05 | Variables, strings, numbers, arrays, objects |
| 📘 **Elementary** | 06–10 | Functions, arrow functions, conditionals, loops, scope |
| ⚡ **Intermediate** | 11–15 | Array methods, object methods, destructuring, spread/rest, template literals |
| 🔥 **Advanced** | 16–20 | Error handling, closures, promises, classes, async/await |

Each task has:

```
tasks/XX-task-name/
├── README.md       ← 📖 Read this first! (explanation + instructions)
├── solution.js     ← ✏️ Write your code here
└── test.js         ← 🧪 Automated tests (don't modify!)
```

---

## 📖 How to Learn

### Step-by-Step Workflow

```
┌─────────────────────────────────────────────────────┐
│  1. Read the Task README                            │
│     └── Understand the concept & what's required    │
│                                                     │
│  2. Open solution.js                                │
│     └── Read the TODO comments and function stubs   │
│                                                     │
│  3. Write Your Code                                 │
│     └── Implement each function following the docs  │
│                                                     │
│  4. Check Your Work                                 │
│     └── Run: npm run check                          │
│                                                     │
│  5. Iterate Until All Tests Pass ✅                 │
│     └── Read error messages, fix, and re-run        │
│                                                     │
│  6. Move to the Next Task 🚀                        │
└─────────────────────────────────────────────────────┘
```

### Detailed Learning Guide

#### 1️⃣ Read the Task README

Each task's `README.md` contains:
- **Concept explanation** with examples
- **Instructions** on what to implement
- **Hints** to help if you get stuck

```bash
# Example: Open the first task
cat tasks/01-variables/README.md
# Or better yet, open it in your code editor!
```

#### 2️⃣ Open the Solution File

The `solution.js` file in each task folder contains:
- Function stubs with `// TODO: Your code here` comments
- JSDoc comments explaining what each function should do
- Example inputs and expected outputs

```javascript
// Example of what you'll see:

/**
 * Add two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 *
 * Examples:
 *   add(2, 3) → 5
 *   add(-1, 1) → 0
 */
function add(a, b) {
  // TODO: Your code here
}
```

#### 3️⃣ Write Your Solution

Replace the `// TODO: Your code here` comments with your implementation:

```javascript
function add(a, b) {
  return a + b;  // ✅ Your solution!
}
```

#### 4️⃣ Check Your Progress

```bash
npm run check           # Check all tasks
npm run check:verbose   # See detailed error messages
npm run check:task 1    # Check only task 1
```

---

## 📚 Task Overview

### 🌱 Beginner (Tasks 01–05)

| # | Task | What You'll Learn |
|---|------|-------------------|
| 01 | **Variables & Data Types** | `let`, `const`, `var`, strings, numbers, booleans, null, undefined |
| 02 | **Strings** | String methods, slicing, searching, manipulation |
| 03 | **Numbers & Math** | Arithmetic, `Math` object, rounding, parsing |
| 04 | **Arrays** | Creating arrays, accessing elements, `push`, `pop`, `slice`, `splice` |
| 05 | **Objects** | Object literals, properties, methods, `Object.keys/values` |

### 📘 Elementary (Tasks 06–10)

| # | Task | What You'll Learn |
|---|------|-------------------|
| 06 | **Functions** | Declaration, expression, parameters, return values, default params |
| 07 | **Arrow Functions** | Arrow syntax, implicit return, when to use them |
| 08 | **Conditionals** | `if/else`, `switch`, ternary operator, truthiness |
| 09 | **Loops** | `for`, `while`, `do-while`, `for...of`, `for...in`, `break/continue` |
| 10 | **Scope & Hoisting** | Block scope, function scope, hoisting, `var` vs `let` vs `const` |

### ⚡ Intermediate (Tasks 11–15)

| # | Task | What You'll Learn |
|---|------|-------------------|
| 11 | **Array Methods** | `map`, `filter`, `reduce`, `find`, `some`, `every`, `sort` |
| 12 | **Object Methods** | `Object.keys`, `Object.values`, `Object.entries`, `Object.assign` |
| 13 | **Destructuring** | Array & object destructuring, defaults, nested, renaming |
| 14 | **Spread & Rest** | Spread syntax, rest parameters, copying, merging |
| 15 | **Template Literals** | String interpolation, multiline strings, tagged templates |

### 🔥 Advanced (Tasks 16–20)

| # | Task | What You'll Learn |
|---|------|-------------------|
| 16 | **Error Handling** | `try/catch/finally`, throwing errors, custom error classes |
| 17 | **Closures** | Lexical scope, closure patterns, data privacy, factory functions |
| 18 | **Promises** | Creating promises, `.then/.catch`, chaining, `Promise.all` |
| 19 | **Classes & OOP** | `class` syntax, constructors, methods, inheritance, `super` |
| 20 | **Async/Await** | `async` functions, `await`, error handling, parallel execution |

### 🌟 Bonus Tasks (21+)

| # | Task | What You'll Learn |
|---|------|-------------------|
| 21 | **Operators** | Arithmetic, comparison (`==` vs `===`), logical, assignment, bitwise, ternary, nullish coalescing (`??`), optional chaining (`?.`) |
| 22 | **Type Conversion** | Explicit (`Number()`, `String()`, `Boolean()`), implicit coercion, `parseInt`/`parseFloat`, truthy/falsy |
| 23 | **Dates** | `Date` object, formatting, get/set methods, date arithmetic, leap years |
| 24 | **JSON** | `JSON.parse`, `JSON.stringify`, deep cloning, pretty printing, error handling |
| 25 | **Regular Expressions** | `RegExp`, `test()`, `match()`, `replace()`, patterns, validation |
| 26 | **The `this` Keyword** | `this` in methods, `call()`, `apply()`, `bind()`, arrow vs regular functions |
| 27 | **Sets & Maps** | `Set` (unique values, set operations), `Map` (key-value pairs, counting, grouping) |

---

## 🧪 Checking Your Progress

### Available Commands

```bash
# Check all tasks at once
npm run check

# See detailed error messages for failed tests
npm run check:verbose

# Check a specific task (e.g., task 5)
npm run check:task 5

# Alternative: run the script directly
node check-progress.js
node check-progress.js --verbose
node check-progress.js --task 5
```

### Understanding the Output

```
  🌱 Beginner
  ───────────────────────────────────────────────────────
  ✅   PASS   Task 01  Variables & Data Types   ██████████████░░░░  100%  (5/5)
  ❌   FAIL   Task 02  Strings                  ████░░░░░░░░░░░░░░   40%  (2/5)
  ⏳   TODO   Task 03  Numbers & Math           No solution file found
```

| Status | Meaning |
|--------|---------|
| ✅ **PASS** | All tests passed! Move to the next task. |
| ❌ **FAIL** | Some tests failed. Use `--verbose` to see details. |
| ⏳ **TODO** | You haven't started this task yet. |
| ⏭️ **SKIP** | Task has no test file (shouldn't happen normally). |

---

## 📂 Project Structure

```
javascript-tutorial/
├── 📄 README.md              ← You are here!
├── 📄 package.json           ← Project configuration
├── 🧪 check-progress.js      ← Progress checker script
│
└── 📁 tasks/
    ├── 📁 01-variables/
    │   ├── 📖 README.md      ← Task explanation & instructions
    │   ├── ✏️ solution.js     ← YOUR CODE GOES HERE
    │   └── 🧪 test.js        ← Automated tests (don't modify!)
    │
    ├── 📁 02-strings/
    │   ├── 📖 README.md
    │   ├── ✏️ solution.js
    │   └── 🧪 test.js
    │
    ├── ... (tasks 03-19)
    │
    └── 📁 20-async-await/
        ├── 📖 README.md
        ├── ✏️ solution.js
        └── 🧪 test.js
```

---

## 💡 Tips for Success

### For Absolute Beginners

1. **Don't skip tasks** — They build on each other! Start with Task 01.
2. **Read error messages** — They tell you exactly what went wrong.
3. **Use `console.log()`** — Print values to understand what your code does.
4. **Google is your friend** — Looking things up is what real developers do!
5. **Take breaks** — If you're stuck for more than 30 minutes, step away.

### For Faster Learners

1. **Try solving before reading hints** — Challenge yourself!
2. **Refactor after passing** — Can you write it more elegantly?
3. **Explore edge cases** — What happens with empty strings, negative numbers, etc.?
4. **Read MDN docs** — [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) is the best JavaScript reference.

### Debugging Tips

```javascript
// 💡 Use console.log() to debug
function myFunction(input) {
  console.log('Input:', input);          // See what comes in
  const result = /* your code */;
  console.log('Result:', result);        // See what comes out
  return result;
}

// 💡 Use typeof to check types
console.log(typeof 42);          // "number"
console.log(typeof "hello");     // "string"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (this is a known JS quirk!)
```

---

## 🔧 Troubleshooting

### "Command not found: node"
You need to install Node.js. Download it from [nodejs.org](https://nodejs.org/).

### "Cannot find module './solution'"
Make sure you've created a `solution.js` file in the task folder. Each task starts with a template — don't rename or move it!

### "Module exports are empty"
Make sure your `solution.js` file has the `module.exports` line at the bottom:
```javascript
module.exports = { functionName1, functionName2 };
```

### "Assertion failed"
Your function is returning the wrong value. Use `npm run check:verbose` to see what was expected vs. what you returned.

### Tests pass locally but I want to reset
Delete your changes in `solution.js` and restore the original function stubs with `// TODO: Your code here`.

---

## 🎓 What's Next?

After completing all 20 tasks, you'll have a solid JavaScript foundation! Here's where to go next:

- 🌐 **DOM Manipulation** — Build interactive web pages
- ⚛️ **React / Vue / Angular** — Learn a frontend framework
- 🖥️ **Node.js** — Build backend servers and APIs
- 📦 **npm Ecosystem** — Explore the vast world of JavaScript packages
- 🧪 **Testing** — Learn Jest, Mocha, or Vitest for professional testing
- 📘 **TypeScript** — Add type safety to your JavaScript

---

<div align="center">

**Happy coding! 🎉**

*If you find this helpful, give it a ⭐ star!*

</div>
