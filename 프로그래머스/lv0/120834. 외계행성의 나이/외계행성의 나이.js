function solution(age) {
  const arr = String(age).split("");
  const alphabet = "abcdefghij".split("");
  let answer = ""

  arr.forEach((v)=>{
    let index = Number(v);
    answer += alphabet[index];
  })

  return answer;
}