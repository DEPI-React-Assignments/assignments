const element = document.querySelector(".header");
const foot = element.cloneNode(true);

foot.style.alignSelf = "flex-start";

document.body.appendChild(foot);
