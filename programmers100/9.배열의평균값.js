// 아 이 위치가 중요하네!!!! (변수 위치, return값 위치)
// 왜지....?

// 🚀 for문
// function solution(numbers) {
//   let sum = 0;
//   let avg = 0;

//   for (i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     avg = sum / numbers.length;
//   }
//   return avg;
// }

// 🚀 for..of
// for문의 i !== for..of의 i
// 그래서 i 보단 item이 좋음
function solution(numbers) {
  let sum = 0;
  let avg = 0;

  for (const item of numbers) {
    sum += item;
    avg = sum / numbers.length;
  }

  return avg;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
