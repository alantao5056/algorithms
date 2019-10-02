/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  let letterFound = false;
  let result = '';
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') {
      if (letterFound) {
        break;
      }
    } else {
      result = s[i] + result;
      letterFound = true;
    }
  }
  return result.length;
};



module.exports = lengthOfLastWord;