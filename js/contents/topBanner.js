// 순차적으로 이미지 보이게
const fadeEl = document.querySelectorAll('.show_seq');
fadeEl.forEach((val, idx) => {
  gsap.to(val, .6, {delay: (idx+1)*.5, opacity: 1})
})