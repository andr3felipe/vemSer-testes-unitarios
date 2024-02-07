import { isLeapYear } from ".";

describe("isLeapYear function", () => {
  it("should throw if the argument is not a number", () => {
    expect(() => isLeapYear("1234" as any)).toThrow(
      new Error("Argument must be a number")
    );
  });

  it(`should throw if the argument length is less than 4`, () => {
    expect(() => isLeapYear(123)).toThrow(
      new Error("Argument must have 4 digits")
    );
  });

  it("should throw if the argument is not a positive number", () => {
    expect(() => isLeapYear(-1234)).toThrow(
      new Error("Argument must be a positive number")
    );
  });

  it("should throw if the argument is not a natural number", () => {
    expect(() => isLeapYear(1.234)).toThrow(
      new Error("Argument must be a natural number")
    );
  });

  it(`should return "true" if it is leap year`, () => {
    expect(isLeapYear(2020)).toBeTruthy();
  });

  it(`should return "false" if is not leap year`, () => {
    expect(isLeapYear(2019)).not.toBeTruthy();
  });
});
