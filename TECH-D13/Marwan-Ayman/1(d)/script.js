var header = document.getElementById("header");

var navigation = document.getElementById("navigation");

var nav = document.getElementById("nav");

var img = header.firstElementChild;

img.style.width = "100px";

header.style.textAlign = "right";

navigation.style.textAlign = "center";

var newImg = document.createElement("img");

newImg.setAttribute("src", "dom.jpg");

newImg.setAttribute("alt", "hello");

newImg.style.width = "100px";

document.getElementsByClassName("center")[0].style.textAlign = "left";

document.getElementsByClassName("center")[0].appendChild(newImg);

var line = document.createElement("hr");

document.getElementsByClassName("center")[0].appendChild(line);