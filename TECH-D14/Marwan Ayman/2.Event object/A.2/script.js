function onlyNumbers(event) {

    if (event.key >= "0" && event.key <= "9")
        return;

    if (
        event.key == "Backspace" ||
        event.key == "Delete" ||
        event.key == "ArrowLeft" ||
        event.key == "ArrowRight"
    )
        return;

    event.preventDefault();
}