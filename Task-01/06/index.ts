export function isLeapYear(number: number): boolean {
  if (typeof number !== "number") {
    throw new Error("Argument must be a number");
  }

  if (number < 0) {
    throw new Error("Argument must be a positive number");
  }

  if (parseInt(number.toString()) !== number) {
    throw new Error("Argument must be a natural number");
  }

  if (number.toString().length !== 4) {
    throw new Error("Argument must have 4 digits");
  }

  if ((number % 4 === 0 && number % 100 !== 0) || number % 400 === 0) {
    return true;
  }

  return false;
}
