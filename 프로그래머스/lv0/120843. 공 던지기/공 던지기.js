const solution = (numbers, k) => {
  let answer = 0;
  if (numbers.length >= 2 * (k - 1) + 1) {
    k === 1 ? (answer = numbers[0]) : (answer = numbers[2 * (k - 1)]);
  }

  while (numbers.length < 2 * (k - 1) + 1) {
    numbers.push(...numbers);
    answer = numbers[2 * (k - 1)];
  }

  return answer;
};