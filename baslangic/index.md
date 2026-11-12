---
layout: page
title: Nasıl çalışır
permalink: /baslangic/
description: SiberDefter'i okumak ve yeni bir yazı eklemek için sade anlatım.
ozet: Dosya eklemek yeter. Başlık, tarih ve metin. Gerisi siteyi kendisi kurar.
kod: SD-G-01
isaret: "🧭"
---

Bu sayfa, siteyi ilk kez açan biri içindir. Teknik ayrıntının uzun hali deponun README dosyasındadır. Burada yalnızca günlük iş var.

## Site ne işe yarar

SiberDefter bir not defteridir. Yazılar, kısa maddeler, sözlük ve çalışma planı burada durur. Hepsi düz metin dosyasıdır. Ayrıca bir panel, üyelik veya ödeme yoktur.

Sağdaki dizin, bölümlerin listesidir. Üstteki mavi şerit de aynı yerlere gider.

## Bir sayfayı okumak

Başlığı okuyun. Altındaki kısa satır, sayfanın ne olduğunu söyler. Parantez içindeki **taslak** veya **örnek**, metnin bitmiş bir yayın veya gerçek bir kişisel kayıt olmadığını belirtir. Hakkında sayfasındaki örnek e-posta ve şehir de bu yüzden tıklanmaz.

## Yeni yazı eklemek

1. `_posts` klasörüne bir dosya açın.
2. Adını şöyle kurun: `2026-11-09-kisa-baslik.md`. Tarih bugün veya daha eski olsun. Gelecek tarih sitede görünmez. Dosya adında boşluk ve `ğüşıöç` kullanmayın. Okurun gördüğü başlık, dosyanın içine yazılır.
3. Dosyanın en üstüne şu bloğu koyun. Çizgileri silmeyin.

```yaml
---
layout: post
title: Görünen başlık
description: Tek cümlelik özet.
kategori: Denetim pratiği
one_cikan: false
---
```

4. İkinci çizginin altına yazınızı yazın. Başlığı bir daha büyük harfle tekrarlamayın.
5. Kaydedin. Bilgisayarınızda önizleme açıksa tarayıcıyı yenileyin. Site GitHub’da yayındaysa dosyayı gönderdiğinizde birkaç dakika içinde sayfa belirir.

`one_cikan: true` yazıyı ana sayfadaki listeye de alır.

Kısa not eklemek aynı mantıktır. Dosya `kisa-notlar/` klasörüne girer ve içinde `bolum: kisa-notlar` yazar. Sözlük tek sayfadır; yeni terimi [sözlükteki]({{ '/sozluk/' | relative_url }}) listeye eklersiniz.

## Ne yapıştırmayın

Başkasının sınav sorusunu, soru bankasını veya müşteri ekranını buraya koymayın. Kendi cümlenizi yazın. Kişi adı veya sistem adresi varsa silin.

## Kişisel satırlar

Adınız ve tanıtımınız `_data/profil.yml` dosyasındadır. Örnek diye duran satırı gerçek bilgiyle değiştirince `ornek: false` yapın. Doğrulayamadığınız iş veya sertifika eklemeyin. Listeler bilerek boştur.
