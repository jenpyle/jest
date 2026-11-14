import removeOddNumbers from './removeOddNumbers';

describe('#removeOddNumbers', () => {
  it('should remove odd numbers from array', () => {
    const result = removeOddNumbers([1, 2, 3, 4, 5, 6]);
    expect(result).toEqual([2, 4, 6]);
  });

  it('should return an empty array for an empty array', () => {
    const result = removeOddNumbers([]);
    expect(result).toEqual([]);
  });

  it('should keep all numbers from an all-even array', () => {
    const result = removeOddNumbers([2, 4, 6, 8]);
    expect(result).toEqual([2, 4, 6, 8]);
  });

  it('should return an empty array for an all-odd array', () => {
    const result = removeOddNumbers([1, 3, 5]);
    expect(result).toEqual([]);
  });

  it('should keep negative even numbers and zero', () => {
    const result = removeOddNumbers([-3, -2, 0, 1]);
    expect(result).toEqual([-2, 0]);
  });

  it('should not mutate the input array', () => {
    const numbers = [3, 2, 1, 4];
    removeOddNumbers(numbers);
    expect(numbers).toEqual([3, 2, 1, 4]);
  });
});
