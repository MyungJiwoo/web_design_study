jQuery(document).ready(function () {
  // 메뉴
  $(".navi>li")
    .mouseover(function () {
      $(this).find(".submenu").stop().slideDown(500); // 각각의 메뉴만 슬라이드 다운
    })
    .mouseout(function () {
      $(this).find(".submenu").stop().slideUp(500);
    });

  // 이미지 슬라이드 : 상-하 슬라이드 (margin을 +로 주면 반대로 작동)
  // 바로 시작하니까 setIneterval로 시작
  setInterval(function () {
    $(".slidelist").delay(1000);
    $(".slidelist").animate({ marginTop: -300 });
    $(".slidelist").delay(2000);
    $(".slidelist").animate({ marginTop: -600 });
    $(".slidelist").delay(2000);
    $(".slidelist").animate({ marginTop: 0 });
    $(".slidelist").delay(2000);
  });

  // tab
  $(function () {
    $(".tabmenu>li>a").click(function () {
      $(this).parent().addClass("active").siblings().removeClass("active");
      return false;
    });
  });

  // layer
  $(".notice li:first").click(function () {
    $("#layer").addClass("active");
  });
  $(".btn").click(function () {
    $("#layer").removeClass("active");
  });
});
