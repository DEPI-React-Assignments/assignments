while (true) {
    var radius = prompt(
        "What is the value of your circles radius? ",
        "Type radius here",
    );
    if (radius != null && radius != "" && !isNaN(Number(radius))) {
        break;
    }
}
radius = Number(radius);
alert(`Total area of the circle is ${Math.PI * Math.pow(radius, 2)}`);

while (true) {
    var sqrt = prompt(
        "What is the value you want to calculate its square root? ",
        "Type the value here",
    );
    if (sqrt != null && sqrt != "" && !isNaN(Number(sqrt))) {
        break;
    }
}
sqrt = Number(sqrt);

alert(`Square root of ${sqrt} is ${Math.sqrt(sqrt)}`);
