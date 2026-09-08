# Task 19: Classes & OOP

In this task, we will explore Object-Oriented Programming (OOP) in JavaScript using ES6 **Classes**. Classes are syntactic sugar over JavaScript's existing prototype-based inheritance.

## 📖 Concepts

### Class Syntax & Methods
A class acts as a blueprint for creating objects. The `constructor` method is a special method for initializing objects created with a class. Methods can be defined directly on the class body.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a noise.`;
  }
}

const dog = new Animal("Rex");
console.log(dog.speak()); // "Rex makes a noise."
```

### Getters and Setters
Getters and setters allow you to define methods that are accessed like properties. They are great for adding validation or computing values dynamically.

```javascript
class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  // Accessed as a property: person.fullName
  get fullName() {
    return `${this.first} ${this.last}`;
  }

  // Assigned as a property: person.fullName = "John Doe"
  set fullName(name) {
    [this.first, this.last] = name.split(' ');
  }
}
```

### Inheritance and `super`
Classes can inherit from other classes using the `extends` keyword. If a subclass has a constructor, it must call `super()` before using `this`.

```javascript
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calls Animal's constructor
    this.breed = breed;
  }

  speak() {
    return `${this.name} barks.`; // Overrides parent method
  }
}
```

### Method Chaining
By returning `this` at the end of a method, you allow multiple methods to be called in a single continuous statement.

```javascript
class Builder {
  constructor() { this.parts = []; }
  addA() { this.parts.push('A'); return this; }
  addB() { this.parts.push('B'); return this; }
}
const b = new Builder().addA().addB(); // Chaining!
```

### Static Methods
Static methods are called directly on the class, not on instances. They are useful for utility functions.

```javascript
class MathUtils {
  static square(x) {
    return x * x;
  }
}
MathUtils.square(4); // 16
```

## ✏️ Instructions

Open `solution.js` and implement the following classes:

1.  **Calculator**: Implement `add(v)`, `subtract(v)`, `multiply(v)`, `divide(v)`, `reset()`, and `getResult()`. All methods except `getResult()` should return `this` to enable method chaining.
2.  **EventEmitter**: Implement an event bus. `on(event, callback)` stores listeners. `emit(event, ...args)` calls all listeners for that event. `off(event, callback)` removes a listener.
3.  **LinkedList**: A simple linked list with `append(value)`, `prepend(value)`, `find(value)`, `toArray()`, and a `get size()` getter.
4.  **Stack**: A LIFO (Last In First Out) structure with `push(value)`, `pop()`, `peek()`, `isEmpty()`, and a `get size()` getter.
5.  **Shapes**: Complete the inheritance hierarchy. `Circle` and `Rectangle` must `extend Shape`. Override the `getArea()` and `getPerimeter()` methods appropriately.

## 💡 Hints

- In `EventEmitter`, use an object (or Map) where keys are event names and values are arrays of callback functions.
- In `LinkedList`, you will likely need a helper `Node` class (which can just be an object `{ value, next }`). Keep track of `head` and optionally `tail`.
- Method chaining requires exactly `return this;` at the end of the chainable methods.
- For the `Shape` extensions, remember to call `super()` in your child constructors if they define their own constructor parameters.

To test your implementation, run:

```bash
npm run check:task 19
```
