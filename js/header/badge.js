// floating badges 스크롤시 안보이게
const badgeEl = document.querySelector('.badges');
window.document.addEventListener('scroll', () => {
  window.scrollY>600
  ? gsap.to(badgeEl, .6, {opacity: 0, display: 'none'})
  : gsap.to(badgeEl, .6, {opacity: 1, display: 'block'})
})