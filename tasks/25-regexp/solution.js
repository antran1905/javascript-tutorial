function isValidEmail(str) {
  // TODO: Test with regex for basic email: something@something.something. Return boolean.
}

function extractNumbers(str) {
  // TODO: Use match() with /\d+/g to find all numbers, return as array of strings. Return empty array if none found.
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
  maskCreditCard
};
