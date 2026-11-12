source "https://rubygems.org"

# Sürümler, GitHub Pages'in kullandığı Jekyll 3.10 çizgisine yakındır.
# Yerel önizleme içindir. GitHub Pages siteyi kendi ortamında derler;
# bu yüzden buraya GitHub'ın desteklemediği eklenti eklemeyin.
gem "jekyll", "3.10.0"
gem "kramdown-parser-gfm", "1.1.0"
gem "webrick", "~> 1.8"

group :jekyll_plugins do
  gem "jekyll-feed", "0.17.0"
  gem "jekyll-seo-tag", "2.8.0"
  gem "jekyll-sitemap", "1.4.0"
end

# Windows'ta yerel önizleme için. Linux ve macOS kurulumu bunları kurmaz.
platforms :windows do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
  gem "wdm", "~> 0.1.1"
end
