const isUgly = require('./ugly-number');

describe('uglyNumber', () => {

  test('test 1', () => {
    expect(isUgly(1)).toBeTrue();
  });

  test('test 6', () => {
    expect(isUgly(6)).toBeTrue();
  });

  test('test 8', () => {
    expect(isUgly(8)).toBeTrue();
  });

  test('test 14', () => {
    expect(isUgly(14)).toBeFalse();
  });

  test('test 121500', () => {
    expect(isUgly(121500)).toBeTrue();
  });

  test('test 121501', () => {
    expect(isUgly(121501)).toBeFalse();
  });

  test('test 1024', () => {
    expect(isUgly(1024)).toBeTrue();
  });

  test('test 7168', () => {
    expect(isUgly(7168)).toBeFalse();
  });

});