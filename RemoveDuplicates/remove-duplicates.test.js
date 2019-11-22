const removeDuplicates = require('./remove-duplicates');

describe('removeDuplicates', () => {

  test('0,0,1,1,2,3,4,4,4,5', () => {
    let numbers = [0, 0, 1, 1, 2, 3, 4, 4, 4, 5];
    const length = removeDuplicates(numbers);
    numbers.splice(length);
    expect(numbers).toEqual([0, 1, 2, 3, 4, 5]);
  });

  test('1', () => {
    let numbers = [1];
    const length = removeDuplicates(numbers);
    numbers.splice(length);
    expect(numbers).toEqual([1]);
  });

  test('1 3 3 5', () => {
    let numbers = [1, 3, 3, 5];
    const length = removeDuplicates(numbers);
    numbers.splice(length);
    expect(numbers).toEqual([1, 3, 5]);
  });

  test('3,3,3,3,3,3', () => {
    let numbers = [3, 3, 3, 3, 3, 3];
    const length = removeDuplicates(numbers);
    numbers.splice(length);
    expect(numbers).toEqual([3]);
  });

  test('1,3,3,3,3,3,3', () => {
    let numbers = [1, 3, 3, 3, 3, 3, 3];
    const length = removeDuplicates(numbers);
    numbers.splice(length);
    expect(numbers).toEqual([1, 3]);
  });

});