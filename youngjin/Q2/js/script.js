// 기본 구성
jQuery(document).ready(function () {
  //   메뉴
  $(".navi>li")
    .mouseover(function () {
      $(".submenu").stop().slideDown(500); // 뭔가 시작 전에 stop 한 번
    })
    .mouseout(function () {
      // . 연산자로 연결해서 if 느낌
      $(".submenu").stop().slideUp(500);
    });

  // 이미지 슬라이드 : 좌-우 슬라이드
  setInterval(function () {
    $(".slidelist").delay(2000);
    $(".slidelist").animate({ marginLeft: -1200 });
    $(".slidelist").delay(2000);
    $(".slidelist").animate({ marginLeft: -2400 });
    $(".slidelist").delay(2000);
    $(".slidelist").animate({ marginLeft: 0 });
    $(".slidelist").delay(2000);
  });

  // 탭 메뉴
  // 시작의 특정 시점이 없으니 바로 함수 실행
  $(function () {
    // 탭 메뉴 눌렀을 때 함수 실행
    $(".tabmenu>li>a").click(function () {
      // a태그(이거)의 부모 요소(li)에 active 클래스 이름을 붙여줌 (처음에 공지사항은 active 설정해뒀음)
      // 그리고 부모 요소의 다른 형제 요소(선택되지 않은)에는 active 없애줌
      $(this).parent().addClass("active").siblings().removeClass("active");
      // 클릭 이벤트 처리 후 호출 부분으로 바로 이동
      return false;
    });
  });

  // 레이어 모달창
  $(".notice li:first").click(function () {
    $("#layer").addClass("active");
  });
  $(".btn").click(function () {
    $("#layer").removeClass("active");
  });
});
