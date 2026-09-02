const container = document.querySelector(".container");
const header = document.querySelector("#header");
const navigation = document.querySelector("#navigation");
const navList = document.querySelector("#nav");

header.style.textAlign = "right";

const originalImage = header.querySelector("img");
originalImage.style.width = "100px";

navigation.style.textAlign = "center";

navList.style.listStyleType = "none";

const bottomImage = document.createElement("img");

bottomImage.src = "dom.jpg";
bottomImage.alt = "hello";
bottomImage.style.width = "100px";

const imageSection = document.createElement("div");

imageSection.style.textAlign = "left";
imageSection.appendChild(bottomImage);

container.appendChild(imageSection);

const horizontalLine = document.createElement("hr");

container.appendChild(horizontalLine);
