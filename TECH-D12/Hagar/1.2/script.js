function sum(...nums) {
  let total = 0;

  for (let num of nums) {
    if (typeof num === Number) total += num;
    else throw new Error("All parameters must be numbers");
  }

  return total;
}

console.log(sum(1, 2, 3));
