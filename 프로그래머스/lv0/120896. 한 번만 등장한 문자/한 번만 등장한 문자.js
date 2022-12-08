function solution(s) {
  let ans = [];
  [...s].forEach((v) => {
    if (s.indexOf(v) === s.lastIndexOf(v)) {
      ans.push(v);
    }
  });

  return ans.sort().join("");
}