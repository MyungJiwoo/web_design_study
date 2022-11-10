jQuery(document).ready(function () {
  // 메뉴
  $(".navi>li")
    .mouseover(function () {
      $(".submenu").stop().slideDown(500);
      $("#menu_bg").stop().slideDown(500);
    })
    .mouseout(function () {
      $(".submenu").stop().slideUp(500);
      $("#menu_bg").stop().slideUp(500);
    });

  // 좌우 슬라이드
  setInterval(function () {
    $(".slidelist").animate({ marginLeft: "-1200px" });
    $(".slidelist").delay(2000);
    $(".slidelist").animate({ marginLeft: "-2400px" });
    $(".slidelist").delay(2000);
    $(".slidelist").animate({ marginLeft: "0px" });
    $(".slidelist").delay(2000);
  }, 3000);

  // 모달
  $(".notice>ul>li:first").click(function () {
    $("#modal").addClass("active");
  });
  $(".btn").click(function () {
    $("#modal").removeClass("active");
  });
});
