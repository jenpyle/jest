import sum3 from './sum';
//describe(description, annonymous callback function)
describe('sum of array test', function () {
  it('should calc sum of elms from array', () => {
    const result = sum3([1, 2, 3]);
    expect(result).toEqual(6);
  });

  it('should return zero for an empty array', () => {
    const result = sum3([]);
    expect(result).toEqual(0);
  });

  it('should calc sum of negative numbers', () => {
    const result = sum3([-1, -2, -3]);
    expect(result).toEqual(-6);
  });

  it('should return the value of a single element', () => {
    const result = sum3([5]);
    expect(result).toEqual(5);
  });
});
