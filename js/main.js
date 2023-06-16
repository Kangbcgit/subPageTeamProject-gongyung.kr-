window.onload = function () {

  // gnb, submenu 이벤트 핸들러
  let gnb = document.querySelector('header .wrap-gnb');
  gnb.addEventListener('mouseover', function () {
    document.querySelector('.blur').classList.add('active');
  });
  gnb.addEventListener('mouseout', function () {
    document.querySelector('.blur').classList.remove('active');
  });
  // mobile header burger 이벤트 핸들러 
  let burger = document.querySelector('header .burger');
  burger.addEventListener('click', function (e) {
    if (e.target.classList.contains('burger')) {
      e.target.classList.toggle('active')
    } else {
      e.target.parentElement.classList.toggle('active');
    }
    if (e.target === burger) {
      e.target.nextElementSibling.classList.toggle('active');
    } else {
      e.target.parentElement.nextElementSibling.classList.toggle('active');
    }
  });
  let burgerMenu = document.querySelector('header .burger-menu');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      burgerMenu.classList.remove('active');
      burger.classList.remove('active');
    }
  });
  // .burger-menu .title 이벤트 핸들러
  let angleChanger = function (target) {
    if (target.classList.contains('fa-angle-left')) {
      target.classList.remove('fa-angle-left');
      target.classList.add('fa-angle-down');
    } else {
      target.classList.remove('fa-angle-down');
      target.classList.add('fa-angle-left');
    }
  };
  // 최적화 절대 필요함
  let burgerTitle = document.querySelectorAll('.burger-menu .title');
  for (let index of burgerTitle) {
    index.addEventListener('click', function (e) {
      if (!e.target.classList.contains('fa')) {
        angleChanger(e.target.lastElementChild);
        for (let index of burgerTitle) {
          e.target.nextElementSibling !== index.nextElementSibling? index.nextElementSibling.classList.remove('active') : '';
        }
        e.target.nextElementSibling.classList.toggle('active');
      } else {
        angleChanger(e.target);
        for (let index of burgerTitle) {
          e.target.parentElement.nextElementSibling !== index.nextElementSibling ? index.nextElementSibling.classList.remove('active') : '';
        }
        e.target.parentElement.nextElementSibling.classList.toggle('active');
        console.log(e.target.parentElement.nextElementSibling);
      }
    });
  }
  // burger active 도중 resize시 active 삭제해줄 핸들러
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      burger.classList.remove('active');
      burger.nextElementSibling.classList.remove('active');
    } else {
      burger.classList.remove('active');
      burger.nextElementSibling.classList.remove('active');
    }
  });
  // 게시판 이벤트 핸들러
  let listNoticeBoard = {};
  for (let i = 1; i <= 988; i++) {
    listNoticeBoard[`notice${i}`] = {
      order: i,
      title: `공지사항 ${i}`,
      link: `#none`,
      writer: `행정담당`,
      date: `2020-01-01`,
      view: i
    }
  }
  listNoticeBoard[`notice1000`] = {
      order: 1000,
      title: `2023 전국 산·학·연 협력 「정부육성 창업기업 제품 통합지원」 사업 참여기업 모집 공고`,
      link: `#none`,
      writer: `행정담당`,
      date: `2023-04-03`,
      view: 42
    };
  listNoticeBoard[`notice999`] = {
      order: 999,
      title: `[동반위-대구 동반성장 페어] 혁신기술 구매상담회 참여 중소기업 모집 안내(~04.05)`,
      link: `#none`,
      writer: `행정담당`,
      date: `2023-03-28`,
      view: 18
    };
  listNoticeBoard[`notice998`] = {
      order: 998,
      title: `[중기유통센터] 2023 TV홈쇼핑 방송지원사업 1차 참여기업 모집 공고`,
      link: `#none`,
      writer: `행정담당`,
      date: `2023-03-23`,
      view: 49
    };
  listNoticeBoard[`notice997`] = {
      order: 997,
      title: `2023년 공영홈쇼핑 「공익적 지역홍보 광고지원 사업」 선정 결과 공고`,
      link: `#none`,
      writer: `행정담당`,
      date: `2023-03-21`,
      view: 23
    };
  listNoticeBoard[`notice996`] = {
      order: 996,
      title: `2023 「전국 지역 특화제품 판로지원」 사업 참여기업 모집 공고`,
      link: `#none`,
      writer: `행정담당`,
      date: `2023-03-20`,
      view: 62
    };
  listNoticeBoard[`notice995`] = {
      order: 995,
      title: `제2회 「국내 우수 아이디어 혁신기업제품 공모전」 모집 공고`,
      link: `#none`,
      writer: `행정담당`,
      date: `2023-03-13`,
      view: 95
    };
  listNoticeBoard[`notice994`] = {
      order: 994,
      title: `2023 「사회적기업 및 장애인기업 판로지원 사업」 참여기업 모집 공고`,
      link: `#none`,
      writer: `행정담당`,
      date: `2023-02-27`,
      view: 17
    };
  listNoticeBoard[`notice993`] = {
      order: 993,
      title: `2023 국가대표 중소기업 브랜드K 기업 모집공고`,
      link: `#none`,
      writer: `행정담당`,
      date: `2023-02-20`,
      view: 12
    };
  listNoticeBoard[`notice992`] = {
      order: 992,
      title: `공지사항`,
      link: `#none`,
      writer: `행정담당`,
      date: `2023-02-15`,
      view: 92
    };
  listNoticeBoard[`notice991`] = {
      order: 991,
      title: `2023 공영홈쇼핑 「공익적 지역홍보 광고지원 사업」 참여기관 모집 공고`,
      link: `#none`,
      writer: `행정담당`,
      date: `2023-01-09`,
      view: 35
    };
  listNoticeBoard[`notice990`] = {
      order: 990,
      title: `[알림] 2022년 시청자 의견 반영 결과 정리 공지`,
      link: `#none`,
      writer: `행정담당`,
      date: `2020-01-05`,
      view: 51
    };
  listNoticeBoard[`notice989`] = {
      order: 989,
      title: `협력사 대표이사께 드리는 말씀`,
      link: `#none`,
      writer: `행정담당`,
      date: `2020-01-01`,
      view: 21
    };
    console.log(listNoticeBoard);
  // tab_number 생성
  // let tabNumber = document.querySelectorAll('main .inner .notice_board .button-tab .wrap-tab_number');
  // if (Object.keys(listNoticeBoard).length === 0) {
  //   let buttonPage = document.createElement('a');
  //   buttonPage.classList.add('button-page');
  //   buttonPage.setAttribute('href', '#none');
  //   buttonPage.textContent = 1;
  //   tabNumber.appendChild(buttonPage); 
  // } else if (Object.keys(listNoticeBoard).length  >= 12) {
  //   let 
  // };
  // 렌더링
  let noticeBoard = document.querySelector('main .inner .notice_board'),
    noticeBoardUl = document.querySelector('main .inner .notice_board ul'),
    renderingLength = 12,
    listNoticeBaordLength = Object.keys(listNoticeBoard).length;
  let calcRendering = function (prependtarget, object, renderingLength, listNoticeBaordLength ,renderingStartPoint) {
    
    for (let i = renderingLength; i > 0; i--) {
      let li = document.createElement('li');
      let {order, title, link, writer, date, view} = object[`notice${listNoticeBaordLength - i + 1 - (renderingStartPoint * 12)}`];
      li.innerHTML = `
        <span class="post_order">${order}</span>
        <a href="${link}" class="post_title"><span>${title}</span></a>
        <span class="post_writer">${writer}</span>
        <span class="post_date">${date}</span>
        <span class="post_view">${view}</span>
        `;
      prependtarget.prepend(li);
    }
    let firstNode = document.createElement('li');
    firstNode.classList.add('top');
    firstNode.innerHTML = `
      <span class="post_order">No</span>
      <a class="post_title"><span>제목</span></a>
      <span class="post_writer">글쓴이</span>
      <span class="post_date">작성시간</span>
      <span class="post_view">좋아요</span>
    `;
    noticeBoardUl.prepend(firstNode)
    if (window.innerWidth <= 768) document.querySelector('ul .top').style.display = 'none';
  }
  // first rendering
  calcRendering(noticeBoardUl, listNoticeBoard, renderingLength, listNoticeBaordLength, 0);
  let tabNumberButton = document.querySelectorAll('main .inner .notice_board .button-tab .wrap-tab_number a.button-page');
  // 좌 우 버튼을 누를시 tabNumber 10씩 상승
  let buttonTab = document.querySelector('main .inner .notice_board .button-tab');
  buttonTab.addEventListener('click', function (e) {
    e.preventDefault();
    // fa-angle-left / right 클릭시 이벤트 
    if (e.target.classList.contains('fa')) {
      for (let index of tabNumberButton) {
        index.classList.remove('active');
      }
    }
    if (e.target.classList.contains('fa-angle-left')) {
      console.log('left');
      if (tabNumberButton[0].textContent === '1') {
        return;
      } else {
        for (let i = 0; i < tabNumberButton.length; i++) {
          tabNumberButton[i].textContent = +tabNumberButton[i].textContent - 10;
        }
      }   
    } else if (e.target.classList.contains('fa-angle-right')) {
      console.log('right');
      if (false) {
        return;
      } else {
        for (let i = 0; i < tabNumberButton.length; i++) {
          tabNumberButton[i].textContent = +tabNumberButton[i].textContent + 10;
        }
      }
    }
    // fa-angle-double-left / right 클릭시 이벤트 right는 아직 미구현
    if (e.target.classList.contains('fa-angle-double-left')) {
      for (let i = 0; i < tabNumberButton.length; i++) {
        tabNumberButton[i].textContent = i+1;
      }
    };
  });
  // tab_number event rendering
  for (let index of tabNumberButton) {
    index.addEventListener('click', function (e) {
      e.preventDefault(); /* a 태그 기능 상실 */
      noticeBoardUl.innerHTML= '';
      calcRendering(noticeBoardUl, listNoticeBoard, renderingLength, listNoticeBaordLength, +e.target.textContent - 1);
      for (let index of tabNumberButton) {9
        index.classList.remove('active');
      }
      e.target.classList.add('active');
    });
  };
  // scroll event 
  // window.addEventListener('scroll', function () {
  //   if (window.scrollY > 0) {
  //     document.querySelector('header').style.cssText = `position: fixed; top: 0; width: 100%;`;
  //   }
  // }); 
  // resize event 반응형 
  if (window.innerWidth < 768) {
    document.querySelector('ul > .top').style.cssText = 'display: none;'
  }
  window.addEventListener('resize', function () {
    if (window.innerWidth < 768) {
      document.querySelector('ul > .top').style.cssText = 'display: none;'
    } else {
      document.querySelector('ul > .top').style.cssText = 'display: flex;'
    }
  });
}