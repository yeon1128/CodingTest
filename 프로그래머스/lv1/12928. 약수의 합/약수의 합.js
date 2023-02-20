function solution(n) {
  let answer = [];
  let sum = 0;
  for (let i = 1; i <= n; i++) n % i === 0 && answer.push(i);
  answer.map((v) => (sum += v));
  return sum;
}