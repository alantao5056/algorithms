/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  let trim = false;
  let result = '';
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ' && trim === true) {
      break;
    } else if (s[i] !== ' ') {
      result = s[i] + result;
      console.log(result);
      trim = true;
    }
  }
  return result.length;
};



module.exports = lengthOfLastWord;