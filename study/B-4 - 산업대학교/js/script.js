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

  setInterval(function () {
    $(".slidelist").animate({ marginTop: "-300px" });
    $(".slidelist").delay(2000);
    $(".slidelist").animate({ marginTop: "-600px" });
    $(".slidelist").delay(2000);
    $(".slidelist").animate({ marginTop: "0px" });
    $(".slidelist").delay(2000);
  }, 3000);

  $(".notice > ul > li:first").click(function () {
    $("#modal").addClass("active");
  });
  $(".btn").click(function () {
    $("#modal").removeClass("active");
  });
});
