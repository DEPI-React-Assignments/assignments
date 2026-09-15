var inputColor = document.getElementById("inputColor");
var btn = document.getElementById("btn");

var can = document.getElementById("canvas");
var ctx = can.getContext("2d");

can.width = window.innerWidth;
can.height = window.innerHeight;

btn.addEventListener("click", function () {

    for (var i = 0; i < 100; i++) {

        var x = Math.random() * can.width;
        var y = Math.random() * can.height;

        ctx.beginPath();

        ctx.strokeStyle = inputColor.value;

        ctx.arc(x, y, 20, 0, 2 * Math.PI);

        ctx.stroke();
    }

});