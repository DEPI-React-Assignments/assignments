var form = document.getElementById("form");
var name =document.getElementById("name");
var email =document.getElementById("email");
var mobile = document.getElementById("mobile");
var address= document.getElementById("address");
var button=document.getElementsByTagName("button")[0];
var male = document.getElementById("male");
var female = document.getElementById("female");
var data=false;
form.addEventListener("input",function(){
    data=true;
})
setTimeout(()=>{
 if (data==false)
    alert("there is no input")
},3000)
button.addEventListener("click",function(){
    var n=name.value
    var e=email.value
    var m=mobile.value
    var a=address.value
    var g=""
   if (male.checked) {
    g = male.value;
} else {
    g = female.value;
}
})
var info =document.getElementsByClassName("information")
 var child = window.open("./index81.html");

    child.document.getElementsByClassName("information")[0].innerHTML =
        "Welcome " + n;

    child.document.getElementsByClassName("information")[1].innerHTML =
        "Email: " + e;

    child.document.getElementsByClassName("information")[2].innerHTML =
        "Mobile: " + m;

    child.document.getElementsByClassName("information")[3].innerHTML =
        "Gender: " + g;

    child.document.getElementsByClassName("information")[4].innerHTML =
        "Address: " + a;