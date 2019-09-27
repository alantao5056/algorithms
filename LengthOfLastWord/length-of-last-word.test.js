const lengthOfLastWord = require('./length-of-last-word');

describe('lengthOfLastWord', () => {

  test('test Hello World', () => {
    expect(lengthOfLastWord('Hello World')).toBe(5);
  });

  test('test empty string', () => {
    expect(lengthOfLastWord('')).toBe(0);
  });

  test('test only space', () => {
    expect(lengthOfLastWord('  ')).toBe(0);
  });

  test('test space at tail', () => {
    expect(lengthOfLastWord('Hello World  ')).toBe(5);
  });

  test('test space at head', () => {
    expect(lengthOfLastWord('  Hello World')).toBe(5);
  });

  test('test single word', () => {
    expect(lengthOfLastWord('foo')).toBe(3);
  });

  test('test space at head and tail', () => {
    expect(lengthOfLastWord(' foo   ')).toBe(3);
  });

});