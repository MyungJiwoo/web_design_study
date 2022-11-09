jQuery(document).ready(function () {
  $(".navi>li")
    .mouseover(function () {
      $(this).find(".submenu").stop().slideDown(500);
    })
    .mouseout(function () {
      $(this).find(".submenu").stop().slideUp(500);
    });

  // 이미지 슬라이드 : fade-in/out
  $(".imgslide a:gt(0)").hide();
  setInterval(function () {
    $(".imgslide a:first-child")
      .fadeOut(1000)
      .next("a")
      .fadeIn(1000)
      .end()
      .appendTo(".imgslide");
  }, 3000);

  // 탭메뉴
  $(function () {
    // >a 까지!
    $(".tabmenu>li>a").click(function () {
      $(this).parent().addClass("active").siblings().removeClass("active");
      return false;
    });
  });

  // 팝업창
  $(".notice li:first").click(function () {
    $("#layer").addClass("active");
  });
  $(".btn").click(function () {
    $("#layer").removeClass("active");
  });
});
