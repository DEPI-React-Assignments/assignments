const section = document.getElementById("colors-section");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const text = document.querySelector("article h2");
section.addEventListener("change", (e) => {
    text.style.color = `rgb(${red.value}, ${green.value}, ${blue.value})`;
});
