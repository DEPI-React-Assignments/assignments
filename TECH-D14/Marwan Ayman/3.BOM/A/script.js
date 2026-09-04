function openChild() {

    var child = window.open("", "child");

    child.document.write("<h2>Child Window</h2>");

    setTimeout(function () {
        child.close();
    }, 5000);
}