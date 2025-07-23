// Fixed Navbar
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const logo = document.getElementById("logo");

  if (window.scrollY > navbar.offsetTop) {
    navbar.classList.add(
      "fixed",
      "top-0",
      "bg-(--bg-primary)",
      "shadow-lg"
    );

    navbar.classList.remove("absolute");

    logo.src = "assets/logo/LOGO TARHUD.png";
  } else {
    navbar.classList.remove(
      "fixed",
      "top-0",
      "bg-(--bg-primary)",
      "shadow-lg"
    );

    navbar.classList.add("absolute");

    logo.src = "assets/logo/TARHUD BARU.png";
  }
});

// Carousel
const slides = document.querySelectorAll(".carousel-slide");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Accordion
const accordion = document.querySelectorAll(".accordion");

accordion.forEach((accordion) => {
  const header = accordion.querySelector(".accordion-header");
  const content = accordion.querySelector(".accordion-content");
  const texts = accordion.querySelectorAll(".content-text");

  header.addEventListener("click", () => {
    const isOpen = content.classList.contains("max-h-50");

    if (isOpen) {
      // Menutup Box
      content.classList.remove("max-h-50", "p-5");
      content.classList.add("max-h-0");

      texts.forEach((text) => {
        text.classList.remove("opacity-100", "translate-y-0");
        text.classList.add("opacity-0", "translate-y-2");
      });
    } else {
      // Membuka Box
      content.classList.remove("max-h-0");
      content.classList.add("max-h-50", "p-5");

      // Memberi delay untuk setiap text keluar
      texts.forEach((text, index) => {
        setTimeout(() => {
          text.classList.remove("opacity-0", "translate-y-2");
          text.classList.add("opacity-100", "translate-y-0");
        }, 800 + (300 * index));
      });
    }
  });
});
