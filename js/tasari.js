var currentSupport = 0;
var targetSupport = 1000;

function increaseSupport() {
  currentSupport++; // Mevcut destek sayısını artır
  var supportPercent = (currentSupport / targetSupport) * 100; // Yüzdelik hesaplama

  // DOM elementlerini güncelle
  document.getElementById("currentSupport").textContent = currentSupport;
  document.getElementById("progressBar").style.width = supportPercent + "%";
  document.getElementById("progressBar").textContent =
    parseFloat(supportPercent).toFixed(2) + "%";

  // Gerçek bir uygulamada, bu aşamada bir sunucu isteği gönderilir ve destek veritabanı kaydı yapılır.
  // AJAX, Fetch API ya da Axios gibi bir HTTP istemcisi kullanılarak RESTful API isteği yapılabilir.
}

// Local storage'dan teklifler dizisini alın
var teklifler = JSON.parse(localStorage.getItem("teklifler")) || [];

// Her bir teklif için post oluşturma
teklifler.forEach(function (teklif) {
  var yeniPostDiv = document.createElement("div");
  yeniPostDiv.classList.add("post");
  yeniPostDiv.innerHTML = `
  <div class="post">
  <div class="post-header">
    <h4>Gönderen: ${teklif.sender}</h4>
    <h5>${teklif.title}</h5>
      </div>
  <div class="post-content">
    <p>
      ${teklif.description}
    </p>
  </div>
  <button
    id="supportBtn"
    class="btn btn-primary"
    onclick="increaseSupport()"
  >
    Destekle
  </button>
  <div id="supportInfo" class="my-3">
    <h4>
      Destekçi Sayısı: <span id="currentSupport">0</span> /
      <span id="targetSupport">1000</span>
    </h4>
  </div>
  <div class="progress">
    <div
      id="progressBar"
      class="progress-bar"
      role="progressbar"
      style="width: 0%"
      aria-valuenow="0"
      aria-valuemin="0"
      aria-valuemax="1000"
    >
      0%
    </div>
  </div>
  <hr />
  <div>
    <h6>Yorumlar:</h6>
    <ul class="list-unstyled">
    </ul>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Yorumunuzu yazın..."
        aria-label="Yorumunuzu yazın"
      />
      <div class="input-group-append">
        <button class="btn btn-primary" type="button">Gönder</button>
      </div>
    </div>
  </div>
</div>
  `;

  // Container divini seçme ve yeni postu eklemek için appendChild kullanma
  var containerDiv = document.querySelector("#post-container");
  containerDiv.appendChild(yeniPostDiv);
});
