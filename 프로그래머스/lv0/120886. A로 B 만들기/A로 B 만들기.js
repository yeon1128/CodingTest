function solution(before, after) {
  let beforeTxt = [...before].sort();
  let afterTxt = [...after].sort();

  return beforeTxt.filter((v, i) => v === afterTxt[i]).length ===
    afterTxt.length
    ? 1
    : 0;
}