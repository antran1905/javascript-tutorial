# Task 04: Arrays

Arrays allow us to store lists of data. In this task, you'll learn how to read from and modify arrays.

## Concepts

### Accessing Arrays
Arrays are zero-indexed, meaning the first item is at index 0.
```javascript
const colors = ['red', 'green', 'blue'];
colors[0] // 'red'
colors.length // 3
colors[colors.length - 1] // 'blue' (last item)
```

### Array Methods and Mutation
Some array methods modify (mutate) the original array, while others return a new array.
- **Mutating methods**: `.push()`, `.pop()`, `.shift()`, `.unshift()`, `.splice()`
- **Non-mutating methods**: `.slice()`, `.concat()`, `...` (spread operator)

If you want to remove an item without modifying the original array, `.slice()` is very helpful!

### Sets for Uniqueness
A `Set` is a collection of unique values. You can convert an array to a set to automatically remove duplicates, and then convert it back!
```javascript
const uniqueArr = [...new Set([1, 1, 2])]; // [1, 2]
```

## Instructions

Complete the functions in `solution.js`. Pay close attention to requirements that say "return a NEW array" (do not mutate the original array).
