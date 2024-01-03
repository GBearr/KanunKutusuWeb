const emailInput = document.getElementById("inputEmail");
const passwordInput = document.getElementById("inputPassword");
const loginButton = document.querySelector(".btn-primary");

document.addEventListener("DOMContentLoaded", function () {
  sessionStorage.removeItem("userId");
});

loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  const userEmail = emailInput.value;
  const userPassword = passwordInput.value;

  const users = JSON.parse(localStorage.getItem("users"));

  if (users) {
    for (const user of users) {
      if (userEmail === user.email && userPassword === user.password) {
        sessionStorage.setItem("userId", user.id);
        window.location = "main.html";
        return;
      }
    }
  }

  alert("Hatalı email veya şifre");
});
