var timeout = setTimeout(function () {
    alert("Timeout");
}, 30000);


function register(event) {

    event.preventDefault();

    clearTimeout(timeout);

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var address = document.getElementById("address").value;

    var gender = document.querySelector('input[name="gender"]:checked');

    if (gender == null) {
        gender = "";
    }
    else {
        gender = gender.value;
    }

    location.href =
        "Welcome.html?name=" + name +
        "&email=" + email +
        "&mobile=" + mobile +
        "&gender=" + gender +
        "&address=" + address;
}


function showUserInfo() {

    var data = location.search;

    data = data.substring(1);

    var values = data.split("&");

    var name = decodeURIComponent(values[0].split("=")[1]);
    var email = decodeURIComponent(values[1].split("=")[1]);
    var mobile = decodeURIComponent(values[2].split("=")[1]);
    var gender = decodeURIComponent(values[3].split("=")[1]);
    var address = decodeURIComponent(values[4].split("=")[1]);

    document.getElementById("userInfo").innerHTML =
        "Welcome " + name + "<br>" +
        "Email: " + email + "<br>" +
        "Mobile: " + mobile + "<br>" +
        "Gender: " + gender + "<br>" +
        "Address: " + address;
}


showUserInfo();