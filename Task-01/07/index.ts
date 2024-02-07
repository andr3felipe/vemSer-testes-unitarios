export function operationResult({
  n1,
  n2,
  operation,
}: {
  n1: number;
  n2: number;
  operation: string;
}) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    return "Both arguments (n1, n2) must be a number";
  }

  if (!["+", "-", "*", "/"].includes(operation)) {
    return "Operation must be one of the following: +, -, *, /";
  }

  if (operation === "/" && n2 === 0) {
    return "Division by zero is not allowed";
  }

  if (operation === "+") {
    return n1 + n2;
  }

  if (operation === "-") {
    return n1 - n2;
  }

  if (operation === "*") {
    return n1 * n2;
  }

  if (operation === "/") {
    return n1 / n2;
  }
}
