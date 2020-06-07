function extraLongFactorials(n) {
  let number = BigInt(n);
  let j = 1n;
  for (let i = number; i > 0; i--) {
    j *= i;
  }
  console.log(String(j));
}

// extraLongFactorials(45);
