const reverse = require('./reverse-integer');

describe('reverseInteger', () => {

  test('test 123', () => {
    expect(reverse(123)).toBe(321);
  });

  test('test 8', () => {
    expect(reverse(8)).toBe(8);
  });

  test('test 0', () => {
    expect(reverse(0)).toBe(0);
  });

  test('test 120', () => {
    expect(reverse(120)).toBe(21);
  });

  test('test 80', () => {
    expect(reverse(80)).toBe(8);
  });

  test('test -80', () => {
    expect(reverse(-80)).toBe(-8);
  });

  test('test -2', () => {
    expect(reverse(-2)).toBe(-2);
  });

  test.only('test -789', () => {
    expect(reverse(-789)).toBe(-987);
  });

});