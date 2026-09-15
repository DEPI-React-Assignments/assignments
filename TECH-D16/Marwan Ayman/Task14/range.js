var number = document.getElementById("number");
var range = document.getElementById("range");
var result = document.getElementById("result");

range.addEventListener("input", () => {
    result.textContent = Number(number.value) + Number(range.value);
});

number.addEventListener("input", () => {
    result.textContent = Number(number.value) + Number(range.value);
});