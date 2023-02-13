function solution(sides) {
  const dif = Math.max(...sides) - Math.min(...sides);
  const sum = Math.max(...sides) + Math.min(...sides);

  return sum - dif - 1;
}
