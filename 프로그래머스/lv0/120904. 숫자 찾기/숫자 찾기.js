function solution(num, k) {
  let index = String(num).split("").indexOf(String(k));
  return index < 0 ? -1 : index + 1;
}