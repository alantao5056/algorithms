/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let hash = {};
  while (hash[n] === undefined) {
    let sum = 0;
    hash[n] = true;

    while (n !== 0) {
      let ones = n % 10;
      n = (n - ones) / 10;
      sum += ones * ones;
    }

    if (sum === 1) {
      return true;
    } else {
      n = sum;
    }
  }

  return false;

};

module.exports = isHappy;