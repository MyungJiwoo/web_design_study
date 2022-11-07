jQuery(document).ready(function () {
  $(".navi>li")
    .mouseover(function () {
      $(".submenu").stop().slideDown(500);
      $("#menu_bg").stop().slideDown(500);
    })
    .mouseout(function () {
      $(".submenu").stop().slideUp(500);
      $("#menu_bg").stop().slideUp(500);
    });

  $(".imgslide a:gt(0)").hide(); // 컴퓨터보다 큰 요소가 있다면 일단 다 숨겨!
  setInterval(function () {
    $(".imgslide a:first-child")
      .fadeOut() // 지금 보이는 게 안보이도록
      .next("a") // 다음 사진
      .fadeIn()
      .end()
      .appendTo(".imgslide"); // 다음 사진이 보이게끔 연결
  }, 3000);

  $(".notice li:first").click(function () {
    $("#modal").addClass("active");
  });
  $(".btn").click(function () {
    $("#modal").removeClass("active");
  });
});
