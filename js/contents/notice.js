//공지내용 slide

new Swiper(".notice .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

//토글

const promotionEl = document.querySelector("section.promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");

promotionToggleBtn.addEventListener("click", () => {
  if (promotionEl.classList.contains("hide")) {
    promotionEl.classList.remove("hide");
  } else {
    promotionEl.classList.add("hide");
  }
});
