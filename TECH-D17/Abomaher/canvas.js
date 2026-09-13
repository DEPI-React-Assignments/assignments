const color = document.getElementById("colorPicker");
const btn = document.getElementById("clickMe");
const canvas = document.getElementById("canvas");
let colorValue = color.value;

canvas.width = 1200;
canvas.height = 800;

function createBubble(color) {
    const randX = parseInt(Math.random() * 1200);
    const randY = parseInt(Math.random() * 800);
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(randX, randY, 30, 0, Math.PI * 2);
    ctx.stroke();
}

color.addEventListener("change", () => {
    colorValue = color.value;
});

btn.addEventListener("click", () => {
    createBubble(colorValue);
});
