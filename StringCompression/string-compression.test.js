const compress = require('./string-compression');

describe('stringCompression', () => {

  test('["a","a","b","b","c","c","c"]', () => {
    const array = ["a", "a", "b", "b", "c", "c", "c"];
    const result = compress(array);
    expect(result).toEqual(["a", "2", "b", "2", "c", "3"]);
  });

  test('["a"]', () => {
    const array = ["a"];
    const result = compress(array);
    expect(result).toEqual(["a"]);
  });

  test('["a","b","b","b","b","b","b","b","b","b","b","b","b"]', () => {
    const array = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"];
    const result = compress(array);
    expect(result).toEqual(["a", "b", "1", "2"]);
  });

});