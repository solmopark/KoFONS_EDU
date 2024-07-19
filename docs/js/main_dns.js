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

// 이벤트 롤링
var swiper = new Swiper(".event-slide-wrap", {
    direction: "vertical",
    autoplay: {
      delay: 3000, // 롤링시간
    },
    loop : true, // 반복
  });
  $('.event-slide-wrap .swiper-slide').on('mouseover', function(){ // 마우스오버시 멈춤
    swiper.autoplay.stop();
  });
  $('.event-slide-wrap .swiper-slide').on('mouseout', function(){ // 마우스아웃시 다시 롤링
    swiper.autoplay.start();
  });

// 아이콘 슬라이드
var swiper = new Swiper(".icon-slide-container", {
  cursor: true,
  navigation: {
    nextEl: "#swiperBtnNext5",
    prevEl: "#swiperBtnPrev5",
  },
  breakpoints: { //반응형 조건 속성

    899: { //899 이상일 경우
      slidesPerView: 9,  // 수정. 20231027 
      // spaceBetween: 14,
    },
    680: { //680 이상일 경우
      slidesPerView: 5,
      // spaceBetween: 10,
    },
    571: { //571 이상일 경우
      slidesPerView: 5,
      // spaceBetween: 10,
    },
    400: { //571 이상일 경우
      slidesPerView: 4,
      // spaceBetween: 10,
    },
    375: { //571 이상일 경우
      slidesPerView: 3,
      // spaceBetween: 10,
    },
    200: { //571 이상일 경우
      slidesPerView: 3,
      // spaceBetween: 10,
    },
}
});

// 최신과정
var swiper = new Swiper("#mainSwiper1", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    navigation: {
      nextEl: "#swiperBtnNext1",
      prevEl: "#swiperBtnPrev1",
    },
    breakpoints: { //반응형 조건 속성
        1024: { //1024 이상일 경우
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 24
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
        200: { //571 이상일 경우
          slidesPerView: 1,
          spaceBetween: 10,
        },
    }
});

// 특강 인기과정
var swiper = new Swiper("#mainSwiper2", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    navigation: {
      nextEl: "#swiperBtnNext2",
      prevEl: "#swiperBtnPrev2",
    },
    breakpoints: { //반응형 조건 속성
        1024: { //1024 이상일 경우
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 24
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
        200: { //571 이상일 경우
          slidesPerView: 1,
          spaceBetween: 10,
        },
    }
});

// 실시간학습 인기과정
var swiper = new Swiper("#mainSwiper3", {
    slidesPerView: 4,
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
        200: { //571 이상일 경우
          slidesPerView: 1,
          spaceBetween: 10,
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