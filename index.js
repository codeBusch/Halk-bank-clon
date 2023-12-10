 // JavaScript fonksiyonu
 function degistirBaslik() {
    // Başlık elementini seç
    var baslikElementi = document.querySelector('title');

    // Başlığı değiştir
    baslikElementi.textContent = "HALKBANK - TÜRKİYE HALK BANKASI";
  }

  // Tarayıcı sekme değişikliğini dinle
  document.addEventListener('visibilitychange', function() {
    // Eğer sekme aktifse fonksiyonu çağır
    if (!document.hidden) {
      degistirBaslik();
    } else {
      // Sekme değiştiğinde başlığı tekrar orijinaline döndürebilirsiniz.
      basligiResetle();
    }
  });

  // Başlığı orijinal değerine geri döndüren fonksiyon
  function basligiResetle() {
    var baslikElementi = document.querySelector('title');
    baslikElementi.textContent = "Önce Halk, Sonra Bankayız!";
  }