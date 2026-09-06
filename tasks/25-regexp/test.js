const assert = require('assert');

function runTests() {
  const results = [];
  const {
    isValidEmail,
    extractNumbers,
    replaceVowels,
    isStrongPassword,
    extractHashtags,
    maskCreditCard
  } = require('./solution');

  try {
    assert.strictEqual(isValidEmail('test@example.com'), true);
    assert.strictEqual(isValidEmail('invalid-email'), false);
    assert.strictEqual(isValidEmail('a@b.c'), true);
    results.push({ name: 'isValidEmail', passed: true });
  } catch (error) {
    results.push({ name: 'isValidEmail', passed: false, error: error.message });
  }

  try {
    assert.deepStrictEqual(extractNumbers('abc 123 def 456'), ['123', '456']);
    assert.deepStrictEqual(extractNumbers('no numbers here'), []);
    assert.deepStrictEqual(extractNumbers('1a2b3c'), ['1', '2', '3']);
    results.push({ name: 'extractNumbers', passed: true });
  } catch (error) {
    results.push({ name: 'extractNumbers', passed: false, error: error.message });
  }

  try {
    assert.strictEqual(replaceVowels('hello', '*'), 'h*ll*');
    assert.strictEqual(replaceVowels('APPLE', '-'), '-PPL-');
    assert.strictEqual(replaceVowels('rhythm', '!'), 'rhythm');
    results.push({ name: 'replaceVowels', passed: true });
  } catch (error) {
    results.push({ name: 'replaceVowels', passed: false, error: error.message });
  }

  try {
    assert.strictEqual(isStrongPassword('Abc1!def'), true);
    assert.strictEqual(isStrongPassword('weak'), false); // too short
    assert.strictEqual(isStrongPassword('NoSpecialChar123'), false);
    assert.strictEqual(isStrongPassword('nouppercase1!'), false);
    assert.strictEqual(isStrongPassword('NOLOWERCASE1!'), false);
    results.push({ name: 'isStrongPassword', passed: true });
  } catch (error) {
    results.push({ name: 'isStrongPassword', passed: false, error: error.message });
  }

  try {
    assert.deepStrictEqual(extractHashtags('Hello #world #js'), ['world', 'js']);
    assert.deepStrictEqual(extractHashtags('No tags here'), []);
    assert.deepStrictEqual(extractHashtags('#only #tags'), ['only', 'tags']);
    results.push({ name: 'extractHashtags', passed: true });
  } catch (error) {
    results.push({ name: 'extractHashtags', passed: false, error: error.message });
  }

  try {
    assert.strictEqual(maskCreditCard('4111-1111-1111-1111'), '************1111');
    assert.strictEqual(maskCreditCard('1234 5678 1234 5678'), '************5678');
    assert.strictEqual(maskCreditCard('12345'), '*2345');
    results.push({ name: 'maskCreditCard', passed: true });
  } catch (error) {
    results.push({ name: 'maskCreditCard', passed: false, error: error.message });
  }

  return results;
}

module.exports = { runTests };
