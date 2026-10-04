/*Using rest parameter and spread operator return max value from any array
note: array length is not fixed return min and max value and display each of
them separately after function call*/

function getMinMax(...numbers) {
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);

  return {min,max};
}

let arr = [10, 5, 30, 2, 1,15, 40];

let result = getMinMax(...arr);

console.log("Min =", result.min);
console.log("Max =", result.max);