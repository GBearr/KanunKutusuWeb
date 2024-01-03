var form = document.getElementById("proposalForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var title = document.getElementById("title").value;
  var category = document.getElementById("category").value;
  var description = document.getElementById("description").value;

  // Gönderen kişiyi sessionStorage'dan al
  var senderId = sessionStorage.getItem("userId");

  // Local storage'dan mevcut teklifleri alma
  var existingProposals = localStorage.getItem("teklifler");
  existingProposals = existingProposals ? JSON.parse(existingProposals) : [];

  // Gönderen kişi bilgisini almak için users listesini kontrol et
  var users = JSON.parse(localStorage.getItem("users"));
  var sender = null;

  for (var userId in users) {
    if (users.hasOwnProperty(userId)) {
      if (users[userId].id === parseInt(senderId)) {
        // Gönderen kişiyi "id" değerine göre kontrol et
        sender = users[userId];
        break;
      }
    }
  }

  // Yeni teklif objesini oluşturma
  var tasari = {
    senderId: senderId,
    id: existingProposals.length + 1, // Mevcut teklif sayısını id olarak atama
    title: title,
    category: category,
    description: description,
    sender: sender.firstName + " " + sender.lastName, // Gönderen kişiyi ekle
    support: 0,
    sentTime:
      new Date().getDay() +
      "/" +
      new Date().getMonth() +
      1 +
      "/" +
      new Date().getFullYear(),
  };

  // Yeni teklifi mevcut tekliflere ekleme
  existingProposals.push(tasari);

  // Güncellenmiş teklifleri local storage'e kaydetme
  localStorage.setItem("teklifler", JSON.stringify(existingProposals));

  console.log("Teklif Sunuldu. ID: " + tasari.id);

  window.location.href = "tasari.html";
});
