function solution(i, j, k) {
  let arr = [];
  let answer = 0;
  for (let n = i; n <= j; n++) {
    arr.push(String(n).split(""));
  }

  arr.flat().forEach((v) => (v === String(k) ? answer++ : answer));

  return answer;
}