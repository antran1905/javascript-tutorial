# Task 05: Objects

Objects allow us to store collections of data in key-value pairs.

## Concepts

### Creating and Accessing Objects
Objects are defined using curly braces `{}`. Keys are usually strings, and values can be anything.
```javascript
const person = {
  firstName: 'Jane',
  age: 28
};

// Dot notation
person.age // 28

// Bracket notation (useful when the key name is stored in a variable)
person['firstName'] // 'Jane'
```

### Shorthand Syntax
If your key name is the same as the variable holding the value, you can use shorthand!
```javascript
const name = 'Tom';
const age = 30;
const obj = { name, age }; // Equivalent to { name: name, age: age }
```

### Object Methods
- `Object.keys(obj)`: Returns an array of the object's keys.
- `obj.hasOwnProperty('keyName')` or `'keyName' in obj`: Checks if a key exists.

### Merging Objects
You can spread objects into a new object to merge them. Properties defined later will overwrite earlier ones.
```javascript
const merged = { ...obj1, ...obj2 };
```

## Instructions

Complete the functions in `solution.js`.
