function solution(n) {
  let answer = 0;
  if (n < 3) {
    answer = 1;
  } else if (n % 6 === 0) {
    answer = n / 6;
  } else if (n % 2 === 0) {
    answer = n / 2;
  } else if (n % 3 === 0) {
    answer = n / 3;
  } else {
      answer = n;
  }
  return answer;
}