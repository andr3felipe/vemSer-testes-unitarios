import { formatSeconds } from ".";

describe("formatSeconds function", () => {
  it("should throw if the argument is not a number", () => {
    expect(() => formatSeconds("1" as any)).toThrow(
      new Error("Argument must be a number")
    );
  });

  it("should throw if the argument is not a positive number", () => {
    expect(() => formatSeconds(-1)).toThrow(
      new Error("Argument must be a positive number")
    );
  });

  it("should throw if the argument is not a natural number", () => {
    expect(() => formatSeconds(1.5)).toThrow(
      new Error("Argument must be a natural number")
    );
  });

  it(`should return "2 dias, 7 horas, 33 minutos e 20 segundos." if the argument is 200000`, () => {
    expect(formatSeconds(200000)).toMatch(
      "2 dias, 7 horas, 33 minutos e 20 segundos."
    );
  });
});
