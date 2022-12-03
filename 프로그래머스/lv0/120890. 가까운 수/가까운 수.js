function solution(array, n) {
  let abs = [...array.map((v) => Math.abs(v - n))];
  let min = Math.min(...abs);
  let check = [];

  abs.forEach((v, i) => {
    if (abs[i] === min) {
      check.push(array[i]);
    }
  });

  return Math.min(...check);
}
