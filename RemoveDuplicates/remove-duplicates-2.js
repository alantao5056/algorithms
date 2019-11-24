/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates2 = function (nums) {
  let current = nums[0];
  let tailIndex = 1;
  for (let i = 1; i < nums.length; i++) {
    if (current !== nums[i]) {
      nums[tailIndex] = nums[i];
      current = nums[i];
      tailIndex++;
    }
  }

  return tailIndex;
}

module.exports = removeDuplicates2;