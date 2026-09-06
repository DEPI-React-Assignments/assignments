var pass=document.getElementById("password")
var copy=document.getElementById("copy")
function appear(){
  if (pass.type==="password")
  {
    var c=pass.cloneNode(true)
    c.type="text"
    copy.appendChild(c)
  }
}