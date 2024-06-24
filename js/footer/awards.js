//Awards part

new Swiper(".awards .swiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigator: {
    nextEl: ".awards .swiper-button-next",
    prevEl: ".awards .swiper-button-prev",
  },
});
