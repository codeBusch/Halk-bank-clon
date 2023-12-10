 // JavaScript fonksiyonu
 function changeTitle() {
    // Başlık elementini seç
    var baslikElementi = document.querySelector('title');

    // Başlığı değiştir
    baslikElementi.textContent = "HALKBANK - TÜRKİYE HALK BANKASI";
  }

  // Tarayıcı sekme değişikliğini dinle
  document.addEventListener('visibilitychange', function() {
    // Eğer sekme aktifse fonksiyonu çağır
    if (!document.hidden) {
      changeTitle();
    } else {
      // Sekme değiştiğinde başlığı tekrar orijinaline döndürebilirsiniz.
      resetTitle();
    }
  });

  // Başlığı orijinal değerine geri döndüren fonksiyon
  function resetTitle() {
    var baslikElementi = document.querySelector('title');
    baslikElementi.textContent = "Önce Halk, Sonra Bankayız!";
  }