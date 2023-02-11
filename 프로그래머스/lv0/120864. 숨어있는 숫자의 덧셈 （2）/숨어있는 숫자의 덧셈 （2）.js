function solution(my_string) {
  return my_string
    .split(/[a-z]|[A-Z]/)
    .filter((v) => v !== "")
    .map((v) => parseInt(v))
    .reduce((acc, cur) => acc + cur, 0);
}