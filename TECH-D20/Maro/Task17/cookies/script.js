function setCookie(cookieName, cookieValue, expiryDate) {
    var cookie = cookieName + "=" + cookieValue;

    if (expiryDate != null) {
        cookie += ";expires=" + expiryDate.toUTCString();
    }

    document.cookie = cookie;
}


function getCookie(cookieName) {

    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {

        var cookie = cookies[i].trim();

        if (cookie.indexOf(cookieName + "=") == 0) {
            return cookie.substring(cookieName.length + 1);
        }
    }

    return null;
}


function deleteCookie(cookieName) {
    var expiryDate = new Date();

    expiryDate.setDate(expiryDate.getDate() - 1);

    setCookie(cookieName, "", expiryDate);
}


function allCookieList() {

    var cookies = document.cookie.split(";");
    var cookieList = [];

    for (var i = 0; i < cookies.length; i++) {

        var cookie = cookies[i].trim();

        if (cookie != "") {
            var name = cookie.split("=")[0];
            cookieList.push(name);
        }
    }

    return cookieList;
}


function hasCookie(cookieName) {
    return getCookie(cookieName) != null;
}