function solution(s) {
  let arr = s.split(" ");
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Z") {
      if (arr[i - 1]) {
        arr.splice(i - 1, 2);
        i -= 2;
      } else {
        arr.splice(i, 1);
        i -= 1;
      }
    }
  }

  [...arr].map((v) => (answer += parseInt(v)));
  return answer;
}