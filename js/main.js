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
    e.target.classList.contains('burger') ? e.target.classList.toggle('active') :
      '';
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
        for(let index of burgerTitle){
          index.nextElementSibling.classList.remove('active');
        }
        e.target.nextElementSibling.classList.add('active');
      } else {
        angleChanger(e.target);
        for(let index of burgerTitle){
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
};