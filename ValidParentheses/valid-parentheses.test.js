const isValid = require('./valid-parentheses');

describe('valid-parentheses', () => {
  test('validate ()', () => {
    expect(isValid('()')).toBeTrue();
  });

  test('validate ()[]{}', () => {
    expect(isValid('()[]{}')).toBeTrue();
  });

  test('validate (]', () => {
    expect(isValid('(]')).toBeFalse();
  });

  test('validate ([)]', () => {
    expect(isValid('([)]')).toBeFalse();
  });

  test('validate {[]}', () => {
    expect(isValid('{[]}')).toBeTrue();
  });

  test('validate )', () => {
    expect(isValid(')')).toBeFalse();
  });

  test('validate empty', () => {
    expect(isValid('')).toBeTrue();
  });
});