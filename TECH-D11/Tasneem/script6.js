var a = [];
for (var i = 0; i < 5; i++) {
     a[i]=parseFloat(prompt("enter the"+(i+1)+"value: "));
}
var ascending = arr.slice().sort((x, y) => x - y);
var descending = arr.slice().sort((x, y) => y - x);

alert(
    "Original values: " + arr + "\n" +
    "Ascending order: " + ascending + "\n" +
    "Descending order: " + descending
);