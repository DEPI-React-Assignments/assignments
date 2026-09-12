function getCookie(cookieName) {
    const cookies = document.cookie.split("; ");

    for (const cookie of cookies) {
        const [name, value] = cookie.split("=");
        if (name === cookieName) {
            return decodeURIComponent(value);
        }
    }

    return null;
}

function setCookie(cookieName, cookieValue, expiryDate) {
    let cookie = `${cookieName}=${encodeURIComponent(cookieValue)}; path=/`;

    if (expiryDate) {
        cookie += `; expires=${expiryDate.toUTCString()}`;
    }

    document.cookie = cookie;
}

function deleteCookie(cookieName) {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() - 1);
    setCookie(cookieName, "", expiryDate);
}

function allCookieList() {
    const cookieList = {};

    if (document.cookie) {
        document.cookie.split("; ").forEach(function (cookie) {
            const [name, value] = cookie.split("=");
            cookieList[name] = decodeURIComponent(value);
        });
    }

    return cookieList;
}

function hasCookie(cookieName) {
    return getCookie(cookieName) !== null;
}

const registrationForm = document.querySelector("form");

if (registrationForm) {
    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const userName = document.getElementById("name").value.trim();
        const selectedGender = document.querySelector(
            'input[name="gender"]:checked',
        );
        const favColor = document.getElementById("color").value;

        if (userName === "" || !selectedGender) {
            alert("Please enter your name and choose your gender.");
            return;
        }

        let visits = Number(getCookie("visits")) || 0;
        visits += 1;

        setCookie("userName", userName);
        setCookie("gender", selectedGender.value);
        setCookie("favColor", favColor);
        setCookie("visits", visits);

        location.replace("profile.html");
    });
}

const profileName = document.getElementById("profileName");

if (profileName) {
    const userName = getCookie("userName");
    const gender = getCookie("gender");
    const favColor = getCookie("favColor");
    const visits = getCookie("visits");
    const profileImage = document.getElementById("profileImage");

    if (!userName || !gender) {
        location.replace("register.html");
    } else {
        profileName.textContent = userName;
        profileName.style.color = favColor;
        document.getElementById("visits").textContent = visits;
        document.getElementById("visits").style.color = favColor;
        profileImage.src = `Images/${gender}.jpg`;
        profileImage.alt = `${gender} profile picture`;
    }
}
