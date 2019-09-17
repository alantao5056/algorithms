const romanToInt = require('./roman-to-int');

describe('romanToInt', () => {
  test('test invalid', () => {
    expect(romanToInt('ABC')).toBe(NaN);
  });

  test('test III', () => {
    expect(romanToInt('III')).toBe(3);
  });

  test('test IV', () => {
    expect(romanToInt('IV')).toBe(4);
  });

  test('test IX', () => {
    expect(romanToInt('IX')).toBe(9);
  });

  test('test LVIII', () => {
    expect(romanToInt('LVIII')).toBe(58);
  });

  test('test MCMXCIV', () => {
    expect(romanToInt('MCMXCIV')).toBe(1994);
  });
});