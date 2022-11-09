jQuery(document).ready(function () {
  // 메뉴
  $(".navi>li")
    .mouseover(function () {
      $(this).find(".submenu").stop().slideDown(500);
    })
    .mouseout(function () {
      $(this).find(".submenu").stop().slideUp(500);
    });

  // Fade in, Fade out => 암기하기
  $(".imgslide a:gt(0)").hide();
  setInterval(function () {
    $(".imgslide a:first")
      .fadeOut()
      .next("a")
      .fadeIn()
      .end()
      .appendTo(".imgslide");
  }, 3000);

  // tab
  $(".tabmenu>li>a").click(function () {
    $(this).parent().addClass("active").siblings().removeClass("active");
    return false;
  });

  // layer popup
  $(".notice>ul>li>a:first").click(function () {
    $("#layer").addClass("active");
  });
  $(".btn").click(function () {
    $("#layer").removeClass("active");
  });
});
