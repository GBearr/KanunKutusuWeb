// Teklif ID'sini URL'den alın
var urlParams = new URLSearchParams(window.location.search);
var proposalId = urlParams.get("id");

// Local storage'dan teklifler dizisini alın
var teklifler = JSON.parse(localStorage.getItem("teklifler")) || [];

// İstediğimiz teklifi bulun
var istenenTeklif = teklifler.find(function (teklif) {
  return teklif.id.toString() === proposalId;
});

// Teklif ayrıntılarını HTML içeriğiyle değiştirin
if (istenenTeklif) {
  document.getElementById("proposal-title").textContent = istenenTeklif.title;
  document.getElementById("proposal-description").textContent =
    istenenTeklif.description;
  document.getElementById("proposal-category").textContent =
    "Kategori: " + istenenTeklif.category;
  document.getElementById("proposal-date").textContent =
    "Gönderim Tarihi: " + istenenTeklif.sentTime;
  document.getElementById("proposal-status").textContent = "Durum: " + "---";
} else {
  // İstediğiniz teklif bulunamadı
  document.getElementById("proposal-title").textContent = "Teklif Bulunamadı";
}
