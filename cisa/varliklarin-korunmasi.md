---
layout: page
title: Bilgi varlıklarının korunması
permalink: /cisa/varliklarin-korunmasi/
description: Verinin sahibi, erişim ve iz kaydı üzerine özgün taslak not. Saldırı adımı içermez.
ozet: Koruma, her şeye aynı kilidi vurmak değildir. Önce varlığın sahibi ve erişenin gerekçesi sorulur.
kod: SD-C-05
sira: 5
bolum: cisa
ust: CISA notları
ust_url: /cisa/
---

Resmi İngilizce adıyla bu alan, bilgi varlıklarının korunmasıdır. Benim cümlemle: neyi koruduğumuzu bilmeden kilit seçilmez.

## Neyi anlamaya çalışıyorum

Varlık, burada sunucunun kendisi olmak zorunda değildir. Müşteri listesi, ortak posta kutusu, yedek dosya veya bir hizmet hesabı da varlıktır. Sahibi olmayan varlıkta “kim erişebilir” sorusu havada kalır.

Koruma üç yönetim sorusuna iner. Kim, hangi gerekçeyle erişiyor. Erişim ve değişiklik izi duruyor mu, izi kim silebiliyor. Bilinen açıklıklar bir listede mi, yoksa yalnızca haberlerde mi. Bunlar süreç sorusudur. Bu sayfada sızma adımı, araç komutu veya zafiyet tarifi yoktur.

Sınıflandırma da abartısız düşünülür. Her dosyaya “çok gizli” demek, hiçbirine dememekle aynı kapıya çıkar: sıra kalkar. Etiket, kimin göreceğini değiştirmiyorsa etiket değildir.

Erişimin gözden geçirilmesi bu alanla konuşur. Pratik sıra [erişim yazısında]({{ '/yazilar/erisim-listesini-acmadan-once/' | relative_url }}), madde listesi [kaynakta]({{ '/kaynaklar/erisim-gozden-gecirme/' | relative_url }}).

## Kendi sözlüğüm

- **Varlık.** Korunması istenen veri, hizmet veya hesap. “Sistem” diye geçiştirilmez.
- **Sahip.** O varlık için evet veya hayır diyebilen kişi. Ortak kutu bir sahip değildir.
- **Ayrıcalıklı erişim.** Çoğu kişinin yapmaması gereken işi yapabilen hesap. Adedi az diye yazılmaz sanılmamalı.
- **İz.** Kim, neyi, ne zaman değiştirdi. Sonradan silinebiliyorsa iz zayıftır.

## Mini senaryo

Bir klinikte randevu notları ortak bir posta kutusunda birikiyor. Kutu “resepsiyon” diye duruyor. İşten ayrılan iki kişi hâlâ alıcı. Kutunun sahibi olarak bir ad yok; “herkes bakıyor”. Gözlem: kişisel veri sayılabilecek notlar, sahibi yazılmamış bir kutuda, ayrılan kişilerin erişimiyle duruyor. Bu cümle bir saldırı tarif etmez. Erişim gerekçesinin ve sahibin eksik olduğunu söyler.

Kuruluş kurgusaldır. Gerçek bir klinik değildir.

## Özgün tekrar

<details>
<summary>Soru 1. Sınav sorusu değildir.</summary>
<p>Ortak posta kutusunda müşteri notu var, sahip yok, ayrılan kişi hâlâ alıcı. İlk not hangi eksikliği yazmalı?</p>
<p><strong>Bu nottaki yanıt.</strong> Sahibin adı olmadığını ve ayrılan kişinin erişiminin sürdüğünü. “Veri sızmıştır” demek, görülmeyen bir olayı yazmak olur. Görülen, gerekçesiz erişim ve sahipsiz kutudur.</p>
</details>

<details>
<summary>Soru 2. Sınav sorusu değildir.</summary>
<p>Bütün dosyalar “gizli” etiketli. Etiket kimsenin erişimini değiştirmiyor. Sınıflandırma çalışıyor denebilir mi?</p>
<p><strong>Bu nottaki yanıt.</strong> Hayır. Etiket bir sonuç değiştirmiyorsa sınıflandırma kâğıtta kalmıştır. Not, etiketin kararı etkileyip etkilemediğini yazar; etiket sayısını yazıp geçmez.</p>
</details>

## Kendi eklemelerim

- [ ] Sahipsiz bir varlık örneğini kendi cümlemle yazdım.
- [ ] Bu sayfaya komut, zafiyet veya saldırı adımı eklemedim.
- [ ] Resmi özetteki güncel alan adını kontrol ettim.
- [ ] Bilmediğim terim:

<!-- Buraya kendi cümlenizi ekleyin. Başka kaynaktan soru yapıştırmayın. -->
