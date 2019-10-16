/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  let result = 0;
  while (x !== 0) {
    const ones = x % 10;
    x = (x - ones) / 10;
    result *= 10;
    result += ones;
  }
  return result;
};

module.exports = reverse;