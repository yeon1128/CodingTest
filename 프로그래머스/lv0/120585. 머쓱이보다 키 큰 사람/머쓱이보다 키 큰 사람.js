const solution = (array, height) => {
  let newArr = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] > height) {
      newArr.push(array[i]);
    }
  }
  return newArr.length;
};
