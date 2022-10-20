const solution = (n) => {
  let arr = n.toString().split("");
  let answer = 0;
  arr.forEach((value) => {
    answer += parseInt(value);
  });
    return answer;
};

console.log(solution(1234));