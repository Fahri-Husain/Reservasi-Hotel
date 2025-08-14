// Jalankan animasi otomatis
setTimeout(() => {
  // Tandai animasi sudah selesai
  sessionStorage.setItem("netflixDone", "true");
  // Redirect ke Index.html
  window.location.href = "Index.html";
}, 5500); // durasi animasi


    document.addEventListener('DOMContentLoaded', function() {
      const introAudio = document.getElementById('intro-audio');
      const animationDuration = 6000; // Durasi animasi dalam milidetik (6 detik)
      // Coba putar audio secara otomatis
      introAudio.play().then(() => {
        console.log("Audio diputar secara otomatis.");
      }).catch(error => {
        // Autoplay mungkin diblokir oleh browser
        console.log("Autoplay diblokir:", error);
        // Anda bisa menambahkan tombol "Mulai" jika autoplay diblokir
        // atau mencoba memutar setelah interaksi pengguna pertama
      });
      // Atur timeout untuk menghentikan audio setelah 6 detik
      setTimeout(() => {
        introAudio.pause(); // Hentikan audio
        introAudio.currentTime = 0; // Reset audio ke awal (opsional)
      }, animationDuration);
    });