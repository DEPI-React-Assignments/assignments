// Swap the values of two variables using destructuring

let x = 10;
let y = 20;

console.log("Before swap:");
console.log("x =", x);
console.log("y =", y);

[x, y] = [y, x];

console.log("After swap:");
console.log("x =", x);
console.log("y =", y);