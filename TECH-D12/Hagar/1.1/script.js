function add(a, b) {
  if (arguments.length !== 2) {
    throw new Error("Function must accept exactly 2 parameters");
  }

  return a + b;
}

console.log(add(5, 3));
