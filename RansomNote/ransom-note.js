/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  let hash = {};

  for (let i = 0; i < ransomNote.length; i++) {
    if (hash[ransomNote[i]]) {
      hash[ransomNote[i]] = hash[ransomNote[i]] + 1;
    } else {
      hash[ransomNote[i]] = 1;
    }
  }
  for (let j = 0; j < magazine.length; j++) {
    if (hash[magazine[j]]) {
      hash[magazine[j]] = hash[magazine[j]] - 1;
      if (hash[magazine[j]] === 0) {
        delete hash[magazine[j]];
      }
      if (Object.keys(hash).length === 0) {
        return true;
      }
    }
  }
  return false;
};

module.exports = canConstruct