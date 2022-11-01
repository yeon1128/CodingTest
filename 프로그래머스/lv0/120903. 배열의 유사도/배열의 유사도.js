function solution(s1, s2) {
  let result = 0;
  
  for (let value of s1) {
    for (let item of s2) {
      if (value === item) {
        result += 1;
      }
    }
  }

  return result;
}
