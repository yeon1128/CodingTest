function solution(box, n) {
  let answer = 1;
  box.forEach((v) => {
    answer *= Math.floor(v / n);
  });
  return answer;
}

console.log(solution([10, 8, 6], 3));
