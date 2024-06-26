var swiper = new Swiper(".slide-container", {
  slidesPerView: 2, // Mostra 2 slides por vez
  slidesPerGroup: 1, // Passa 1 slide por vez
  spaceBetween: 30, // Espaço entre os slides
  loop: true,
  centerSlide: "true",
  grabCursor: "true",
  fade: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 2,
    },
  },
});
