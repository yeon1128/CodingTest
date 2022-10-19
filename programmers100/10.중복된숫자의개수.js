function solution(array, n) {
  let count = [];
  for (item of array) {
    if (item === n) {
      count.push(item);
    }
  }
  return count.length;
}

const solution = (array, n) => {
  let count = 0;
  for (i = 0; i < array.length; i++) {
    array[i] === n ? count++ : undefined;
  }
  return count;
};
