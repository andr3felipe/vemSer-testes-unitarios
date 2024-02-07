import { formatString } from ".";

describe("calculateAverageGrade function", () => {
  it(`should throw an error if the argument is not a string`, () => {
    expect(() => formatString(1 as any)).toThrow(
      new Error("The argument must be a string")
    );
  });

  it(`should format and return the string`, () => {
    expect(formatString("Hello World")).toMatch(
      `**************************************************\nHello World`
    );
  });
});
