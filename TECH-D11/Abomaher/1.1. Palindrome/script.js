while (true) {
    var myStr = prompt("Enter a word: ");
    if (myStr != null && myStr != "") {
        break;
    }
}
myStr = myStr.trim();
var decision = confirm("Want to consider case sensitivity? ");
var flg = true;

if (!decision) {
    myStr = myStr.toLowerCase();
}

for (var i = 0; i < myStr.length; ++i) {
    console.log(myStr[i], myStr[myStr.length - (i + 1)]);
    if (myStr[i] == myStr[myStr.length - (i + 1)]) {
        flg = true;
    } else {
        flg = false;
        break;
    }
}
if (flg) {
    alert("Palindrome");
} else {
    alert("Not Palindrome");
}
