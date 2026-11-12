# SiberDefter

BT denetimi ve siber güvenlik notları. Yazılar Markdown dosyasıdır. Site [https://nemrebayraktar.github.io/siberdefter/](https://nemrebayraktar.github.io/siberdefter/) adresinde yayımlanır.

## Yerelde çalıştırma

Ruby 3 gerekir.

```bash
bundle config set --local path 'vendor/bundle'
bundle install
bundle exec jekyll serve
```

Tarayıcıda [http://127.0.0.1:4000/siberdefter/](http://127.0.0.1:4000/siberdefter/) adresini açın. Durdurmak için terminalde `Ctrl+C` yeter.

Adres `_config.yml` içindeki `baseurl: "/siberdefter"` yüzünden `/siberdefter` altındadır. İç bağlantı yazarken düz `/yazilar/` kullanmayın. Şöyle yazın:

```markdown
[Yazılar]({{ '/yazilar/' | relative_url }})
```

## Yeni yazı

1. `_posts` klasörüne `2026-11-12-kisa-baslik.md` adında bir dosya açın. Tarih bugün ya da daha eski olsun. Dosya adında boşluk ve `ğ ü ş ı ö ç` olmasın.
2. En üste şunu koyun. `---` satırlarını silmeyin.

```yaml
---
layout: post
title: Görünen başlık
description: Tek cümlelik özet.
kategori: Denetim pratiği
one_cikan: false
---
```

3. İkinci `---` satırının altına metni yazın. Başlığı bir daha tekrarlamayın.
4. Kaydedin ve tarayıcıyı yenileyin. `one_cikan: true` yazıyı ana sayfadaki listeye de alır.

Yayına gitmesi için dosyayı `main` dalına gönderin. GitHub Pages siteyi yeniden kurar.
