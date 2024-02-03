<h1>Context Store Uygulaması</h1>

Bu proje, React ve Context API kullanarak oluşturulmuş basit bir e-ticaret uygulamasıdır. Kullanıcılar ürünleri inceleyebilir, sepete ekleyebilir ve alışveriş sepeti üzerinden işlemlerini gerçekleştirebilirler.

<h2>Özellikler</h2>

- Ürün kategorilerine göre filtreleme
- Ürünleri sepete ekleme ve sepetten çıkarma
- Anasayfada ürün listesi görüntüleme
- Sepet sayısını anlık olarak güncelleme

<h2>Proje Yapısı</h2>

Projede aşağıdaki temel bileşenler bulunmaktadır:

- `App.js`: Ana uygulama bileşeni ve sayfa yönlendirmeleri
- `HomePage.js`: Anasayfa bileşeni, ürün listesini gösterir
- `CheckoutPage.js`: Sepet sayfası bileşeni, sepet içeriğini ve toplam fiyatı gösterir
- `Header.js`: Sayfa başlığı ve navigasyon menüsü bileşeni
- `Card.js`: Ürün kartı bileşeni, ürün bilgilerini ve sepete ekleme butonunu içerir
- `BasketItem.js`: Sepet öğesi bileşeni, sepet içeriğini gösterir ve miktarını günceller
- `Loader.js`: Yükleme göstergesi bileşeni
- `Modal.js`: Modal bileşeni (örnek olarak, şu anda kullanılmıyor)

<h2>Kullanılan Kütüphaneler</h2>

- `react-router-dom`: Sayfa yönlendirme işlemleri için kullanıldı.
- `bootstrap`: UI bileşenleri ve stil için kullanıldı.
- `react-toastify`: Bildirim mesajları için kullanıldı.
- `axios`: HTTP istekleri yapmak için kullanıldı.
- `@uidotdev/usehooks`: Özel hooks fonksiyonları sağlamak için kullanıldı.

<h2>Ekran Görüntüsü</h2>

![](e_ticaret.gif)
