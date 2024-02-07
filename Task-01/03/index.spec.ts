import { yesNo } from ".";

describe("yesNo function", () => {
  it(`should throw if the argument is not a string`, () => {
    expect(() => yesNo(1 as any)).toThrow(
      new Error("Argument must be a string")
    );
  });

  it(`should return "Parabéns" if the argument is "Sim"`, () => {
    expect(yesNo("Sim")).toMatch("Parabéns");
  });

  it(`should return "Encerrando sua sessão…" if the argument is "Não"`, () => {
    expect(yesNo("Não")).toMatch("Encerrando sua sessão…");
  });

  it(`should return "Você tem noções dos seus atos?" if the argument is different from "Sim" or "Não"`, () => {
    expect(yesNo("Wrong argument")).toMatch("Você tem noções dos seus atos?");
  });
});
