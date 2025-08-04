// Fixed Navbar
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const logo = document.getElementById("logo");

  if (window.scrollY > navbar.offsetTop) {
    navbar.classList.add("fixed", "top-0", "bg-yellow-600", "shadow-lg");

    navbar.classList.remove("absolute");

    logo.src = "assets/logo/LOGO TARHUD.png";
  } else {
    navbar.classList.remove("fixed", "top-0", "bg-yellow-600", "shadow-lg");

    navbar.classList.add("absolute");

    logo.src = "assets/logo/TARHUD BARU.png";
  }
});

// Accordion
const accordion = document.querySelectorAll(".accordion");

accordion.forEach((accordion) => {
  const header = accordion.querySelector(".accordion-header");
  const content = accordion.querySelector(".accordion-content");
  const texts = accordion.querySelectorAll(".content-text");

  header.addEventListener("click", () => {
    const isOpen = content.classList.contains("max-h-96");

    if (isOpen) {
      // Menutup Box
      content.classList.remove("max-h-96", "p-5");
      content.classList.add("max-h-0");

      texts.forEach((text) => {
        text.classList.remove("opacity-100", "translate-y-0");
        text.classList.add("opacity-0", "translate-y-2");
      });
    } else {
      // Membuka Box
      content.classList.remove("max-h-0");
      content.classList.add("max-h-96", "p-5");

      // Memberi delay untuk setiap text keluar
      texts.forEach((text, index) => {
        setTimeout(() => {
          text.classList.remove("opacity-0", "translate-y-2");
          text.classList.add("opacity-100", "translate-y-0");
        }, 800 + 300 * index);
      });
    }
  });
});

// Hero Banner
document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 0;
  let contentIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const contents = document.querySelectorAll(".content");

  function showSlides() {
    slides.forEach((slide) => {
      slide.classList.remove("opacity-100");
    });

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].classList.add("opacity-100");

    setTimeout(showSlides, 10000);
  }

  function showContent() {
    contents.forEach((content) => {
      content.classList.remove("block");
      content.classList.add("hidden");
    });

    contentIndex++;
    if (contentIndex > contents.length) {
      contentIndex = 1;
    }

    contents[contentIndex - 1].classList.add("block");
    contents[contentIndex - 1].classList.remove("hidden");

    setTimeout(showContent, 10000);
  }

  showSlides();
  showContent();
});

// Swiper Slide
const swiper = new Swiper(".card-wrapper", {
  speed: 1000,
  loop: true,
  spaceBetween: 30,

  // Autoplay
  autoplay: {
    delay: 3000,
  },

  // Pagination Bullet
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const swiperThemeColor = document.documentElement;

swiperThemeColor.style.setProperty(
  "--swiper-theme-color",
  "oklch(68.1% 0.162 75.834)"
);
