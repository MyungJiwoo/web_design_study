jQuery(document).ready(function () {
  // 가로형 메뉴, 전체 영역이 보이게
  $(".navi")
    .mouseover(function () {
      $(this).find(".submenu").stop().slideDown(500);
      $("#menuwrap").stop().animate({ height: "220px" }); // 여분
    })
    .mouseout(function () {
      $(this).find(".submenu").stop().slideUp(500);
      $("#menuwrap").stop().animate({ height: "100px" });
    });

  // Fade in, Fade out
  $(".imgslide a:gt(0)").hide();
  setInterval(function () {
    $(".imgslide a:first-child")
      .fadeOut()
      .next("a")
      .fadeIn()
      .end()
      .appendTo(".imgslide");
  }, 3000);

  // modal
  $(".notice li:first").click(function () {
    $("#modal").addClass("active");
  });
  $(".btn").click(function () {
    $("#modal").removeClass("active");
  });
});
