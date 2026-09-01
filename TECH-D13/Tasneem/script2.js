var maindiv=document.getElementById("header");
var newdiv= document.getElementById("copy");
var mycopy= maindiv.firstElementChild.cloneNode(true);
console.log(mycopy);
newdiv.appendChild(mycopy);