export function sum(n1: number, n2: number): number {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("Both arguments must be numbers");
  }

  if (n1 < 0 || n2 < 0) {
    throw new Error("Both arguments must be positive numbers");
  }

  if (parseInt(n1.toString()) !== n1 || parseInt(n2.toString()) !== n2) {
    throw new Error("Both arguments must be natural numbers");
  }

  return n1 + n2;
}
