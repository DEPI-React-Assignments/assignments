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
