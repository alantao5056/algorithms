const countAndSay = require('./count-and-say');

describe('countAndSay', () => {
  test('test n=1', () => {
    expect(countAndSay(1)).toBe('1');
  });

  test('test n=2', () => {
    expect(countAndSay(2)).toBe('11');
  });

  test('test n=3', () => {
    expect(countAndSay(3)).toBe('21');
  });

  test('test n=4', () => {
    expect(countAndSay(4)).toBe('1211');
  });

  test('test n=5', () => {
    expect(countAndSay(5)).toBe('111221');
  });

  test('test n=15', () => {
    expect(countAndSay(15)).toBe('311311222113111231131112132112311321322112111312211312111322212311322113212221');
  });
});