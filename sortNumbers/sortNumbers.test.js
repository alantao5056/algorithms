const sort = require('./sortNumbers');

describe('sortNumbers', () => {

  test('test 4, 5, 3, 2, 6, 1', () => {
    let array = [4, 5, 3, 2, 6, 1];
    sort(array)
    expect(array).toEqual([1, 2, 3, 4, 5, 6]);
  });

})