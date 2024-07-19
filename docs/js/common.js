// //반응형 사이즈별 클래스
// $(window).on("load resize", function(){
// 	var w = $(window).width(); 
// 	if(w >= 1024){  // 웹
// 	  $('.wrap').removeClass("mobile").addClass("web"); 
// 	}
// 	if(w < 1024){  // 모바일
// 	  $('.wrap').removeClass("web").addClass("mobile");
// 	}
// });

$(function () {

	// // 바디 푸터는 하단 고정
	// var oHeight = $("body").height();
	// var wHeight = $(window).height();
	// if (wHeight > oHeight) {
	// 	var cHeight = wHeight - 345;
	// 	$(".main,.sub,.home").css({
	// 		"min-height": cHeight,
	// 	});
	// }

	$('.dark-toggle').click(function () {
		$(this).parents('html').toggleClass('dark-mode');
		if ($(this).parents('html').hasClass("dark-mode")) {
			$('.dark-toggle span').text('라이트 모드로 보기');
			document.documentElement.style.setProperty("background-color", '#1E1F21');
			commonUtil.localStorage.set('appearance', {value: 'dark-mode'});
		} else {
			$('.dark-toggle span').text('다크 모드로 보기');
			document.documentElement.style.removeProperty("background-color");
			commonUtil.localStorage.set('appearance', {value: 'light-mode'});
		}
	});

	// 퀵메뉴 맨위로 이동
	$(".btn-move-top").click(function() {
		$('html, body, div.wrap').animate({
			scrollTop : 0
		}, 400);
		return false;
	});

	// snb 사이드메뉴
	$('.snb-nav > ul li').each(function () {
		if ($(this).find('ul li').length == 0) {

		} else {
			$(this).addClass('has-depth');
			$(this).find('>a').removeClass('link-http');
			$(this).find('>a').after('<button type="button" class="btn-view"><span>하위메뉴열기</span></button>');
		};
	});
	$('.snb-nav > ul li a, .snb-nav > ul li button').each(function () {
		if ($(this).parent('li').hasClass('active')) {
			//console.log("active열려있음");                 
			$(this).parent().find('.btn-view').html('<span>하위메뉴닫기</span>');
		} else {
			$(this).parent().find('.btn-view').html('<span>하위메뉴열기</span>');
			//console.log("active아님"); 
		}
		$(this).on('click', function () {
			if ($(this).parent('li').hasClass('active')) {
				$(this).parent('li').removeClass('active');
				$(this).parent().find('.btn-view').html('<span>하위메뉴열기</span>');
			} else {
				$(this).parent('li').addClass('active').siblings().removeClass('active');
				$(this).parent().find('.btn-view').html('<span>하위메뉴닫기</span>');
			}

			if ($(this).parent().find('ul li').length == 0) {
				return true;
			} else {
				return false;
			}

		});
	});
	$('.depth3 > li').each(function () {
		$(this).hasClass('has-depth');
		$(this).parents('.depth2 > li').addClass('has-depth');
	});

	// 검색박스 선택
	$('.sch-select li').each(function () {
		$(this).click(function () {
			$('.sch-select li').removeClass('on').removeAttr("title");
			$(this).addClass('on').attr("title","선택됨");
		});
	})

	$('.thumb-text-wrap .btn-more').click(function(){
		$(this).parent('.thumb-text-wrap').toggleClass('on');
		if($(this).parent('.thumb-text-wrap').hasClass("on")){
			$('.btn-more span').text('닫기');
		} else {
			$('.btn-more span').text('더보기');
		}
	});

	// 통합검색 검색어 선택
	$('.sch-word li').click(function(){
		$(this).toggleClass('on');
		if($(this).hasClass("on")){
			$(this).find('a').attr("title","선택됨");
		} else {
			$(this).removeClass('on').find('a').attr("title","선택안됨");
		}
	});

	// 정렬 뷰 타입
	$('.view-type-check button').each(function () {
		$(this).click(function () {
			$('.view-type-check button').removeClass('on').removeAttr("title");
			$(this).addClass('on').attr("title","선택됨");
		});
	})

	// 정렬 리스트 타입
	$('.view-type-list button').each(function () {
		$(this).click(function () {
			$('.view-type-list button').removeClass('on').removeAttr("title");
			$(this).addClass('on').attr("title","선택됨");
		});
	})

	// 버튼별 정렬 타입
	$('.view-type-year button').each(function () {
		$(this).click(function () {
			$('.view-type-year button').removeClass('on').removeAttr("title");
			$(this).addClass('on').attr("title","선택됨");
		});
	})

	// 전체보기 메뉴
	$('.type-pc .btn-all-view').click(function(){
		$(this).toggleClass('active');
		$('.gnb-menu-all').toggleClass('open');
		if($(this).hasClass("active")){
			$('.btn-all-view span').text('메뉴 전체보기 닫기');
		} else {
			$('.btn-all-view span').text('메뉴 전체보기');
		}
	})

	// 교안 참고자료 툴팁
	$('.tooltip-wrap .btn-icon').each(function () {
		$(this).click(function () {
			$('.tooltip-wrap').removeClass('on').removeAttr("title");
			$(this).parent('.tooltip-wrap').addClass('on').attr("title","선택됨");
		});
	})
	$('.tooltip-wrap .tooltip-close').click(function(){
		$(this).parents('.tooltip-wrap').removeClass('on');
	});
	

	// 오프라인과정 캘린더 월별 툴팁 20240412
	$('.procedure-wrap >li > strong').each(function () {
		$(this).click(function () {
			$('.procedure-wrap >li').removeClass('on').removeAttr("title");
			$(this).parent('.procedure-wrap >li').addClass('on').attr("title","선택됨");
		});
	})
	$('.procedure-wrap .layer-procedure .tooltip-close').click(function(){
		$(this).parents('li').removeClass('on');
	});
	

	// 오프라인과정 캘린더 월별 다중내용 툴팁 20240503  
	$('.calendar-wrap-off .btn-it').each(function () {
		$(this).click(function () {
			$('.calendar-body > ul >li').removeClass('on2').removeAttr("title");
			$(this).parent('.calendar-body > ul >li').addClass('on2').attr("title","선택됨");
		});
	})
	$('.calendar-wrap-off .layer-procedure-2 .tooltip-close').click(function(){  
		$(this).parents('li').removeClass('on2');
	});

	// 오프라인과정 시간표 툴팁 20240412 
	$('.schedule-slide-wrap .schedule-td .schedule-in').each(function () { 
		$(this).click(function () {
			$('.schedule-slide-wrap .schedule-td').removeClass('on2').removeAttr("title");
			$(this).parent('.schedule-td').addClass('on2').attr("title","선택됨");
		});
	})
	$('.schedule-slide-wrap .layer-procedure .tooltip-close').click(function(){
		$(this).parents('.schedule-td').removeClass('on2'); // 툴팁 닫기버튼 눌러도 안없어짐.. 이유 모르겠음.
		return false;
	});



	// 모바일 gnb
	//왼쪽 네비 슬라이드
	$("#openNav").click(function () {
		$(".nav").css("left", "0%");
		$(".layer-dim").addClass("on")
	});
	$("#closeNav,.layer-dim").click(function () {
		$(".nav").css("left", "-100%");
		$(".layer-dim").removeClass("on");
	});
	
	// gnb 하위 뎁스 있으면 depth-in클래스 추가 (화살표 유무)
	$('.gnb ul').parents('li').addClass('depth-in');

	// gnb 메뉴 클릭시 selected 추가
	$('.gnb > li > a').each(function () {
		$(this).click(function () {
			$('.gnb > li').removeClass('selected');
			$(this).parents('li').addClass('selected');
		});
	})
	// gnb 메뉴 클릭시 opeth 추가
	$('.depth-in ul li a').each(function () {
		$(this).click(function () {
			$('.depth-in ul li a').removeClass('opeth');
			$(this).addClass('opeth');
		});
	})
	$('.depth-in ul li.selected a').each(function () {
		$(this).click(function () {
			$('.depth-in ul li.selected a').removeClass('opeth');
		});
	})
	$('.depth-in ul li').each(function () {
		$(this).click(function () {
			$('.depth-in ul li').removeClass('selected');
			$(this).addClass('selected');
		});
	})

	$('.depth-in ul li a.opeth').parents('li').addClass('selected');
	// $('.depth-in ul li a').parents('li').addClass('selected');


	// 통합검색  20231219
	$('.btn-sch-top').off();
	$('.btn-sch-top').on("click", function(){
		$(this).toggleClass('on');
		$(this).parents('.header').toggleClass('sch-on');
		$('.sch-wrap-total').slideToggle(200);
	});



	// 메인 탭
	$('.tab-main li a').each(function () {
		$(this).click(function () {
			$('.tab-main li').removeClass('on').removeAttr("title");
			$(this).parents('li').addClass('on').attr("title","선택됨");
		});
	})

	// 서브 탭
	$('.tab-area li a').each(function () {
		$(this).click(function () {
			$('.tab-area li').removeClass('on').removeAttr("title");
			$(this).parents('li').addClass('on').attr("title","선택됨");
		});
	})

	// 서브 탭
	$('.tab-area2 li a').each(function () {
		$(this).click(function () {
			$('.tab-area2 li').removeClass('on').find('a').removeAttr("title");
			$(this).attr("title","선택됨").parents('li').addClass('on');
		});
	})

	// 서브 탭 추가
	$('.tab-area3 li a').each(function () {
		$(this).click(function () {
			$('.tab-area3 li').removeClass('on').find('a').removeAttr("title");
			$(this).attr("title","선택됨").parents('li').addClass('on');
		});
	})

	// 진단 탭
	$('.tab-jindan li a').each(function () {
		$(this).click(function () {
			$('.tab-jindan li').removeClass('on').find('a').removeAttr("title");
			$(this).attr("title","선택됨").parents('li').addClass('on');
		});
	})
	// 진단 탭

	$('.tab-jindan2 li a').each(function () {
		$(this).click(function () {
			$('.tab-jindan2 li').removeClass('on').find('a').removeAttr("title");
			$(this).attr("title","선택됨").parents('li').addClass('on');
		});
	})

	// 통합검색 탭   20231219
	$('.tab-sch li a').each(function () {
		$(this).click(function () {
			$('.tab-sch li').removeClass('on').removeAttr("title");
			$(this).parents('li').addClass('on').attr("title","선택됨");
		});
	})


	// $('.tab-jindan li').on('click', function(){
	// 	var a = $(this);
	// 	var idx = a.index();
	// 	var box = a.closest('.cover-cont');
	// 	box.find('.tab-jindan-cont').removeClass('on');
	// 	box.find('.tab-jindan-cont').removeClass('on');
	// 	box.find('.tab-jindan-cont:eq('+idx+')').addClass('on');
	// 	a.addClass('on');
	// 	return false;
	// });

	// $('.tab-jindan2 li').on('click', function(){
	// 	var a = $(this);
	// 	var idx = a.index();
	// 	var box = a.closest('.cover-cont');
	// 	box.find('.tab-jindan-cont2').removeClass('on');
	// 	box.find('.tab-jindan-cont2').removeClass('on');
	// 	box.find('.tab-jindan-cont2:eq('+idx+')').addClass('on');
	// 	a.addClass('on');
	// 	return false;
	// });


	

	// 과정홈 메뉴
	$('.home-menu li a').each(function () {
		$(this).click(function () {
			$('.home-menu li').removeClass('on').find('a').removeAttr("title");
			$(this).attr("title","선택됨").parents('li').addClass('on');
		});
	})

	// cop 카테고리
	$('.cop-category li a').each(function () {
		$(this).click(function () {
			$('.cop-category li').removeClass('on').removeAttr("title");
			$(this).parents('li').addClass('on').attr("title","선택됨");
		});
	})


	// cop 랭킹
	$('.tab-area-cop li a').each(function () {
		$(this).click(function () {
			$('.tab-area-cop li').removeClass('on').removeAttr("title");
			$(this).parents('li').addClass('on').attr("title","선택됨");
		});
	})

	// 메인 카테고리 탭
	$('.category-area li a').each(function () {
		$(this).click(function () {
			$('.category-area li').removeClass('on').removeAttr("title");
			$(this).parents('li').addClass('on').attr("title","선택됨");
		});
	})
	// 파일첨부 홀로
	var fileTarget = $('.file-box-wrap2 .upload-hidden');
	fileTarget.on('change', function(){
		if(window.FileReader){
			var filename = $(this)[0].files[0].name;
		} else {
			var filename = $(this).val().split('/').pop().split('\\').pop();
		}

		$(this).siblings('.upload-name').val(filename);
	});

	// 검색영역 상세검색
	$('.sch-box > .sch-box-in > .sch-btn-wrap > .btn-sch2').off();
	$('.sch-box > .sch-box-in > .sch-btn-wrap > .btn-sch2').on("click", function(){
		$(this).toggleClass('on');
		$(this).parents('.sch-box').toggleClass('active');
		$('.sch-box > .sch-more-wrap').slideToggle(400);
		if( $(this).parents('.sch-box').hasClass('active') ) {
			$(this).html('<span>상세닫기</span>');
		} else {
			$(this).html('<span>상세검색</span>');
		}
	});

	// 과정홈 리스트 전체보기
	$('.list-home .btn-view').click(function(){
		$(this).parents('.list-home li').toggleClass('active').each(function () {
			$(this).children('.more-wrap').slideToggle(400);
		})
		if( $(this).parents('.list-home li').hasClass('active') ) {
			$(this).html('<span>닫기</span>');
		} else {
			$(this).html('<span>전체보기</span>');
		}
	});

	// 나의강의실 리스트 전체보기
	$('.list-class .btn-view-sm').click(function(){
		$(this).parents('.list-class li').toggleClass('active').each(function () {
			$(this).children('.more-wrap').slideToggle(400);
		})
		if( $(this).parents('.list-class li').hasClass('active') ) {
			$(this).html('<span>닫기</span>');
		} else {
			$(this).html('<span>펼침</span>');
		}
	});

	// 알림모아보기 리스트 전체보기
	$('.list-alarm .alarm-head .title').click(function(){
		$(this).parents('.list-alarm li').toggleClass('active').each(function () {
			$(this).children('.more-wrap').slideToggle(400);
		})
	});

	// 별점 후기
	$('.star-wrap button').click(function () {
		$(this).parent().children("button").removeClass("on").removeAttr('title');  /* 별점의 on 클래스 전부 제거 */
		$(this).addClass("on").attr('title','선택됨').prevAll("button").addClass("on"); /* 클릭한 별과, 그 앞 까지 별점에 on 클래스 추가 */
		return false;
	});
	

	// COP 소메뉴타이틀 220927 문단비 
	const btn_cop = document.querySelectorAll('.btn-cop');
	const cop_btn_more = document.querySelector('.cop-btn-more');
	if(btn_cop.length > 10) {
		cop_btn_more.classList.toggle('active');
	}
	$('.cop-btn-more').on("click", function(){
		$(".more-menu").toggleClass('on');
		if($(".more-menu").hasClass("on") === true) {
			$(this).css({'transform':'rotate(180deg)'});
			$(this).html('<span>닫기</span>');
		} else {
			$(this).css({'transform':'rotate(0deg)'});
			$(this).html('<span>더보기</span>');
		}
	});

	// 커뮤니티 추천 버튼 토글 220930 문단비
	$('.btn-thumbup').click(function(){
		$(this).toggleClass('on');
	});

	// 북마크 온오프
	$('.btn-bookmark').click(function(){
		$(this).toggleClass('on');
	});

	$('.btn-scrap').click(function(){
		$(this).toggleClass('on');
		// if( $(this).hasClass('on') ) {
		// 	$(this).html('<span>스크랩 취소</span>');
		// } else {
		// 	$(this).html('<span>스크랩</span>');
		// }
	});


	$('.btn-bookmark-text').click(function(){
		$(this).toggleClass('on');
		if( $(this).hasClass('on') ) {
			$(this).html('<span>스크랩 취소</span>');
		} else {
			$(this).html('<span>스크랩</span>');
		}
	});

	$('.login-ul li').each(function () {
        $(this).on("focusout", function () {
            $('.login-ul li').removeClass('on').removeAttr("title");
        });
        $(this).on("focusin", function () {
            $(this).addClass('on').attr("title", "선택됨");
        });
    });

	// 커뮤니티 댓글의 댓글 펼치기/닫기 221004 문단비
	$('.list-review-reply button').click(function(){
		$(this).siblings('.reply-wrap').toggleClass('on');
	});

	// 분류 선택별 정렬
	$( ".form-select-wrap .form-select-title").click(function() {
		if($(this).parent().hasClass("open")) {
			$(this).parent().removeClass("open");
			$(".form-list-more").slideUp("fast");
		} else {
			$(this).parent().addClass("open");
			$(".form-list-more").slideDown("fast");
		}
		return false;
	});

	// 진단>종합지수 상세보기
	$( ".chart-more-view-wrap .btn-view-more").click(function() {
		if($(this).parent().hasClass("open")) {
			$(this).parent().removeClass("open");
			$(this).next(".more-view").slideUp("fast");
			$('.btn-view-more span').text('행동지표별 상세보기');
		} else {
			$(this).parent().addClass("open");
			$(this).next(".more-view").slideDown("fast");
			$('.btn-view-more span').text('행동지표별 상세닫기');
		}
		return false;
	});

	// faq
	$('.list-faq li').click(function(){
		$(this).toggleClass('active');
		$(this).children('.a-block').slideToggle(400);
		if($(this).hasClass("active")){
			$(this).children('.q-block').find('.btn-tog').html('<span>답변열기</span>');
		} else {
			$(this).children('.q-block').find('.btn-tog').html('<span>답변닫기</span>');
		}
	});

	// 전시체험예약
	$('.space-tab-menu li a').each(function () {
		$(this).click(function () {
			$('.space-tab-menu li').removeClass('on').removeAttr("title");
			$(this).parents('li').addClass('on').attr("title","선택됨");
		});
	})

	$('.calendar-table td').click(function(){
		$(this).toggleClass('type-ok');
	});
	
	$('.calendar-table td.type-no').click(function(){
		$(this).removeClass('type-ok');
	});

	$('.print-wrap').parents('body').addClass('type-print');


	// 커뮤니티 슬라이드 221004 문단비
	// var communityVisual = new Swiper('.community-visual', {
	// 	navigation: {
	// 		nextEl: '.swiper-button-next',
	// 		prevEl: '.swiper-button-prev',
	// 	},
	// 	loop: true,
	// 	loopedSlides: 4
	//   });
	//   var communityThumbs = new Swiper('.community-thumbs', {
	// 	spaceBetween: 0,
	// 	centeredSlides: true,
	// 	slidesPerView: 'auto',
	// 	touchRatio: 0.2,
	// 	navigation: {
	// 		nextEl: '.swiper-button-next',
	// 		prevEl: '.swiper-button-prev',
	// 	  },
	// 	slideToClickedSlide: true,
	// 	loop: true,
	// 	loopedSlides: 4
	//   });
	  
	//   communityVisual.controller.control = communityThumbs;
	//   communityThumbs.controller.control = communityVisual;

});


