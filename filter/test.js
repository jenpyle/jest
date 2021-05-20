import removeOddNumbers from './removeOddNumbers';

describe('#removeOddNumbers', () => {
    it('should remove odd numbers from array', () => {
        const result = removeOddNumbers([1, 2, 3, 4, 5, 6]);
        expect(result).toEqual([2, 4, 6]);
    });
  });
