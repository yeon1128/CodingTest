function solution(my_string, letter) {
  let arr = [...my_string];

  my_string.split("").forEach((item) => {
    if (item === letter) {
      arr.splice(arr.indexOf(item), 1);
    }
  });
  return arr.join("");
}