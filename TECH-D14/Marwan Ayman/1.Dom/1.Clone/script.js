function cloneDiv(div) {

    var newDiv = div.cloneNode(true);

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    newDiv.style.backgroundColor =
        "rgb(" + r + "," + g + "," + b + ")";

    document.body.appendChild(newDiv);
}