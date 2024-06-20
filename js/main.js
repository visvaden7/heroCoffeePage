// //Header part search part

// //검색창 요소(.search) 구하기
// const searchEl = document.querySelector(".search");
// const searchInputEl = document.querySelector("input");

// //검색창 요소 클릭하면 실행
// searchEl.addEventListener("click", () => {
//   searchInputEl.focus();
// });

// //검색창 focus되면 늘어나면서 attribute placeholder 에 통합검색에 들어감
// searchInputEl.addEventListener("focus", () => {
//   searchEl.classList.add("focused");
//   searchInputEl.setAttribute("placeholder", "통합검색");
// });

// //검색창 요소 내부 실제 input 요소에서 focus 해제
// searchInputEl.addEventListener("blur", () => {
//   searchEl.classList.remove("focused");
//   searchInputEl.setAttribute("placeholder", "");
// });

// //Awards part

// new Swiper(".awards .swiper", {
//   autoplay: true,
//   loop: true,
//   spaceBetween: 30,
//   slidesPerView: 5,
//   navigator: {
//     nextEl: ".awards .swiper-button-next",
//     prevEl: ".awards .swiper-button-prev",
//   },
// });

// //footer copyright

// const thisYear = document.querySelector(".this-year");
// thisYear.innerHTML = new Date().getFullYear();

// const badgeEl = document.querySelector("header .badges");
// const toTopEl = document.querySelector("#to-top");

//footer to-top btn, header badge animation

// toTopEl.addEventListener("click", () => {
//   console.log(0);
//   gsap.to(window, 0.6, {
//     scrollTo: 0,
//   });
// });

// window.addEventListener("scroll", () => {
//   console.log(window.scrollY);
//   if (window.scrollY > 500) {
//     gsap.to(badgeEl, 0.6, {
//       opacity: 0,
//       display: "none",
//     });

//     //상단으로 이동 버튼 보이기
//     gsap.to(toTopEl, 0.6, {
//       opacity: 1,
//       x: 0,
//     });
//   } else {
//     gsap.to(badgeEl, 0.6, {
//       opacity: 1,
//       display: "block",
//     });

//     //상단으로 이동 버튼 숨기기
//     gsap.to(toTopEl, 0.6, {
//       opacity: 0,
//       x: 100,
//     });
//   }
// });

// //공지내용 slide

// new Swiper(".notice .swiper", {
//   direction: "vertical",
//   autoplay: true,
//   loop: true,
// });
