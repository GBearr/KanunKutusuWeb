document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var firstName = document.getElementById("inputFirstName").value;
    var lastName = document.getElementById("inputLastName").value;
    var username = document.getElementById("inputUsername").value;
    var email = document.getElementById("inputEmail").value;
    var password1 = document.getElementById("inputFirstPassword").value;
    var password2 = document.getElementById("inputSecondPassword").value;

    var existingUser = localStorage.getItem("users");
    existingUser = existingUser ? JSON.parse(existingUser) : [];

    var user = {
      id: existingUser.length + 1,
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password1,
    };

    if (password1 !== password2) {
      alert("Parolalar eşleşmiyor!");
    } else {
      existingUser.push(user);
      localStorage.setItem("users", JSON.stringify(existingUser)); // JSON verisini farklı anahtarla yerel depolamaya kaydetme

      console.log("Kullanıcı kaydedildi. Anahtar: " + userKey);
    }
  });
