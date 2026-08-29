var text = window.prompt("Enter a word:");
var count = 0;
for (var i = 0; i < text.length; i++) {
    if (text[i].toLocaleLowerCase() == 'e') {
        count++;
    }
}
alert("Number of 'e' characters = " + count);