const solution = (slice, n) => {
  let pizza = Math.floor(n / slice);

  if (n % slice > 0) {
    return pizza + 1;
  } else {
    return pizza;
  }
};