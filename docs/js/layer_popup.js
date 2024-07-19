let currentTarget, focusEl = [], popupDepth = 0, popupDimmed, keyEscapeEvt, KeyEvtEl;
const _$this = this,
    popupAll = document.querySelectorAll(".layer-wrap"),
    popupCloseBtnAll = document.querySelectorAll('[popup-close]');
// ESC 누름 감지
const keyEvent = {
    get keyEscape() {
        return this._state;
    },
    set keyEscape(state) {
        this._state = state;
        if (state) escKeyEvt(KeyEvtEl, keyEscapeEvt);
    },
};

keyEvent;

// popup dimmed 생성
const createdDimmed = () => {
    const createDiv = document.createElement('div');
    createDiv.classList.add('popup-dimmed');
    createDiv.style.zIndex = 1000 + (popupDepth * 10);
    createDiv.dataset.popup = currentTarget;
    document.querySelector('body').appendChild(createDiv);
};
// popup dimmed click 시 팝업 닫기
const dimmedClick = (e) => {
    if (e.target.classList.contains('layer-wrap')) {
        popupClose({popupId: e.target.dataset.popup});
        keyEvent.keyEscape = false;
    }
};
// popup open
const popupOpen = (param) => {
    popupDepth = popupDepth + 1;
    currentTarget = typeof param === "object" ? param.popupId : param;
    createdDimmed();

    popupAll.forEach((popupEl) => {
        if ((typeof param === "object" && param.popupId === popupEl.id) || (typeof param === "string" && popupEl.dataset.popup === param) ) {
            popupEl.classList.add('popup-open'); // open class add
            popupEl.style.zIndex = 1001 + (popupDepth * 10);

            // dimmed click 이벤트 할당
            popupEl.removeEventListener('click', dimmedClick);

            if (param.close === undefined || param.close === true) {
                popupEl.addEventListener('click', dimmedClick);
            }

            document.body.classList.add('scroll-lock'); // popup scroll lock
            popupEl.querySelector('.pop-header').focus(); // popup 오픈 시 타이틀에 포커스

            // shift+tab 또는 <- 화살표 키 키보드 동작 시 팝업 밖으로 포커스 이동 방지 이벤트 할당
            popupEl.querySelector('.pop-header').removeEventListener('keydown', titleKeyDown);
            popupEl.querySelector('.pop-header').addEventListener('keydown', titleKeyDown);

            KeyEvtEl = popupEl; // ESC 키 동작을 위한 현재 활성화 된 popup element 저장
        }
    });
};


// popup close
const popupClose = (e) => {
    if (typeof e === "object") {
        if (!e.popupId) {
            e.popupId = $(e.target).closest(".layer-wrap").attr("id");
        }

        if (!e.popupId) {
            e.popupId = $(e.target).attr("popup-close");
        }

        if (!e.popupId) {
            e.popupId = $(e.target).closest(".layer-wrap").data("popup");
        }
    }

    popupAll.forEach((popupEl) => {
        if (typeof e === "object" && (e.popupId === popupEl.id || e.popupId === popupEl.dataset.popup)) {
            popupDepth = popupDepth - 1;

            popupEl.classList.remove('popup-open');
            delete popupEl.dataset.param;
        }
    });

    const popupDimmedList = document.querySelectorAll('.popup-dimmed');
    popupDimmedList.forEach((popupDimmed) => {
        if (popupDepth === 0) {
            // scroll lock 해지
            document.body.classList.remove('scroll-lock');
        }

        if (typeof e === "object" && e.popupId === popupDimmed.dataset.popup) {
            popupDimmed.style.opacity = 0;
            popupDimmed.addEventListener('transitionend', function () {
                if (popupDimmed.parentNode !== null) popupDimmed.parentNode.removeChild(popupDimmed);
            });

            popupDimmed.remove();
        }
    });
}

// ESC 키보드 이벤트
const escKeyEvt = (El, e) => {
    const openPopups = document.querySelectorAll(`.popup-open`);
    // 팝업 열린 상태에서 키보드 ESC 키 이벤트 실행
    if (openPopups.length > 0 && $(e.target).closest(".layer-wrap").find(".btn-layer-close").css("display") !== "none") {
        popupClose(e);
    }
};

// popup 닫기 키보드 이벤트
const closeBtnKeyDown = (e) => {
    if ((e.key == 'Tab' && !e.shiftKey) || e.key == 'ArrowRight') {
        e.preventDefault();
        popupAll.forEach((popupEl) => {
            if (popupEl.getAttribute('data-popup') === e.target.getAttribute('popup-close')) {
                popupEl.querySelector('.pop-header').focus();
            }
        });
    }
};
// popup title 키보드 이벤트
const titleKeyDown = (e) => {
    if ((e.key == 'Tab' && e.shiftKey) || e.key == 'ArrowLeft') {
        e.preventDefault();
        popupAll.forEach((popupEl) => {
            if (popupEl.getAttribute('data-popup') === e.target.closest('.layer-wrap').getAttribute('data-popup')) {
                popupEl.querySelector('.btn-layer-close').focus();
            }
        });
    }
};

// 키보드 ESC 키 누름 감지 이벤트
const escKeyDown = (e) => {
    if (e.key == 'Escape' || e.key == 'Esc') {
        keyEscapeEvt = e;
        keyEvent.keyEscape = true;
    }
};

// 팝업 닫기
popupCloseBtnAll.forEach((popupCloseBtn) => {
    popupCloseBtn.removeEventListener('click', popupClose);
    popupCloseBtn.addEventListener('click', popupClose);
    if (popupCloseBtn.classList.contains('btn-layer-close')) {
        popupCloseBtn.removeEventListener('keydown', closeBtnKeyDown);
        popupCloseBtn.addEventListener('keydown', closeBtnKeyDown);
    }
});
// ESC 키로 팝업 닫기
window.removeEventListener('keydown', escKeyDown);
window.addEventListener('keydown', escKeyDown);
fnPopupBtnAll();
function fnPopupBtnAll() {
    let popupBtnAll = document.querySelectorAll('[aria-haspopup="dialog"]');
    if (popupBtnAll) {
        popupBtnAll.forEach((popupBtn) => {
            popupBtn.removeEventListener('click', function () {
                popupOpen(popupBtn.dataset.popup);
            });
            popupBtn.addEventListener('click', function () {
                popupOpen(popupBtn.dataset.popup);
            });
        });
    }
}
