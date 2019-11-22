/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let count = 0;
  let i = 0;
  let end = nums.length - 1;
  while (i < end) {
    if (nums[i] === nums[i + 1]) {
      for (let j = i + 2; j < nums.length; j++) {
        nums[j - 1] = nums[j];
      }
      end--;
    } else {
      count++;
      i++;
    }
  }
  return count + 1;
};

module.exports = removeDuplicates;