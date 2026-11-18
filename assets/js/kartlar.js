(function () {
  "use strict";

  var ALAN = {
    1: "Denetim süreci",
    2: "BT yönetişimi",
    3: "Edinim, geliştirme ve devreye alma",
    4: "Operasyon ve iş sürekliliği",
    5: "Bilgi varlıklarının korunması"
  };
  var ANAHTAR = "btdenetimnotlari.kartlar.v1";
  var kok = document.getElementById("kart-uygulama");
  var ham = document.getElementById("kart-veri");
  if (!kok || !ham) return;

  var tumu;
  try {
    tumu = JSON.parse(ham.textContent);
  } catch (e) {
    return;
  }
  if (!tumu || !tumu.length) return;

  var durum = document.getElementById("kart-durum");
  var olcu = document.getElementById("kart-olcu");
  var dolu = document.getElementById("kart-olcu-dolu");
  var dugme = document.getElementById("kart-dugme");
  var onEtiket = document.getElementById("kart-on-etiket");
  var onMetin = document.getElementById("kart-on-metin");
  var arkaMetin = document.getElementById("kart-arka-metin");
  var arkaYuz = dugme.querySelector(".kart-arka");
  var ipucu = document.getElementById("kart-ipucu");
  var filtreler = kok.querySelectorAll(".kart-filtre button");

  var alan = 0;
  var sira = 0;
  var karisik = false;
  var desteler = { 0: tumu.slice() };
  [1, 2, 3, 4, 5].forEach(function (n) {
    desteler[n] = tumu.filter(function (k) { return Number(k.alan) === n; });
  });

  function oku() {
    try {
      var veri = JSON.parse(localStorage.getItem(ANAHTAR) || "{}");
      return veri && typeof veri === "object" ? veri : {};
    } catch (e) {
      return {};
    }
  }

  function yaz(veri) {
    try {
      localStorage.setItem(ANAHTAR, JSON.stringify(veri));
    } catch (e) {
      /* gizli pencerede depo kapalı olabilir; sayfa yine çalışır */
    }
  }

  function deste() {
    return desteler[alan] || desteler[0];
  }

  function kart() {
    return deste()[sira] || null;
  }

  function karistir(liste) {
    var kopya = liste.slice();
    for (var i = kopya.length - 1; i > 0; i -= 1) {
      var j = Math.floor(Math.random() * (i + 1));
      var gecici = kopya[i];
      kopya[i] = kopya[j];
      kopya[j] = gecici;
    }
    return kopya;
  }

  function cevir(acik) {
    var su = kart();
    dugme.classList.toggle("cevirildi", acik);
    dugme.setAttribute("aria-pressed", acik ? "true" : "false");
    arkaYuz.setAttribute("aria-hidden", acik ? "false" : "true");
    if (!su) return;
    var yuz = acik ? "Yanıt" : "Soru";
    var metin = acik ? su.arka : su.soru;
    dugme.setAttribute("aria-label", yuz + ". " + metin + ". Çevirmek için tıklayın veya Space.");
  }

  function goster() {
    var liste = deste();
    var isaret = oku();
    if (!liste.length) {
      onMetin.textContent = "Bu alanda kart yok.";
      arkaMetin.textContent = "";
      durum.textContent = "Gösterilecek kart yok.";
      return;
    }
    if (sira < 0 || sira >= liste.length) sira = 0;
    var su = kart();
    onEtiket.textContent = "Soru · " + (ALAN[su.alan] || "");
    onMetin.textContent = su.soru;
    arkaMetin.textContent = su.arka;
    cevir(false);

    var marka = isaret[su.id] || "";
    document.getElementById("kart-biliyorum").setAttribute("aria-pressed", marka === "biliyorum" ? "true" : "false");
    document.getElementById("kart-tekrar").setAttribute("aria-pressed", marka === "tekrar" ? "true" : "false");

    var biliyorum = 0;
    var tekrar = 0;
    liste.forEach(function (k) {
      if (isaret[k.id] === "biliyorum") biliyorum += 1;
      if (isaret[k.id] === "tekrar") tekrar += 1;
    });
    var toplam = liste.length;
    var alanAd = alan === 0 ? "Tüm kartlar" : ALAN[alan];
    durum.textContent = alanAd + " · " + (sira + 1) + " / " + toplam +
      " · Biliyorum " + biliyorum + " · Tekrar " + tekrar;
    olcu.setAttribute("aria-valuemax", String(toplam));
    olcu.setAttribute("aria-valuenow", String(biliyorum));
    olcu.setAttribute("aria-valuetext", biliyorum + " / " + toplam + " biliyorum");
    dolu.style.width = toplam ? ((biliyorum / toplam) * 100) + "%" : "0%";
    ipucu.textContent = marka === "tekrar"
      ? "Bu kart tekrar için işaretli."
      : (marka === "biliyorum" ? "Bu kartı biliyorsunuz." : "Henüz işaretlenmedi.");
  }

  function git(adim) {
    var liste = deste();
    if (!liste.length) return;
    sira = (sira + adim + liste.length) % liste.length;
    goster();
    dugme.focus();
  }

  function isaretle(tur) {
    var su = kart();
    if (!su) return;
    var veri = oku();
    if (veri[su.id] === tur) delete veri[su.id];
    else veri[su.id] = tur;
    yaz(veri);
    goster();
  }

  dugme.addEventListener("click", function () {
    cevir(!dugme.classList.contains("cevirildi"));
  });

  document.getElementById("kart-once").addEventListener("click", function () { git(-1); });
  document.getElementById("kart-sonra").addEventListener("click", function () { git(1); });
  document.getElementById("kart-biliyorum").addEventListener("click", function () { isaretle("biliyorum"); });
  document.getElementById("kart-tekrar").addEventListener("click", function () { isaretle("tekrar"); });

  document.getElementById("kart-karistir").addEventListener("click", function () {
    karisik = true;
    Object.keys(desteler).forEach(function (anahtar) {
      var n = Number(anahtar);
      var kaynak = n === 0 ? tumu : tumu.filter(function (k) { return Number(k.alan) === n; });
      desteler[n] = karistir(kaynak);
    });
    sira = 0;
    goster();
  });

  document.getElementById("kart-sifirla").addEventListener("click", function () {
    var onay = window.confirm("Bu tarayıcıdaki kart işaretleri silinsin mi? Kartların kendisi durur.");
    if (!onay) return;
    yaz({});
    goster();
  });

  filtreler.forEach(function (btn) {
    btn.addEventListener("click", function () {
      alan = Number(btn.getAttribute("data-alan"));
      sira = 0;
      filtreler.forEach(function (diger) {
        var secili = diger === btn;
        diger.classList.toggle("aktif", secili);
        diger.setAttribute("aria-pressed", secili ? "true" : "false");
      });
      goster();
    });
  });

  document.addEventListener("keydown", function (olay) {
    if (!kok.contains(document.activeElement)) return;
    var etiket = (olay.target.tagName || "").toLowerCase();
    if (etiket === "input" || etiket === "textarea" || etiket === "select") return;
    if (olay.key === "ArrowRight") {
      olay.preventDefault();
      git(1);
    } else if (olay.key === "ArrowLeft") {
      olay.preventDefault();
      git(-1);
    } else if ((olay.key === " " || olay.key === "Spacebar") && olay.target !== dugme && etiket !== "button" && etiket !== "a") {
      olay.preventDefault();
      cevir(!dugme.classList.contains("cevirildi"));
    }
  });

  if (!karisik) desteler[0] = tumu.slice();
  goster();
})();
