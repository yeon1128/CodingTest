function solution(keyinput, board) {
  let answer = [0, 0];
  let xMax = Math.floor(board[0] / 2);
  let yMax = Math.floor(board[1] / 2);

  keyinput.forEach((e) => {
    switch (e) {
      case "left":
        answer[0] > -xMax && answer[0]--;
        break;
      case "right":
        answer[0] < xMax && answer[0]++;
        break;
      case "up":
        answer[1] < yMax && answer[1]++;
        break;
      case "down":
        answer[1] > -yMax && answer[1]--;
        break;
    }
  });

  return answer;
}