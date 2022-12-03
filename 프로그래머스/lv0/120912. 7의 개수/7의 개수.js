function solution(array) {
  return array
    .map((v) =>
      String(v)
        .split("")
        .filter((v) => v === "7")
    )
    .filter((v) => v.length > 0)
    .flat().length;
}
