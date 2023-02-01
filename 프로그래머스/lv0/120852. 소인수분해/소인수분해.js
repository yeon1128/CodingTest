function solution(n) {
  const smallNumber = [];
  let x = 2;
  while (n !== 1) {
    if (n % x === 0) {
      smallNumber.push(x);
      n /= x;
      x = 2;
    } else {
      x += 1;
    }
  }
  return [...new Set(smallNumber)];
}