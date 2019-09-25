/**
 * @param {number} n
 * @return {string}
 */

const countAndSay = function (n) {
  let s = '1';
  if (n === 1) {
    return '1';
  }
  for (let i = 0; i < n - 1; i++) {
    s = next(s);
  }

  return s;

};

const next = function (s) {
  let result = '';
  let counter = 1;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      counter++;
    } else {
      result += counter;
      result += s[i];
      counter = 1;
    }
  }
  result += counter;
  result += s[s.length - 1];
  return result;
}

module.exports = countAndSay;