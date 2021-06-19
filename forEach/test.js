import sum3 from './sum';
//describe(description, annonymous callback function)
describe('sum of array test', function () {
  it('should calc sum of elms from array', () => {
    const result = sum3([1, 2, 3]);
    expect(result).toEqual(6);
  });
});
