const solution = (n) => {
  let arr = [];
  let sum = 0;
  for (i = 0; i < n + 1; i++) {
    arr.push(i);
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
};
