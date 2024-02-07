interface CalculateAverageGrade {
  grade1: number;
  grade2: number;
  grade3: number;
  weight1: number;
  weight2: number;
  weight3: number;
}

export function calculateAverageGrade({
  grade1,
  grade2,
  grade3,
  weight1,
  weight2,
  weight3,
}: CalculateAverageGrade) {
  if (
    [grade1, grade2, grade3, weight1, weight2, weight3].some(
      (argument) => typeof argument !== "number"
    )
  ) {
    throw new Error("All arguments must be a number");
  }

  if ([weight1, weight2, weight3].some((argument) => argument <= 0)) {
    throw new Error("All weights must be greater than 0");
  }

  if ([grade1, grade2, grade3].some((argument) => argument < 0)) {
    throw new Error("All grades must be a positive number");
  }

  const grade1Average = grade1 * weight1;
  const grade2Average = grade2 * weight2;
  const grade3Average = grade3 * weight3;
  const totalGrade = grade1Average + grade2Average + grade3Average;
  const totalWeight = weight1 + weight2 + weight3;

  return (totalGrade / totalWeight).toFixed(2);
}
