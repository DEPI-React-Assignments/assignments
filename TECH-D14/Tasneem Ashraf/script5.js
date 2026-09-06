var input= document.getElementById("number")
input.addEventListener("keypress",function(event){
    if(isNaN(event.key)||event.key===" "){
 alert("not a number")
 event.preventDefault()
}
})