// Local storage'dan teklifler dizisini alın
var teklifler = JSON.parse(localStorage.getItem("teklifler")) || [];

// Her bir teklif için post oluşturma
teklifler.forEach(function (teklif) {
  var yeniPostDiv = document.createElement("tr");
  yeniPostDiv.classList.add("tr");
  yeniPostDiv.id = `proposal-${teklif.id}`;
  yeniPostDiv.innerHTML = `
 <th scope="row">${teklif.id}</th>
 <td>${teklif.title}</td>
 <td>${teklif.category}</td>
 <td>${teklif.sentTime}</td>
 <td>
   <div class="badge bg-success text-dark">--</div>
 </td>
`;

  var tableBody = document.querySelector(".t-body");
  tableBody.appendChild(yeniPostDiv);

  yeniPostDiv.onclick = function () {
    var proposalId = teklif.id;
    redirectToDetailPage(proposalId);
  };
});

// Belirli bir tr elementine tıklanıldığında yönlendirme yapma fonksiyonu
function redirectToDetailPage(proposalId) {
  // proposalId parametresi alıp ilgili sayfaya yönlendirin
  window.location.href = `../html/proposal_detail.html?id=${proposalId}`;
}
