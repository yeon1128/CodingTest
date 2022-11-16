function solution(my_string, num1, num2) {
  let value1 = [...my_string][num1];
  let value2 = [...my_string][num2];
  let array = [...my_string];
  array.splice(num2, 1, value1);
  array.splice(num1, 1, value2);
  return array.join("");
}