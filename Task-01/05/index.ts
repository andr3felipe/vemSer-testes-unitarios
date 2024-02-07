export function formatSeconds(seconds: number): string {
  if (typeof seconds !== "number") {
    throw new Error("Argument must be a number");
  }

  if (seconds < 0) {
    throw new Error("Argument must be a positive number");
  }

  if (parseInt(seconds.toString()) !== seconds) {
    throw new Error("Argument must be a natural number");
  }

  let days = 0;
  let hours = 0;
  let minutes = 0;

  while (seconds >= 86400) {
    days++;
    seconds -= 86400;
  }

  while (seconds >= 3600) {
    hours++;
    seconds -= 3600;
  }

  while (seconds >= 60) {
    minutes++;
    seconds -= 60;
  }

  return `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos.`;
}
