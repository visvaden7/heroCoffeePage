var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
console.log(firstScriptTag);
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
  new YT.Player("youtube-player", {
    videoId: "V2ukcibRyJY", // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생
      loop: true, // 반복 재생
      playlist: "V2ukcibRyJY", // 반복 재생할 유튜브 영상 ID
    },
    events: {
      onReady: function (event) {
        event.target.mute(); // 음소거
      },
    },
  });
}

// floating icons
gsap.to(".floating1", 1.5, {
  delay: 1, // 애니메이션 시작 지연 시간
  y: 15, // 수직으로 얼마나 움직일지
  repeat: -1, // 몇 번 반복하는지(-1: 무한 반복)
  yoyo: true, // 한 번 재생된 애니메이션을 다시 뒤로 재생
  ease: Power1.easeInOut, // Easing 함수
});

gsap.to(".floating2", 2, {
  delay: 0.5,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut,
});

/*
gsap.to(".floating2", {
  duration: 0.5,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: "circ.inOut",
});
*/

gsap.to(".floating3", 2.5, {
  delay: 1.5,
  y: 20,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut,
});

/*
요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// 관리할 요소들 검색
const spyEls = document.querySelectorAll('section.scroll-spy');
// 요소들 반복 처리
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당
});