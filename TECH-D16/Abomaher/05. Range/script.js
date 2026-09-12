const firstInput = document.getElementById("numFirst");
const secondInput = document.getElementById("numSecond");
const firstRange = document.getElementById("rangeFirst");
const secondRange = document.getElementById("rangeSecond");
const spanOne = document.getElementById("spanOne");
const spanTwo = document.getElementById("spanTwo");

function updateValue() {
    spanOne.textContent = Number(firstInput.value) + Number(firstRange.value);
    spanTwo.textContent = Number(secondInput.value) + Number(secondRange.value);
}

firstInput.addEventListener("input", updateValue);
firstRange.addEventListener("input", updateValue);

secondInput.addEventListener("input", updateValue);
secondRange.addEventListener("input", updateValue);
