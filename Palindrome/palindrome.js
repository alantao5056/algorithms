/**
 * @param {string} x
 * @return {boolean}
 */
var isPalindrome = function (word) {
  if (word === '') {
    return false;
  }

  let i = 0;
  let j = word.length - 1;

  while (i < j) {
    if (word[i] !== word[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;

};

module.exports = isPalindrome;