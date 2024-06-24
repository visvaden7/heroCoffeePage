//Header part search part

//검색창 요소(.search) 구하기
const searchEl = document.querySelector(".search");
const searchInputEl = document.querySelector("input");

//검색창 요소 클릭하면 실행
searchEl.addEventListener("click", () => {
  searchInputEl.focus();
});

//검색창 focus되면 늘어나면서 attribute placeholder 에 통합검색에 들어감
searchInputEl.addEventListener("focus", () => {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

//검색창 요소 내부 실제 input 요소에서 focus 해제
searchInputEl.addEventListener("blur", () => {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});
