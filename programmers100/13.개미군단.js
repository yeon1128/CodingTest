// 장군 = 5
// 병정 = 3
// 일 = 1
// 최소한의 병력

/**
 * hp / 5 = 몫
 * hp % 5 = 나머지
 * 장군 = Math.floor(hp / 5)
 * 병정 = Math.floor(hp % 5 / 3)
 * 일 = (hp % 5) % 3
 */

function solution(hp) {
  let 장군 = Math.floor(hp / 5);
  let 병정 = Math.floor((hp % 5) / 3);
  let 일 = (hp % 5) % 3;

  return 장군 + 병정 + 일;
}
