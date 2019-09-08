const twoSum = require('./two-sum.js');

describe('two-sum', () => {
  test('find from [4, 8, 1, 3, 9, 11, 5] with target 10', () => {
    const nums = [4, 8, 1, 3, 9, 11, 5];
    const result = twoSum(nums, 10);
    expect(result).toIncludeAllMembers([4, 2]);
  });

  test('find from [4, 8, 1, 3, 9, 11, 5] with target 100', () => {
    const nums = [4, 8, 1, 3, 9, 11, 5];
    const result = twoSum(nums, 100);
    expect(result).toBeArrayOfSize(0);
  });

  test('find the last two index', () => {
    const nums = [0, 0, 0, 0, 0, 99, 1];
    const result = twoSum(nums, 100);
    expect(result).toIncludeAllMembers([5, 6]);
  });

  test('find the first two index', () => {
    const nums = [2, 33, 4, 5, 6, 7, 8, 9];
    const result = twoSum(nums, 35);
    expect(result).toIncludeAllMembers([0, 1]);
  });

  test('find the last and first two index', () => {
    const nums = [1, 4, 5, 6, 7, 83, 3, 5, 6, 1];
    const result = twoSum(nums, 2);
    expect(result).toIncludeAllMembers([0, 9]);
  });

});


