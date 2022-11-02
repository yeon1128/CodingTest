function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (i ** 2 === n) {
      return 1;
    } else if (i ** 2 > n) {
      return 2;
    }
  }
}