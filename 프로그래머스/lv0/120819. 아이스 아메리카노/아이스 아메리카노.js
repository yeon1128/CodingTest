const solution = (money) => {
  let result = [];
  let coffee = Math.floor(money / 5500);
  let change = money % 5500;

  result.push(coffee, change);
  return result;
};