import { operationResult } from "./";

describe("operationResult function", () => {
  it(`should return "Both arguments (n1, n2) must be a number" if n1 or n2 is not a number`, () => {
    expect(operationResult({ n1: "1" as any, n2: 2, operation: "+" })).toMatch(
      "Both arguments (n1, n2) must be a number"
    );
  });

  it(`should return "Operation must be one of the following: +, -, *, /" if operation is not one of the following: +, -, *, /`, () => {
    expect(operationResult({ n1: 1, n2: 2, operation: "a" })).toMatch(
      "Operation must be one of the following: +, -, *, /"
    );
  });

  it(`should return "Division by zero is not allowed" if operation is "/" and n2 is 0`, () => {
    expect(operationResult({ n1: 1, n2: 0, operation: "/" })).toMatch(
      "Division by zero is not allowed"
    );
  });

  it(`should return the sum of n1 and n2 if operation is "+"`, () => {
    expect(operationResult({ n1: 1, n2: 2, operation: "+" })).toBe(3);
  });

  it(`should return the subtraction of n1 and n2 if operation is "-"`, () => {
    expect(operationResult({ n1: 1, n2: 2, operation: "-" })).toBe(-1);
  });

  it(`should return the multiplication of n1 and n2 if operation is "*"`, () => {
    expect(operationResult({ n1: 1, n2: 2, operation: "*" })).toBe(2);
  });

  it(`should return the division of n1 and n2 if operation is "/"`, () => {
    expect(operationResult({ n1: 1, n2: 2, operation: "/" })).toBe(0.5);
  });
});
