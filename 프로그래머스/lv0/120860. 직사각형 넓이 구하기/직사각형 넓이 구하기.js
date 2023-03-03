function solution(dots) {
  let xLength = 0;
  let yLength = 0;

  let sortedDots = dots.sort((a, b) =>
    a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
  );
  xLength = sortedDots[2][0] - sortedDots[0][0];
  yLength = sortedDots[1][1] - sortedDots[0][1];

  return xLength * yLength;
}