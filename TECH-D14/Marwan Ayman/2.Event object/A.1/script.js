function keyDown(event) {

    alert("ASCII Code = " + event.keyCode);

    if (event.altKey) {
        alert("Alt is pressed");
    }

    if (event.ctrlKey) {
        alert("Ctrl is pressed");
    }

    if (event.shiftKey) {
        alert("Shift is pressed");
    }
}