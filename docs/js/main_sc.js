// 메인 비주얼 슬라이드 
var swiper = new Swiper(".visual-slide-wrap", {
    // slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
      nextEl: "#swiperBtnNext0",
      prevEl: "#swiperBtnPrev0",
    },
});
 
// 공지사항 롤링
var swiper = new Swiper(".notice-slide-wrap", {
    direction: "vertical",
    autoplay: {
        delay: 3000, // 롤링시간
    },
    loop: true, // 반복
});
// $('.notice-slide-wrap .swiper-slide').on('mouseover', function () { // 마우스오버시 멈춤
//     swiper.autoplay.stop();
// });
// $('.notice-slide-wrap .swiper-slide').on('mouseout', function () { // 마우스아웃시 다시 롤링
//     swiper.autoplay.start();
// });

// 수강중인 과정
var swiper = new Swiper(".main-list-slide-container", {
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: { //반응형 조건 속성
    802: { //802 이상일 경우
      slidesPerView: 1,
      grid: {
        rows: 3
      },
    },
    280: { //280 이상일 경우
      slidesPerView: "auto",
      grid: {
        rows: 1
      },
    },
  }
});