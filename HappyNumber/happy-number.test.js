const isHappy = require('./happy-number');

describe('happyNumber', () => {

  test('1', () => {
    expect(isHappy(1)).toBeTrue();
  });

  test('7', () => {
    expect(isHappy(7)).toBeTrue();
  });

  test('10', () => {
    expect(isHappy(10)).toBeTrue();
  });

  test('19', () => {
    expect(isHappy(19)).toBeTrue();
  });

  test('28', () => {
    expect(isHappy(28)).toBeTrue();
  });

  test('79', () => {
    expect(isHappy(28)).toBeTrue();
  });

  test('91', () => {
    expect(isHappy(91)).toBeTrue();
  });

  test('100', () => {
    expect(isHappy(100)).toBeTrue();
  });

  test('52', () => {
    expect(isHappy(52)).toBeFalse();
  });

  test('21', () => {
    expect(isHappy(21)).toBeFalse();
  });

  test('21', () => {
    expect(isHappy(21)).toBeFalse();
  });

  test('88', () => {
    expect(isHappy(88)).toBeFalse();
  });

});