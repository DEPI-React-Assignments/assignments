alert("Welcome to my site");

var userName = prompt("Enter your name:");
var color;

do {
    color = prompt("Choose a color: red, green or blue");

    if (color !== null) {
        color = color.toLowerCase();
    }
} while (
    color !== null &&
    color != "red" &&
    color != "green" &&
    color != "blue"
);

if (userName !== null && color !== null) {
    document.write("<p class='" + color + "'>Welcome, " + userName + "</p>");
}
