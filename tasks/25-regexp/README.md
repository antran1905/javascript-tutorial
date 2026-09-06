# Task 25: Regular Expressions

Regular expressions (regex) are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the `exec()` and `test()` methods of `RegExp`, and with the `match()`, `matchAll()`, `replace()`, `replaceAll()`, `search()`, and `split()` methods of `String`.

## Creating Regular Expressions

You can construct a regular expression in two ways:

1. **Using a regular expression literal**, which consists of a pattern enclosed between slashes:
```javascript
const regex = /ab+c/;
```

2. **Calling the constructor function** of the `RegExp` object:
```javascript
const regex = new RegExp('ab+c');
```

## Common Flags

Regular expressions have optional flags that allow for functionality like global searching and case-insensitive searching.

- `g` (global search): matches all instances, not just the first one.
- `i` (case-insensitive search): matches regardless of case.
- `m` (multi-line search): treats beginning and end characters (`^` and `$`) as working over multiple lines.

```javascript
const regexGlobal = /hello/g;
const regexCaseInsensitive = /hello/i;
```

## Regular Expression Methods

- `test()`: Executes a search for a match between a regular expression and a specified string. Returns `true` or `false`.
- `match()`: Retrieves the matches when matching a string against a regular expression.
- `replace()`: Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
- `search()`: Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
- `split()`: Uses a regular expression or a fixed string to break a string into an array of substrings.

## Character Classes

- `\d`: Matches a digit (0-9).
- `\w`: Matches any alphanumeric character from the basic Latin alphabet, including the underscore.
- `\s`: Matches a single white space character, including space, tab, form feed, line feed, and other Unicode spaces.
- `.`: Matches any single character except line terminators.
- `[a-z]`: Matches any character in the specified range.
- `[^abc]`: Matches any character that is not enclosed.

## Quantifiers

- `+`: Matches the preceding item 1 or more times.
- `*`: Matches the preceding item 0 or more times.
- `?`: Matches the preceding item 0 or 1 time.
- `{n}`: Matches exactly `n` occurrences of the preceding item.
- `{n,m}`: Matches at least `n` and at most `m` occurrences of the preceding item.

## Anchors

- `^`: Matches the beginning of input.
- `$`: Matches the end of input.

## Groups

- `(x)`: Matches `x` and remembers the match (capturing group).
- `(?:x)`: Matches `x` but does not remember the match (non-capturing group).

## Instructions

Implement the following functions in `solution.js`:
1. `isValidEmail(str)`: Basic email validation.
2. `extractNumbers(str)`: Extract all continuous digits.
3. `replaceVowels(str, replacement)`: Replace all vowels.
4. `isStrongPassword(str)`: Validate strong password.
5. `extractHashtags(str)`: Extract words after `#`.
6. `maskCreditCard(str)`: Mask all but the last 4 digits.

## Run Tests
Run the tests to check your implementation:
```bash
npm run check:task 25
```
