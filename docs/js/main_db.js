// Ai 과정추천
var swiper = new Swiper("#mainSwiper1", {
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  navigation: {
    nextEl: "#swiperBtnNext1",
    prevEl: "#swiperBtnPrev1",
  },
  breakpoints: { //반응형 조건 속성
    1024: { //1024 이상일 경우
      slidesPerView: 3,
      spaceBetween: 30
    },
    280: { //280 이상일 경우
      slidesPerView: "auto",
      spaceBetween: 16
    },
  }
});
