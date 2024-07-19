// 메인 비주얼 슬라이드 피씨
var swiper = new Swiper(".visual-slide-wrap.type-pc", {
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

// 메인 비주얼 슬라이드 모바일
var swiper = new Swiper(".visual-slide-wrap.type-mobile", {
    // slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
      nextEl: "#swiperBtnNextM0",
      prevEl: "#swiperBtnPrevM0",
    },
});


// 필수법정교육
var swiper = new Swiper(".edulist-slide-wrap", {
    // slidesPerView: 1,

    navigation: {
      nextEl: "#swiperBtnNext01",
      prevEl: "#swiperBtnPrev01",
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
          // 1250: { //1250 이상일 경우
          //   slidesPerView: 4,
          //   slidesPerGroup: 4,
          //   spaceBetween: 26
          // },
          1024: { //1024 이상일 경우
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 26
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
          1024: { //1024 이상일 경우
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 26
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


  // 월별상세일정 관련 추가. 20240115 
  // 월별상세일정 펼침 닫기영역
	$('.calendar-ul .btn-tog').click(function(){
		$(this).parents('.calendar-ul .cont-in').toggleClass('active').each(function () {
			$(this).children('.hidden-cont').slideToggle(400);
		})
		if( $(this).parents('.calendar-ul .cont-in').hasClass('active') ) {
			$(this).html('<span>닫기</span>');
		} else {
			$(this).html('<span>펼침</span>');
		}
	});
	
  // 월별상세일정 펼침영역있을때 버튼 보이기
  $('.calendar-ul .cont-in .hidden-cont').parents('.cont-in').addClass('tog-in');