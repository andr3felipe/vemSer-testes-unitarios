export function howCanIHelpYou({
  client,
  attendant,
}: {
  client: string;
  attendant: string;
}): string {
  if (typeof client !== "string" || typeof attendant !== "string") {
    throw new Error("Both arguments must be a string");
  }

  return `Olá ${client} eu me chamo ${attendant}, em que posso ajudar?`;
}
