// 10인분 + 음료 하나 서비스
// 10의 배수일 때 n * 2000 할인

const solution = (n, k) => {
  let price = 12000 * n + 2000 * (k - Math.floor(n / 10));
  return price;
};
