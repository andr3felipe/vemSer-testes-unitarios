import { howCanIHelpYou } from ".";

describe("howCanIHelpYou function", () => {
  it(`should throw if any of the arguments is not a string`, () => {
    expect(() =>
      howCanIHelpYou({ client: 1 as any, attendant: "Claudia" })
    ).toThrow(new Error("Both arguments must be a string"));

    expect(() =>
      howCanIHelpYou({ client: "André", attendant: 1 as any })
    ).toThrow(new Error("Both arguments must be a string"));
  });

  it(`should return "Olá André eu me chamo Claudia, em que posso ajudar?" if the arguments are "André" and "Claudia"`, () => {
    expect(howCanIHelpYou({ client: "André", attendant: "Claudia" })).toMatch(
      "Olá André eu me chamo Claudia, em que posso ajudar?"
    );
  });
});
