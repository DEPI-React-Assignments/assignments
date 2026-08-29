var arr = [];
arr[0] = Number(prompt("Enter the first value:"));
arr[1] = Number(prompt("Enter the second value:"));
arr[2] = Number(prompt("Enter the third value:"));

var sum = arr[0] + arr[1] + arr[2];
var multiplication = arr[0] * arr[1] * arr[2];
var division = arr[0] / arr[1] / arr[2];

document.write("<h1>Adding-- Multiplication-- Division</h1>");

document.write("<p>Sum of the three values: " +
    arr[0] + " + " + arr[1] + " + " + arr[2] + " = " + sum + "</p>");
document.write("<p>Multiplication of the three values: " +
    arr[0] + " * " + arr[1] + " * " + arr[2] + " = " + multiplication + "</p>");
document.write("<p>Division of the three values: " +
    arr[0] + " / " + arr[1] + " / " + arr[2] + " = " + division + "</p>");
    