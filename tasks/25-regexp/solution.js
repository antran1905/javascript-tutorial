function isValidEmail(str) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(str);
}

function extractNumbers(str) {
  const result = str.match(/\d+/g);

  return result || [];
}

function replaceVowels(str, replacement) {
  // TODO: Replace all vowels (a,e,i,o,u) case-insensitive with replacement string.
}

function isStrongPassword(str) {
  // TODO: Return true if: at least 8 chars, has uppercase, has lowercase, has digit, has special char (!@#$%^&*)
}

function extractHashtags(str) {
  // TODO: Find all #hashtags (# followed by word characters). Return array of hashtags without the #. E.g. 'Hello #world #js' -> ['world', 'js']
}

function maskCreditCard(str) {
  // TODO: Given a string of digits (possibly with spaces/dashes), remove non-digits, then replace all but last 4 digits with '*'.
}

module.exports = {
  isValidEmail,
  extractNumbers,
  replaceVowels,
  isStrongPassword,
  extractHashtags,
  maskCreditCard,
};
