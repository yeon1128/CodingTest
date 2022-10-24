const solution = (strlist) => {
  let i = 0;
  let result = [];
  while (i < strlist.length) {
    result.push(strlist[i].split("").length);
    i++;
  }
  return result;
};
