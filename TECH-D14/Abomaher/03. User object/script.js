const body = document.body;
let width;
let height;
do {
    width = Number(prompt("Choose width: "));
} while (!Number.isFinite(width) || width <= 0);

do {
    height = Number(prompt("Choose height: "));
} while (!Number.isFinite(width) || width <= 0);

const rectangle = document.createElement("div");
rectangle.setAttribute("style", "margin: 0 auto");
rectangle.style.backgroundColor = "red";
rectangle.style.width = `${width}px`;
rectangle.style.height = `${height}px`;

body.append(rectangle);
displayInfo(width, height);

// Methods & Functions
function calcArea(w, h) {
    return w * h;
}
function calcPerimeter(w, h) {
    return 2 * w + 2 * h;
}

function displayInfo(w, h) {
    console.log(`Rectangle width and height are: ${w}, ${h} respectively.`);
    console.log(`Rectangle area is ${calcArea(w, h)}`);
    console.log(`Rectangle perimeter is ${calcPerimeter(w, h)}`);
}
