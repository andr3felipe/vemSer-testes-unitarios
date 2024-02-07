export function formatString(text: string) {
  if (typeof text !== "string") {
    throw new Error("The argument must be a string");
  }

  return `**************************************************\n${text}`;
}
