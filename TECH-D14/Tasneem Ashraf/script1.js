function randomcolor(){
  var r = Math.floor(Math.random() * 256); 
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return`rgb(${r}, ${g},${b})`;
}
var maindiv=document.querySelector("div")
maindiv.addEventListener("click",function(){
    var copydiv=maindiv.cloneNode(true)
    copydiv.style.backgroundColor=randomcolor();
    document.body.appendChild(copydiv)
})