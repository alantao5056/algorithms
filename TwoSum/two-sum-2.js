/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums, target) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let wishNum = target - nums[i];
    if (hash[wishNum] !== undefined) {
      return [i, hash[wishNum]];
    }
  }
  return [];
}

module.exports = twoSum;