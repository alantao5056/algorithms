/**
 * @param {string} s
 * @return {number}
 */

const sort = function (array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;

    // find smallest number
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    // replace
    let temp;
    temp = array[minIndex];
    array[minIndex] = array[i];
    array[i] = temp;

  }
};

module.exports = sort;