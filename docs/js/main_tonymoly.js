// 메인 비주얼 슬라이드 텍스트 20231215
var swiper = new Swiper(".visual-slide-wrap-cont", {
    // slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    
    navigation: {
      nextEl: "#swiperBtnNext0",
      prevEl: "#swiperBtnPrev0",
    },
  
  });

// 메인 비주얼 슬라이드 배경이미지 20231215
var swiper = new Swiper(".visual-slide-wrap-bg", {
    // slidesPerView: 1,
    // allowTouchMove: "true", // false시에 스와이핑이 되지 않으며 버튼으로만 슬라이드 조작이 가능
    touchRatio: 0,  // 터치로 슬라이드 막는 기능
    effect: "fade",
    autoplay: {
      delay: 10000,  // 10초마다 자동롤링
      disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
  });
  
  // 최신으로 등록한 과정
  var swiper = new Swiper("#mainSwiper1", {
      slidesPerView: 1,
      spaceBetween: 26,
      slidesPerGroup: 1,
      navigation: {
        nextEl: "#swiperBtnNext1",
        prevEl: "#swiperBtnPrev1",
      },
      breakpoints: { //반응형 조건 속성
          1250: { //1250 이상일 경우
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 26
          },
          1024: { //1024 이상일 경우
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20
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
  
  // 짧게 보는 금융상식
  var swiper = new Swiper("#mainSwiper2", {
      slidesPerView: 1,
      spaceBetween: 26,
      slidesPerGroup: 1,
      navigation: {
        nextEl: "#swiperBtnNext2",
        prevEl: "#swiperBtnPrev2",
      },
      breakpoints: { //반응형 조건 속성
        1250: { //1250 이상일 경우
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 26
        },
          1024: { //1024 이상일 경우
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20
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
  
  // 공지사항 롤링 20230613 
  var swiper = new Swiper(".notice-slide-wrap", {
    direction: "vertical",
    // autoplay: "false",
    autoplay: {
      delay: 3000, // 롤링시간
    },
    loop : true, // 반복
  });
  $('.notice-slide-wrap .swiper-slide').on('mouseover', function(){ // 마우스오버시 멈춤
    swiper.autoplay.stop();
  });
  $('.notice-slide-wrap .swiper-slide').on('mouseout', function(){ // 마우스아웃시 다시 롤링
    swiper.autoplay.start();
  });
  
  // 수강중인 ㄱ ㅘ정
  var ww = $(window).width();
  var mySwiper = undefined;
  
  function initSwiper() {
  
    if (ww < 701 && mySwiper == undefined) {
      mySwiper = new Swiper(".courses-wrap", {
        slidesPerView: 1,
        simulateTouch: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
      });
    } else if (ww >= 701 && mySwiper != undefined) {
      mySwiper.destroy();
      mySwiper = undefined;
    }
  }
  
  initSwiper();
  
  $(window).on('resize', function () {
    ww = $(window).width();
    initSwiper();
  });
  
  
  
  $(function () {
    $('.courses-wrap .courses-list').each(function () {
      $(this).click(function () {
        $('.courses-wrap li').removeClass('on');
        $(this).parents('li').addClass('on');
      });
    })
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