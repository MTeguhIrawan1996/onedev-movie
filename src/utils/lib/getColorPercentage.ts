export const getColorByPercentage = (percentage: number) => {
  if (percentage <= 50) {
    return 'gray.5';
  }
  if (percentage < 70) {
    return 'yellow.5';
  }
  return 'teal.5';
};
