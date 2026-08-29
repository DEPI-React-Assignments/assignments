var text = window.prompt("Enter a wordama");
var considercase = window.confirm("Do you want to consider the case?");
var originaltext = text;
if(considercase == false){
    text = text.toLowerCase();
}
var reversedtext = text.split("").reverse().join("");
if (text == reversedtext){
    alert(originaltext + " is a palindrome");

}else{
    alert (originaltext + " is not a palindrome");
}
