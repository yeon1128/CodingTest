function solution(n) {
  let answer = 0;

  const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i <= n; i++) {
    isPrime(i) && answer++;
  }

  return answer;
}