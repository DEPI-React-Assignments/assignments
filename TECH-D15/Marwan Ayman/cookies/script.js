function getCookie(cookieName) {

    var cookies = document.cookie.split("; ");

    for (var i = 0; i < cookies.length; i++) {

        var cookie = cookies[i].split("=");

        if (cookie[0] == cookieName) {

            return cookie[1];

        }
    }

    return null;
}


function setCookie(cookieName, cookieValue, expiryDate) {

    if (expiryDate) {

        document.cookie =
            cookieName + "=" + cookieValue +
            "; expires=" + expiryDate.toUTCString();

    }
    else {

        document.cookie =
            cookieName + "=" + cookieValue;

    }
}


function deleteCookie(cookieName) {

    document.cookie =
        cookieName +
        "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";

}


function allCookieList() {

    var cookies = document.cookie.split("; ");

    var cookieList = {};

    for (var i = 0; i < cookies.length; i++) {

        var cookie = cookies[i].split("=");

        cookieList[cookie[0]] = cookie[1];

    }

    return cookieList;
}


function hasCookie(cookieName) {

    return getCookie(cookieName) != null;

}



if (document.getElementById("registerForm")) {

var registerForm =
document.getElementById("registerForm");


registerForm.addEventListener(
"submit",
    function (event) {

    event.preventDefault();


    var username =
        document.getElementById("username").value;


    var gender =
        document.querySelector(
            'input[name="gender"]:checked'
        );


    var color =
        document.getElementById("userColor").value;


if (username == "" || gender == null) {

    alert("Please enter all data");

    return;

}


    setCookie(
        "username",
        username
    );


    setCookie(
        "gender",
        gender.value
    );


    setCookie(
        "color",
        color
    );


if (!hasCookie("visits")) {

    setCookie(
        "visits",
        "1"
    );

}
else {

    var visits =
        Number(getCookie("visits"));

    visits++;

    setCookie(
        "visits",
        visits
    );

}


window.location.href = "index2.html";

}
 );

  }



if (document.getElementById("profile")) {

    var username =
        getCookie("username");


    var gender =
        getCookie("gender");


    var color =
        getCookie("color");


    var visits =
        getCookie("visits");


    var welcome =
        document.getElementById("welcome");


    var visitsElement =
        document.getElementById("visits");


    var profileImage =
        document.getElementById("profileImage");


    welcome.textContent =
        "Welcome " + username;


    visitsElement.textContent =
        "You visited this site " +
        visits +
        " times";


    welcome.style.color = color;

    visitsElement.style.color = color;


    if (gender == "male") {

        profileImage.src = "male.jpg";

    }
    else {

        profileImage.src = "female.jpg";

    }

}