function solution(n, t) {
  let result = 0;
  for (let i = 0; i < t; i++) {
    result += n * (2 ** i);
  }
  return result + n;
}

