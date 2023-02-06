const solution = (my_string) => {
  let arr = my_string.split(" ");
  let sum = parseInt(arr[0]);

  arr.map((v, i) => {
    if (v === "-") {
      sum -= parseInt(arr[i + 1]);
    }
    if (v === "+") {
      sum += parseInt(arr[i + 1]);
    }
  });

  return sum;
};