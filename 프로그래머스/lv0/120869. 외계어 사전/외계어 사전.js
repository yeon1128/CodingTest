function solution(spell, dic) {
  let answer = 2;
  dic
    .map((v) => spell.every((e) => v.split("").includes(e)))
    .forEach((v) => {
      if (v === true) {
        answer = 1;
      }
    });
  return answer;
}