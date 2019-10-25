const canConstruct = require('./ransom-note');

describe('ransomNote', () => {

  test('a and b', () => {
    expect(canConstruct('a', 'b')).toBeFalse();
  });

  test('aa and ab', () => {
    expect(canConstruct('aa', 'ab')).toBeFalse();
  });

  test('aa and acacb', () => {
    expect(canConstruct('aa', 'acacb')).toBeTrue();
  });

  test('abc and bca', () => {
    expect(canConstruct('abc', 'bca')).toBeTrue();
  });

});