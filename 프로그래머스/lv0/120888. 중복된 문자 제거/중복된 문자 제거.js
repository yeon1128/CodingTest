function solution(my_string) {
  let set = new Set(my_string);
  let arr = [];
  set.forEach((v) => arr.push(v));
  return arr.join("");
}