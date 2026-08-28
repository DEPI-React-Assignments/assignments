while (true) {
    var myStr = prompt("Enter a string: ");
    if (myStr != null) {
        break;
    }
}
myStr = myStr.trim();
var n = 0;
for (var i = 0; i < myStr.length; ++i) {
    if (myStr[i] == "e") {
        n += 1;
    }
}

alert(`The total number of e's inside your string is ${n}`);
