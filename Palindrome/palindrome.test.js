const isPalindrome = require('./palindrome');

describe('isPalindrome', () => {
  test('test anna', () => {
    expect(isPalindrome('anna')).toBeTrue();
  });

  test('test radar', () => {
    expect(isPalindrome('radar')).toBeTrue();
  });

  test('test jerry', () => {
    expect(isPalindrome('jerry')).toBeFalse();
  });

  test('test one letter', () => {
    expect(isPalindrome('x')).toBeTrue();
  });

  test('test empty', () => {
    expect(isPalindrome('')).toBeFalse();
  });
});