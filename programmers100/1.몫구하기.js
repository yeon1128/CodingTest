function solution(num1, num2) {
  var answer = 0;
  answer = parseInt(num1 / num2);
  return answer;
}

// 화살표 함수
let answer = 0;
solution = (num1, num2) => (answer = parseInt(num1 / num2));

solution = (num1, num2) => (answer = Math.floor(num1 / num2));

solution = (num1, num2) => (answer = Math.trunc(num1 / num2));
