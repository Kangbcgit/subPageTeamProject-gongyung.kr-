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
          index.nextElementSibling.classList.remove('active');
        }
        e.target.nextElementSibling.classList.add('active');
      } else {
        angleChanger(e.target);
        for (let index of burgerTitle) {
          index.nextElementSibling.classList.remove('active');
        }
        e.target.parentElement.nextElementSibling.classList.add('active');
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
  for (let i = 1; i <= 100; i++) {
    listNoticeBoard[`notice${i}`] = {
      order: i,
      title: `공지사항 ${i}`,
      writer: `빕잌휴츀힌 마쉬깨똬${i}`,
      date: `2020-01-01`,
      thumbsUp: i
    }
  }
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
  let calcRendering = function (appendTarget, object, renderingLength, listNoticeBaordLength ,renderingStartPoint) {
    let firstNode = document.createElement('li');
    firstNode.classList.add('top');
    firstNode.innerHTML = `
      <span class="post_order">No</span>
      <a class="post_title">제목</a>
      <span class="post_writer">글쓴이</span>
      <span class="post_date">작성시간</span>
      <span class="post_thumbs_up">좋아요</span>
    `;
    noticeBoardUl.appendChild(firstNode)
    for (let i = renderingLength; i > 0; i--) {
      let li = document.createElement('li');
      let {order, title, writer, date, thumbsUp} = object[`notice${listNoticeBaordLength - i + 1 - (renderingStartPoint * 12)}`];
      li.innerHTML = `
        <span class="post_order">${order}</span>
        <a href="#none" class="post_title">${title}</a>
        <span class="post_writer">${writer}</span>
        <span class="post_date">${date}</span>
        <span class="post_thumbs_up">${thumbsUp}</span>
        `;
      appendTarget.appendChild(li);
    }
  }
  // first rendering
  calcRendering(noticeBoardUl, listNoticeBoard, renderingLength, listNoticeBaordLength, 0);
  let tabNumberButton = document.querySelectorAll('main .inner .notice_board .button-tab .wrap-tab_number a.button-page');
  // 좌 우 버튼을 누를시 tabNumber 10씩 상승
  let buttonTab = document.querySelector('main .inner .notice_board .button-tab');
  buttonTab.addEventListener('click', function (e) {
    e.preventDefault();
    
  });
  // tab_number event rendering
  for (let index of tabNumberButton) {
    index.addEventListener('click', function (e) {
      e.preventDefault(); /* a 태그 기능 상실 */
      noticeBoardUl.innerHTML= '';
      calcRendering(noticeBoardUl, listNoticeBoard, renderingLength, listNoticeBaordLength, +e.target.textContent);
    });
  };

}