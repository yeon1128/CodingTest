function solution(id_pw, db) {
  let result = "";
  db.map((data) => {
    let checkedId = id_pw[0] === data[0];
    let checkedPw = id_pw[1] === data[1];

    if (checkedId && checkedPw) {
      return (result = "login");
    } else if (checkedId && !checkedPw) {
      return (result = "wrong pw");
    } else if (!checkedId && !checkedPw) {
      return (result = "fail");
    }
  });
  return result;
}