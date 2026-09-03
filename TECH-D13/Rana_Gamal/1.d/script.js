let header = document.getElementsByClassName("center")[0];
let headerDiv = header.firstElementChild;
let photo = headerDiv.firstElementChild;


let newPhoto = photo.cloneNode(true);
header.appendChild(newPhoto);

headerDiv.style.textAlign = "right";

newPhoto.style.display = "block";
newPhoto.style.marginRight = "auto";
newPhoto.style.marginLeft = "0";

let list = document.getElementById("nav");
list.style.listStyleType = "none";