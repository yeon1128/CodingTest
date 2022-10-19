// 10인분 + 음료 하나 서비스
// 10의 배수일 때 n * 2000 할인

const solution = (n, k) => {
  let price = 0;
  if (k % 10 === 0) {
    price = 14000 * n - (2000 * k) / 10;
  } else {
    price = 14000 * n;
  }
};
