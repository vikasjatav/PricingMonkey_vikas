var swiper = new Swiper(".slide-Container", {
  slidesPerView:3,
  centeredSlides: false,
  slidesPerGroupSkip: 3,
  grabCursor: true,
  spaceBetween:20,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets:true,
  },
});