import { isNonEmptyString } from "./String";
describe('isNonEmptyString helper', function () {
  it('should return true on valid values', function () {
    expect(isNonEmptyString('test')).toBe(true);
  });
  it('should return false on all invalid values', function () {
    expect(isNonEmptyString('')).toBe(false);
    expect(isNonEmptyString(null)).toBe(false);
    expect(isNonEmptyString(undefined)).toBe(false);
    expect(isNonEmptyString({})).toBe(false);
    expect(isNonEmptyString([])).toBe(false);
    expect(isNonEmptyString(new String(''))).toBe(false);
  });
});
//# sourceMappingURL=String.test.js.map