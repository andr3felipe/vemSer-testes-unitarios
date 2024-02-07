export function yesNo(string: string) {
  if (typeof string !== "string") {
    throw new Error("Argument must be a string");
  }

  if (string === "Sim") {
    return "Parabéns";
  }

  if (string === "Não") {
    return "Encerrando sua sessão…";
  }

  return "Você tem noções dos seus atos?";
}
