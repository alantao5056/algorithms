const canConstruct = require('./ransom-note');

describe('reverseInteger', () => {

  test('a and b', () => {
    expect(canConstruct('a', 'b')).toBeFalse();
  });

  test('aa and ab', () => {
    expect(canConstruct('aa', 'ab')).toBeFalse();
  });

  test('aa and aab', () => {
    expect(canConstruct('aa', 'aab')).toBeTrue();
  });

  test('abc and bca', () => {
    expect(canConstruct('abc', 'bca')).toBeTrue();
  });

});