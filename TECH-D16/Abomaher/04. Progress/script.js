const secondBar = document.getElementById("barTwo");
const spanContent = document.getElementById("spanTwo");

function incrementProgress() {
    let currentState = parseInt(secondBar.getAttribute("value"));
    currentState++;
    if (currentState > 100) {
        currentState = 0;
    }
    secondBar.setAttribute("value", currentState);
    spanContent.textContent = currentState;
}

setInterval(() => {
    incrementProgress();
}, 500);
