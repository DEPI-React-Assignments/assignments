var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var text = document.getElementById("text");

red.addEventListener("input", () => {
    text.style.color = "rgb(" + red.value + "," + green.value + "," + blue.value + ")";
});

green.addEventListener("input", () => {
    text.style.color = "rgb(" + red.value + "," + green.value + "," + blue.value + ")";
});

blue.addEventListener("input", () => {
    text.style.color = "rgb(" + red.value + "," + green.value + "," + blue.value + ")";
});