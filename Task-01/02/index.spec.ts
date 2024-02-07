import { sum } from ".";

describe("sum function", () => {
  it("should throw if any argument is not a number", () => {
    expect(() => sum("1" as any, 2)).toThrow(
      new Error("Both arguments must be numbers")
    );
    expect(() => sum(1, "2" as any)).toThrow(
      new Error("Both arguments must be numbers")
    );
  });

  it("should throw if any argument is not a positive number", () => {
    expect(() => sum(-1, 2)).toThrow(
      new Error("Both arguments must be positive numbers")
    );
    expect(() => sum(1, -2)).toThrow(
      new Error("Both arguments must be positive numbers")
    );
  });

  it("should throw if any argument is not a natural number", () => {
    expect(() => sum(1.5, 2)).toThrow(
      new Error("Both arguments must be natural numbers")
    );
    expect(() => sum(1, 2.5)).toThrow(
      new Error("Both arguments must be natural numbers")
    );
  });

  it("should return 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
