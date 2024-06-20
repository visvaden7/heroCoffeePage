var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
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