function solution(balls, share) {
  let n = [];
  let m = [];
  let nm = [];
  let nFactorial = 1;
  let nmFactorial = 1;
  let mFactorial = 1;

  for (let i = 1; i <= balls; i++) {
    n.push(i);
  }
  for (let j = 1; j <= share; j++) {
    m.push(j);
  }
  for (let k = 1; k <= balls - share; k++) {
    nm.push(k);
  }
  n.map((v) => (nFactorial *= v));
  m.map((w) => (mFactorial *= w));
  nm.map((e) => (nmFactorial *= e));
  let answer = nFactorial / (nmFactorial * mFactorial);
  return Math.round(answer);
}