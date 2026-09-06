document.addEventListener("keydown",function(event){

    if (event.altKey){
      alert("Alt key is pressed")
    }
    if (event.ctrlKey){
      alert("ctrl key is pressed")
    }
    if (event.shiftKey){
      alert("shift key is pressed")
    }
     else
     {
           alert ("The pressed key is: " +event.key+"  The ASCII code of it is: "+event.keyCode)
     }
})