/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
  let count = 0;
  let array = [];

  for (let i = 2; i < n; i++) {
    array.push(true);
  }

  for (let i = 2; i < Math.sqrt(n); i++) {
    let iMultiply = 2;
    if (array[i]) {
      while (iMultiply * i <= n) {
        array[i * iMultiply] = false;
        iMultiply++;
      }
    }
  }
  for (let i = 2; i < n; i++) {
    if (array[i]) {
      count++;
    }
  }

  return count;
};

module.exports = countPrimes;