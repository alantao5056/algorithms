const removeDuplicates2 = require('./remove-duplicates-2');
const removeDuplicates = require('./remove-duplicates');

describe('removeDuplicates', () => {

  // describe('test removeDuplicates', () => {
  //   executeTests(removeDuplicates);
  // });

  describe('test removeDuplicates-2', () => {
    executeTests(removeDuplicates2);
  });

});

function executeTests(removeDuplicatesImp) {
  const { largeArrayWithDuplicates, largeArrayResult } = generateLargeArray(5000);

  describe('removeDuplicates', () => {

    test('0,0,1,1,2,3,4,4,4,5', () => {
      let numbers = [0, 0, 1, 1, 2, 3, 4, 4, 4, 5];
      const length = removeDuplicatesImp(numbers);
      numbers.splice(length);
      expect(numbers).toEqual([0, 1, 2, 3, 4, 5]);
    });

    test('large array', () => {
      let numbers = largeArrayWithDuplicates;
      const length = removeDuplicatesImp(numbers);
      numbers.splice(length);
      expect(numbers).toEqual(largeArrayResult);
    });

    test('1', () => {
      let numbers = [1];
      const length = removeDuplicatesImp(numbers);
      numbers.splice(length);
      expect(numbers).toEqual([1]);
    });

    test('1 3 3 5', () => {
      let numbers = [1, 3, 3, 5];
      const length = removeDuplicatesImp(numbers);
      numbers.splice(length);
      expect(numbers).toEqual([1, 3, 5]);
    });

    test('3,3,3,3,3,3', () => {
      let numbers = [3, 3, 3, 3, 3, 3];
      const length = removeDuplicatesImp(numbers);
      numbers.splice(length);
      expect(numbers).toEqual([3]);
    });

    test('1,3,3,3,3,3,3', () => {
      let numbers = [1, 3, 3, 3, 3, 3, 3];
      const length = removeDuplicatesImp(numbers);
      numbers.splice(length);
      expect(numbers).toEqual([1, 3]);
    });
  });
};

function generateLargeArray(max) {
  const array = [], result = [];
  for (let i = 0; i <= max; i++) {
    for (let j = 0; j < Math.random() * 100; j++) {
      array.push(i);
    }
    result.push(i);
  }
  return {
    largeArrayWithDuplicates: array,
    largeArrayResult: result
  };
}
