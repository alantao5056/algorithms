const countPrimes = require('./count-primes');

describe('countPrimes', () => {

  test('10', () => {
    expect(countPrimes(10)).toBe(4);
  });

  test('100', () => {
    expect(countPrimes(100)).toBe(25);
  });

  test('1000', () => {
    expect(countPrimes(1000)).toBe(168);
  });

});