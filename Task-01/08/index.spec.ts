import { calculateAverageGrade } from "./";

describe("calculateAverageGrade function", () => {
  it(`should throw an error if any of the arguments is not a number`, () => {
    expect(() =>
      calculateAverageGrade({
        grade1: "1" as any,
        grade2: 5,
        grade3: 5,
        weight1: 1,
        weight2: 1,
        weight3: 1,
      })
    ).toThrow(new Error("All arguments must be a number"));
  });

  it(`should throw an error if any of the weights is less than or equal to 0`, () => {
    expect(() =>
      calculateAverageGrade({
        grade1: 5,
        grade2: 5,
        grade3: 5,
        weight1: 1,
        weight2: 0,
        weight3: 1,
      })
    ).toThrow(new Error("All weights must be greater than 0"));
  });

  it(`should throw an error if any of the grades is less than 0`, () => {
    expect(() =>
      calculateAverageGrade({
        grade1: 5,
        grade2: 5,
        grade3: -1,
        weight1: 1,
        weight2: 1,
        weight3: 1,
      })
    ).toThrow(new Error("All grades must be a positive number"));
  });

  it(`should return the average grade`, () => {
    expect(
      calculateAverageGrade({
        grade1: 5,
        grade2: 5,
        grade3: 5,
        weight1: 1,
        weight2: 1,
        weight3: 1,
      })
    ).toBe("5.00");
  });
});
