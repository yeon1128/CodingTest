function solution(rsp) {
  let answer = [];
  [...rsp].forEach((v) => {
    if (v === "2") {
      answer.push("0");
    } else if (v === "0") {
      answer.push("5");
    } else if (v === "5") {
      answer.push("2");
    }
  });

  return answer.join("");
}