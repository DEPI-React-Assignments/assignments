window.addEventListener("keydown", (event) => {
    const modifierKeys = [];

    if (event.altKey) {
        modifierKeys.push("Alt");
    }

    if (event.ctrlKey) {
        modifierKeys.push("Ctrl");
    }

    if (event.shiftKey) {
        modifierKeys.push("Shift");
    }

    const modifiersMessage = modifierKeys.length
        ? modifierKeys.join(", ")
        : "None";

    alert(
        `Key: ${event.key}\nASCII code: ${event.keyCode}\n` +
            `Modifier keys: ${modifiersMessage}`,
    );
});
