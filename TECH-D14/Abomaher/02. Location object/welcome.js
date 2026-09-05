const userInfo = new URLSearchParams(window.location.search);

const name = userInfo.get("name");
const address = userInfo.get("address");
const gender = userInfo.get("gender");
const email = userInfo.get("email");
const mobile = userInfo.get("mobile");

document.getElementById("greeting").textContent = `Welcome, ${name}!`;
document.getElementById("address").textContent = address;
document.getElementById("gender").textContent = gender;
document.getElementById("email").textContent = email;
document.getElementById("mobile").textContent = mobile;
