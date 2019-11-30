/**
 * @param {number[]} array
 * @return {number[]}
 */

const stringCompression = function (array) {
  const compressedArray = [];
  let count = 1;

  if (array.length === 1) {
    return array;
  }

  for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i - 1]) {
      count++;
    } else {
      addToCompression(compressedArray, array[i - 1], count);

      // reset count
      count = 1;
    }
  }
  addToCompression(compressedArray, array[array.length - 1], count);

  // console.log(compressedArray)
  return compressedArray;
};

const addToCompression = function (compressedArray, char, count) {
  compressedArray.push(char);
  if (count !== 1) {
    splitNum(compressedArray, count);
  }
}

const splitNum = function (array, num) {
  let numStr = num.toString();
  for (let i = 0; i < numStr.length; i++) {
    array.push(numStr[i]);
  }
};

module.exports = stringCompression;