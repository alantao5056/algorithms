const twoSum = require('./two-sum.js');

describe('two-sum', () => {
  test('find from [4, 8, 1, 3, 9, 11, 5] with target 10', () => {
    const nums = [4, 8, 1, 3, 9, 11, 5];
    const result = twoSum(nums, 10);
    expect(result).toIncludeAllMembers([4, 2]);
  });


  test('find from [4, 8, 1, 3, 9, 11, 5] with target 100', () => {
    const nums = [4, 8, 1, 3, 9, 11, 5];
    const result = twoSum(nums, 10);
    expect(result).toBeArrayOfSize(0);
  });
});
