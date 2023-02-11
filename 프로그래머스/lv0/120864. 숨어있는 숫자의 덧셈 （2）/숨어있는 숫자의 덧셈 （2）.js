function solution(my_string) {
  let answer = 0;
  my_string
    .split(/[a-z]|[A-Z]/)
    .filter((v) => v !== "")
    .map((v) => (answer += parseInt(v)));
  return answer;
}