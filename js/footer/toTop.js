const toTopEl = document.querySelector("#to-top");

toTopEl.addEventListener("click", () => {
  console.log(0);
  gsap.to(window, 0.6, {
    scrollTo: 0,
  });
});

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //상단으로 이동 버튼 보이기
    gsap.to(toTopEl, 0.6, {
      opacity: 1,
      x: 0,
    });
  } else {
    //상단으로 이동 버튼 숨기기
    gsap.to(toTopEl, 0.6, {
      opacity: 0,
      x: 100,
    });
  }
});
