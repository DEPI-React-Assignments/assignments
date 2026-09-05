const readAyah = document.getElementById("readAyah");

readAyah.addEventListener("click", () => {
    const childWindow = window.open(
        "https://wah-hab.github.io/",
        "window",
        "width=600,height=500",
    );

    setTimeout(() => {
        childWindow.close();
    }, 5000);
});
