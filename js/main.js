// floating image 스크롤시 안보이게
const badgeEl = document.querySelector('.badges');
window.document.addEventListener('scroll', () => {
  window.scrollY>600
  ? gsap.to(badgeEl, .6, {opacity: 0, display: 'none'})
  : gsap.to(badgeEl, .6, {opacity: 1, display: 'block'})
})

// 순차적으로 이미지 보이게
const fadeEl = document.querySelectorAll('.show_seq');
fadeEl.forEach((val, idx) => {
  gsap.to(val, .6, {delay: (idx+1)*.5, opacity: 1})
})