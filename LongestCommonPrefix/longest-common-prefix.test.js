const longestCommonPrefix = require('./longest-common-prefix');

describe('longestCommonPrefix', () => {

  test('test fl prefix', () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).boBe('fl');
  });

  test('test no prefix', () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe('');
  });

});
