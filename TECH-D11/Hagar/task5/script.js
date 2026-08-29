// let numbers = [];

// for (let i = 0; i < 3; i++) {
//   numbers[i] = Number(prompt(`Enter number ${i + 1}:`));
// }

// let sum = numbers[0] + numbers[1] + numbers[2];
// let multiplication = numbers[0] * numbers[1] * numbers[2];
// let division = numbers[0] / numbers[1] / numbers[2];

// document.write("Sum = " + sum + "<br>");
// document.write("Multiplication = " + multiplication + "<br>");
// document.write("Division = " + division);

let numbers= [];

for (let i = 0; i < 5; i++) {
  numbers.push(Number(prompt(`Enter number ${i + 1}:`)));
}

let ascending = [...numbers].sort((a, b) => a - b);

let descending = [...numbers].sort((a, b) => b - a);

document.write("Ascending Order: " + ascending.join(" , ") + "<br>");
document.write("Descending Order: " + descending.join(" , "));
