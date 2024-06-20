new Swiper(".promotion .swiper", {
  autoplay: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next",
  },
});
