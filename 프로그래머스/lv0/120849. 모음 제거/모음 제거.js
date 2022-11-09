function solution(my_string) {
  return [...my_string]
    .filter((v) => (["a", "e", "e", "i", "o", "u"].includes(v) ? false : true))
    .join("");
}
