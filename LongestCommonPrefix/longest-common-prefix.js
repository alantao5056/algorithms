/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  let prefix = '';
  let minLength = shortestInt(strs);
  for (let i = 0; i < minLength; i++) {
    let j;
    for (j = 0; j < strs.length - 1; j++) {
      if (strs[j][i] !== strs[j + 1][i]) {
        return prefix;
      }
    }
    prefix += strs[j][i];
  }
  return prefix;
};

const shortestInt = function (strs) {
  let num = strs[0].length;
  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < num) {
      num = strs[i].length;
    }
  }
  return num;
}

module.exports = longestCommonPrefix;