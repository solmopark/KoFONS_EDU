$(function () {

	// 커뮤니티 슬라이드 221004 문단비
	var communityVisual = new Swiper('.community-visual', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		loop: true,
		loopedSlides: 5, // 썸네일 swiper의 슬라이드 갯수와 동일하게 맞춰준다.
		slidesPerView: 1,
		centeredSlides: true,
	  });
	  var communityThumbs = new Swiper('.community-thumbs', {
		spaceBetween: 0,
		centeredSlides: true,
		slidesPerView: 'auto',
		touchRatio: 0.2,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		slideToClickedSlide: true,
		loop: true,
		loopedSlides: 5 // 썸네일 swiper의 슬라이드 갯수와 동일하게 맞춰준다.
	});
	
	communityVisual.controller.control = communityThumbs;
	communityThumbs.controller.control = communityVisual;

	// cop 메뉴 6개이하
	var copMenu = new Swiper(".cop-menu-swiper1", {
		slidesPerView: "auto",
		// centeredSlides: true,
		resistance : true, // 슬라이드 터치 저항 여부
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
	  },
		breakpoints: {
			200: {
			  slidesPerView: 1,
			},
			250: {
			  slidesPerView: 2,
			},
			375: {
			  slidesPerView: 3,
			},
			481: {
			  slidesPerView: 4,
			},
			570: {
			  slidesPerView: 5,
			},
			768: {
			  slidesPerView: 6,
			},
			1024: {
			  slidesPerView: 6,
			},
			// 1200: {
			//   slidesPerView: 6,
			// },
		}
    });

	// cop 메뉴 6개 이상
	var copMenu = new Swiper(".cop-menu-swiper2", {
		slidesPerView: "auto",
		// slidesPerView: 6,
		// centeredSlides: true,
        // spaceBetween: 40,
		// resistance : false,
		// allowTouchMove : false,
		resistance : true, // 슬라이드 터치 저항 여부
        navigation: {
          	nextEl: ".swiper-button-next",
          	prevEl: ".swiper-button-prev",
        },
		breakpoints: {
			200: {
				slidesPerView: 1,
			},
			250: {
				slidesPerView: 2,
			},
			375: {
				slidesPerView: 3,
			},
			481: {
				slidesPerView: 4,
			},
			570: {
				slidesPerView: 5,
			},
			768: {
				slidesPerView: 6,
			},
			1024: {
				slidesPerView: 6,
			},
			// 1200: {
			//   slidesPerView: 6,
			// },
		}
    });

	$('.swiper-slide').each(function () {
		$(this).click(function () {
			$('.swiper-slide').removeClass('on').removeAttr("title");
			$(this).addClass('on').attr("title","선택됨");
		});
	});

	// 스마트러닝 221014 문단비
	var smartSwiper = new Swiper(".smart-swiper", {
		slidesPerView: 5,
		spaceBetween: 10,
		loop: true,
		centeredSlides: false,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			200: {
			  slidesPerView: 1,
			},
			375: {
			  slidesPerView: 2,
			},
			768: {
			  slidesPerView: 4,
			},
			1024: {
			  slidesPerView: 5,
			},
		}
	});
	// 등록된 과정 슬라이드
	var swiper = new Swiper(".month-view-wrap", {
		slidesPerView: "auto",
		spaceBetween: 6,
		// freeMode: true,
	});

	// 통합검색 탭
    var swiper = new Swiper(".tab-sch", {
        slidesPerView: "auto",
    });

	// 과정홈 nav 20240124 
    var swiper = new Swiper(".home-nav", {
        slidesPerView: "auto",
    });


	// cop 인기게시글 
	var swiper = new Swiper(".cop-popul-list", {
		loop: true,
		navigation: {
		  nextEl: "#swiperBtnNextCopPopulHome",
		  prevEl: "#swiperBtnPrevCopPopulHome",
		},
		breakpoints: { //반응형 조건 속성
			1024: { //1024 이상일 경우
				slidesPerView: "auto",
				allowTouchMove: false,
				slidesPerGroup: 3,
			},
			900: { //900 이상일 경우
				slidesPerView: 3,
				spaceBetween: 20,
				slidesPerGroup: 1,
				allowTouchMove: true,
			},
			571: { //571 이상일 경우
				slidesPerView: 2,
				spaceBetween: 14,
				slidesPerGroup: 1,
				allowTouchMove: true,
			},
			280: { //280 이상일 경우
				slidesPerView: 1,
				spaceBetween: 0,
				slidesPerGroup: 1,
				allowTouchMove: true,
			},
		}
	});

	// cop ranking 
	var swiper = new Swiper(".cop-list-ranking", {
		loop: true,
		navigation: {
		  nextEl: "#swiperBtnNextCopRanking",
		  prevEl: "#swiperBtnPrevCopRanking",
		},
		breakpoints: { //반응형 조건 속성
			1024: { //1024 이상일 경우
				slidesPerView: "auto",
				allowTouchMove: false,
				slidesPerGroup: 3,
			},
			900: { //900 이상일 경우
				slidesPerView: 3,
				spaceBetween: 20,
				slidesPerGroup: 1,
				allowTouchMove: true,
			},
			571: { //571 이상일 경우
				slidesPerView: 2,
				spaceBetween: 14,
				slidesPerGroup: 1,
				allowTouchMove: true,
			},
			280: { //280 이상일 경우
				slidesPerView: 1,
				spaceBetween: 0,
				slidesPerGroup: 1,
				allowTouchMove: true,
			},
		}
	});

	// 추천 cop 
	var swiper = new Swiper(".cop-list-recommend", {
		loop: true,
		slidesPerView: 3,
		spaceBetween: 26,
		slidesPerGroup: 1,
		navigation: {
		  nextEl: "#swiperBtnNextCopRecommend",
		  prevEl: "#swiperBtnPrevCopRecommend",
		},
		breakpoints: { //반응형 조건 속성
			1250: { //1250 이상일 경우
				slidesPerView: 3,
				spaceBetween: 26,
				slidesPerGroup: 1,
			},
			1024: { //1024 이상일 경우
				slidesPerView: 3,
				spaceBetween: 26,
				slidesPerGroup: 1,
			},
			900: { //900 이상일 경우
				slidesPerView: 3,
				spaceBetween: 20,
				slidesPerGroup: 1,
			},
			571: { //571 이상일 경우
				slidesPerView: 2,
				spaceBetween: 20,
				slidesPerGroup: 1,
			},
			280: { //280 이상일 경우
				slidesPerView: 1,
				spaceBetween: 0,
				slidesPerGroup: 1,
			},
		}
	});
	
	// 신규 cop 
	var swiper = new Swiper(".cop-list-new", {
		loop: true,
		slidesPerView: 3,
		spaceBetween: 26,
		slidesPerGroup: 1,
		navigation: {
		  nextEl: "#swiperBtnNextCopNew",
		  prevEl: "#swiperBtnPrevCopNew",
		},
		breakpoints: { //반응형 조건 속성
			1250: { //1250 이상일 경우
				slidesPerView: 3,
				spaceBetween: 26,
				slidesPerGroup: 1,
			},
			1024: { //1024 이상일 경우
				slidesPerView: 3,
				spaceBetween: 26,
				slidesPerGroup: 1,
			},
			900: { //900 이상일 경우
				slidesPerView: 3,
				spaceBetween: 20,
				slidesPerGroup: 1,
			},
			571: { //571 이상일 경우
				slidesPerView: 2,
				spaceBetween: 20,
				slidesPerGroup: 1,
			},
			280: { //280 이상일 경우
				slidesPerView: 1,
				spaceBetween: 0,
				slidesPerGroup: 1,
			},
		}
	});
	
	// 인기 cop 
	var swiper = new Swiper(".cop-list-popul", {
		loop: true,
		slidesPerView: 3,
		spaceBetween: 26,
		slidesPerGroup: 1,
		navigation: {
		  nextEl: "#swiperBtnNextCopPopul",
		  prevEl: "#swiperBtnPrevCopPopul",
		},
		breakpoints: { //반응형 조건 속성
			1250: { //1250 이상일 경우
				slidesPerView: 3,
				spaceBetween: 26,
				slidesPerGroup: 1,
			},
			1024: { //1024 이상일 경우
				slidesPerView: 3,
				spaceBetween: 26,
				slidesPerGroup: 1,
			},
			900: { //900 이상일 경우
				slidesPerView: 3,
				spaceBetween: 20,
				slidesPerGroup: 1,
			},
			571: { //571 이상일 경우
				slidesPerView: 2,
				spaceBetween: 20,
				slidesPerGroup: 1,
			},
			280: { //280 이상일 경우
				slidesPerView: 1,
				spaceBetween: 0,
				slidesPerGroup: 1,
			},
		}
	});

	// cop 신규게시글 
	var swiper = new Swiper(".cop-new-list", {
		loop: true,
		navigation: {
		  nextEl: "#swiperBtnNextCopNewHome",
		  prevEl: "#swiperBtnPrevCopNewHome",
		},
		breakpoints: { //반응형 조건 속성
			1024: { //1024 이상일 경우
				slidesPerView: "auto",
				allowTouchMove: false,
				slidesPerGroup: 3,
			},
			900: { //900 이상일 경우
				slidesPerView: 3,
				spaceBetween: 20,
				slidesPerGroup: 1,
				allowTouchMove: true,
			},
			571: { //571 이상일 경우
				slidesPerView: 2,
				spaceBetween: 14,
				slidesPerGroup: 1,
				allowTouchMove: true,
			},
			280: { //280 이상일 경우
				slidesPerView: 1,
				spaceBetween: 0,
				slidesPerGroup: 1,
				allowTouchMove: true,
			},
		}
	});
	

	// 오프라인 비대면 시간표
	var swiper = new Swiper(".schedule-slide-container", {
		slidesPerView: 5,
		spaceBetween: 0,
		slidesPerGroup: 1,
		navigation: {
			nextEl: "#swiperBtnNextSchedule",
			prevEl: "#swiperBtnPrevSchedule",
		},
		breakpoints: { //반응형 조건 속성
			900: { //900 이상일 경우
				slidesPerView: 5,
			},
			571: { //571 이상일 경우
				slidesPerView: 4,
			},
			280: { //280 이상일 경우
				slidesPerView: 3,
			},
			180: { //280 이상일 경우
				slidesPerView: 1,
			},
		}
	});


});




