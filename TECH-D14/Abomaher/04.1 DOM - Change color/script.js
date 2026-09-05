const body = document.body;
const div = document.getElementById("original");
const randomColor = () => {
    return `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0")}`;
};

div.addEventListener("click", () => {
    const cloned = div.cloneNode(true);
    cloned.style.backgroundColor = randomColor();
    body.append(cloned);
});
