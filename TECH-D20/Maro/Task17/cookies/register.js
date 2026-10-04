document.getElementById("register").addEventListener("click", function () {

    var username = document.getElementById("username").value;
    var age = document.getElementById("age").value;
    var color = document.getElementById("color").value;

    var gender;

    if (document.getElementById("male").checked) {
        gender = "male";
    }
    else if (document.getElementById("female").checked) {
        gender = "female";
    }

    if (username == "" || age == "" || gender == undefined) {
        alert("Please enter all data");
        return;
    }

    setCookie("username", username);
    setCookie("age", age);
    setCookie("gender", gender);
    setCookie("color", color);
    setCookie("visits", 0);

    location.href = "profile.html";

});