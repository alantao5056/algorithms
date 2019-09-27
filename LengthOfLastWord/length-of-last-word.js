/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  s = s.trim();
  const string = s.split(' ');
  return string[string.length - 1].length;
};

module.exports = lengthOfLastWord;