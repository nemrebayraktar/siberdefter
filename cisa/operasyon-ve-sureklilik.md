---
layout: page
title: Operasyon ve iş sürekliliği
permalink: /cisa/operasyon-ve-sureklilik/
description: İşin günlük yürütülmesi ve geri dönüşün denenmesi üzerine özgün taslak not.
ozet: Yedek alındı demek, geri dönüldü demek değildir. Operasyon, işin o gün yürüyüp yürümediğidir.
kod: SD-C-04
sira: 4
bolum: cisa
ust: CISA notları
ust_url: /cisa/
---

Resmi İngilizce adıyla bu alan, bilgi sistemleri operasyonları ve iş sürekliliğidir. İki soruyu ayırıyorum. Dün gece iş yürüdü mü. Yarın sistem durursa önce neyi ayağa kaldıracaklarını denediler mi.

## Neyi anlamaya çalışıyorum

Operasyon, günlük işin izidir. Bir iş çalışmadıysa biri fark etti mi, kayıt düştü mü, ertesi sabah aynı iş sessizce geçildi mi. “İzleme aracı var” cümlesi, aracın baktığı şeyi söylemez.

Süreklilik ise sıradır. Her şey aynı anda gelmez. Kuruluş önce hangi hizmeti istediğini söylemiş mi. O hizmet için geri dönüş hiç denenmiş mi. Deneme kâğıt üzerinde mi kalmış, yoksa bir dosya gerçekten geri mi alınmış.

Yedekleme yazılımının “başarılı” demesi, dosyanın açıldığı anlamına gelmez. Bu ayrım [yedekleme listesinde]({{ '/kaynaklar/yedekleme-kaniti/' | relative_url }}) madde maddedir. Burada yalnızca şunu tutuyorum: başarı iletisi bir sonuçtur, geri açılan dosya başka bir sonuçtur.

Bu sayfa bir felaket senaryosu tarifi değildir. Saldırı adımı yazılmaz.

## Kendi sözlüğüm

- **İş (job).** Belirli saatte kendi kendine koşan iş. Sessizce hata verirse operasyonun konusudur.
- **Geri dönüş denemesi.** Yedeğin gerçekten açılıp açılmadığının kaydı. Alındı bilgisi değildir.
- **Öncelik.** Sistem durunca ilk istenen hizmet. Her şey “kritik” ise sıra yok demektir.
- **Fark etme.** Birinin hatayı gördüğü an. Araç kurulu olsa da fark edilmemiş olabilir.

## Mini senaryo

Bir atölyenin çizim dosyaları her gece yedekleniyor. Yazılım üç aydır yeşil. Kimse bir dosyayı geri açıp açamadığına bakmamış. Çizimci, “geçen yıl bir dosya aramıştık, bulamadık, yeniden çizdik” diyor. Gözlem: yedek işi başarılı görünüyor; geri açma denemesi ve sonucu yok. Etki iddiasını büyütmeden önce hangi dosyanın, hangi gün, neden bulunamadığı sorulur.

Kuruluş kurgusaldır.

## Özgün tekrar

<details>
<summary>Soru 1. Sınav sorusu değildir.</summary>
<p>Yedek yazılımı her gece başarı yazıyor. Geri açma kaydı yok. Denetçi “yedekleme çalışıyor” diyebilir mi?</p>
<p><strong>Bu nottaki yanıt.</strong> Yalnızca yazılımın başarı yazdığını söyleyebilir. Geri açılmanın çalıştığını söyleyemez. İki cümle ayrı yazılır. Birincisi gözlemdir, ikincisi bakılmamış bir iddiadır.</p>
</details>

<details>
<summary>Soru 2. Sınav sorusu değildir.</summary>
<p>Süreklilik planında bütün sistemler “öncelik 1”. Bu neden bir sıra değildir?</p>
<p><strong>Bu nottaki yanıt.</strong> Aynı anda her şey ilk sıradaysa, duruş anında neyin önce geleceğine karar verilmemiş demektir. Not, planın tarihini değil, sıranın kullanılıp kullanılamadığını yazar.</p>
</details>

## Kendi eklemelerim

- [ ] “Yedek var” ile “geri açıldı”yı ayıran kendi cümlemi yazdım.
- [ ] Resmi özetteki güncel alan adını kontrol ettim.
- [ ] Bilmediğim terim:

<!-- Buraya kendi cümlenizi ekleyin. Başka kaynaktan soru yapıştırmayın. -->
