// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// slide foto
document.addEventListener("DOMContentLoaded", function () {
  let index = 0;
  const slides = document.querySelectorAll(".slides img");
  const totalSlides = slides.length;

  function nextSlide() {
    index = (index + 1) % totalSlides;
    document.querySelector(".slides").style.transform = `translateX(-${
      index * 100
    }%)`;
  }

  setInterval(nextSlide, 3000); // Pindah setiap 3 detik
});

// Cek apakah datang dari halaman awal
if (sessionStorage.getItem("fromIndex") !== "true") {
  window.location.href = "index.html"; // balik ke awal
} else {
  // Hapus tanda biar kalau refresh balik ke awal
  sessionStorage.removeItem("fromIndex");
}

