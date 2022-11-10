jQuery(document).ready(function () {
  $(".tabmenu>li>a").click(function () {
    $(this).parent().addClass("active").siblings().removeClass("active");
  });
});
