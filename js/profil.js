function getProfilBilgileri() {
  var key = sessionStorage.getItem("userId");

  // Kullanıcıları localStorage'dan al
  var users = JSON.parse(localStorage.getItem("users"));
  // Teklifleri localStorage'dan al
  var teklifler = JSON.parse(localStorage.getItem("teklifler"));

  var profilBilgileri = null;
  var uygunTeklifler = [];

  // Profil bilgilerini bul
  for (var userId in users) {
    if (users.hasOwnProperty(userId)) {
      if (users[userId].id === parseInt(key)) {
        profilBilgileri = users[userId];
        break;
      }
    }
  }

  if (profilBilgileri) {
    document.getElementById("adi").textContent = profilBilgileri.firstName;
    document.getElementById("soyadi").textContent = profilBilgileri.lastName;

    // Diğer bilgileri de benzer şekilde yerleştir

    // Uygun teklifleri bul
    for (var i = 0; i < teklifler.length; i++) {
      if (teklifler[i].senderId === key) {
        uygunTeklifler.push(teklifler[i]);
      }
    }

    // Uygun teklifleri listele
    var tekliflerHTML = "";
    for (var j = 0; j < uygunTeklifler.length; j++) {
      var teklif = uygunTeklifler[j];
      tekliflerHTML += `
    <div class="post">
      <div class="post-header">
        <h4>Gönderen: ${teklif.sender}</h4>
        <h5>${teklif.title}</h5>
      </div>
      <div class="post-content">
        <p>${teklif.description}</p>
      </div>
    </div>
  </div>
</div>
`;
    }
    if (uygunTeklifler.length > 0) {
      document.getElementById("teklifler-listesi").innerHTML = tekliflerHTML;
    } else {
      document.getElementById("teklifler-listesi").innerHTML =
        "<li>Henüz teklif yok</li>";
    }
  }
}

getProfilBilgileri();
