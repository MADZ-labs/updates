const helpers = require('../helpers/helpers.js');

describe('convert month number to month name', () => {
  it('should return the name of a month, given its zero-based numerical position', () => {
    expect(helpers.monthNumberToString(0)).toBe('January');
    expect(helpers.monthNumberToString(5)).toBe('June');
    expect(helpers.monthNumberToString(11)).toBe('December');
  });

  it('should return undefined if the numerical position is out of range', () => {
    expect(helpers.monthNumberToString(12)).toBe(undefined);
    expect(helpers.monthNumberToString(-1)).toBe(undefined);
  });

  it('should return a shortened version of the name of the month if a second argument is true', () => {
    expect(helpers.monthNumberToString(6, true)).toBe('Jul');
    expect(helpers.monthNumberToString(6, false)).toBe('July');
  });
});
