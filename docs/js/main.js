// 메인 비주얼 슬라이드
var swiper = new Swiper(".main-thumb-container", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: "#swiperBtnNext0",
      prevEl: "#swiperBtnPrev0",
    },
});
  var swiper2 = new Swiper(".main-visual-container", {
    thumbs: {
      swiper: swiper,
    },
});

// 아이콘 슬라이드
var swiper = new Swiper(".icon-slide-container", {
  spaceBetween: 24,
  // slidesPerView: 8,
  loop: true,
  cursor: true,
  navigation: {
    nextEl: "#swiperBtnNext5",
    prevEl: "#swiperBtnPrev5",
  },
  breakpoints: { //반응형 조건 속성
    1200: { //1024 이상일 경우
      slidesPerView: 8,
      spaceBetween: 24,
    },
    1024: { //1024 이상일 경우
      slidesPerView: 6,
      spaceBetween: 18,
    },
    899: { //899 이상일 경우
      slidesPerView: 6,
      spaceBetween: 14,
    },
    680: { //680 이상일 경우
      slidesPerView: 5,
      spaceBetween: 10,
    },
    571: { //571 이상일 경우
      slidesPerView: 4,
      spaceBetween: 10,
    },
    200: { //571 이상일 경우
      slidesPerView: 3,
      spaceBetween: 10,
    },
}
});

// 현재 모집중인 과정
var swiper = new Swiper("#mainSwiper1", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    navigation: {
      nextEl: "#swiperBtnNext1",
      prevEl: "#swiperBtnPrev1",
    },
    breakpoints: { //반응형 조건 속성
        1024: { //1024 이상일 경우
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 40
        },
        899: { //1024 이상일 경우
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20
        },
        571: { //571 이상일 경우
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20
        },
    }
});

// 특강 인기과정
var swiper = new Swiper("#mainSwiper2", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    navigation: {
      nextEl: "#swiperBtnNext2",
      prevEl: "#swiperBtnPrev2",
    },
    breakpoints: { //반응형 조건 속성
        1024: { //1024 이상일 경우
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 40
        },
        899: { //1024 이상일 경우
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20
        },
        571: { //571 이상일 경우
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20
        },
    }
});

// 실시간학습 인기과정
var swiper = new Swiper("#mainSwiper3", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    navigation: {
      nextEl: "#swiperBtnNext3",
      prevEl: "#swiperBtnPrev3",
    },
    breakpoints: { //반응형 조건 속성
        1024: { //1024 이상일 경우
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 40
        },
        899: { //1024 이상일 경우
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20
        },
        571: { //571 이상일 경우
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20
        },
    }
});

// 디자이너 TALK
var swiper = new Swiper("#mainSwiper4", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    navigation: {
      nextEl: "#swiperBtnNext4",
      prevEl: "#swiperBtnPrev4",
    },
    breakpoints: { //반응형 조건 속성
        1024: { //1024 이상일 경우
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 40
        },
        899: { //1024 이상일 경우
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20
        },
        571: { //571 이상일 경우
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20
        },
    }
});