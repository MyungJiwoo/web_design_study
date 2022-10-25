// 제이쿼리의 기본 구성
// jQuery(document).ready(function () {});

jQuery(document).ready(function () {
  // ** 메뉴 관련 애니메이션
  $(".navi>li")
    .mouseover(function () {
      // this 안에서 submenu를 찾음, 일단 멈춰둔 다음에, 슬라이드다운 0.5s
      $(this).find(".submenu").stop().slideDown(500);
    })
    .mouseout(function () {
      $(this).find(".submenu").stop().slideUp(500);
    });

  // ** 이미지 슬라이드
  // gt(0) : 0 인덱스보다 큰 것들 모두 선택 = a의 모든 요소를 가져옴
  $(".imgslide a:gt(0)").hide(); // 일단 숨겨줌
  setInterval(function () {
    // setInterval 함수 : n초마다 반복
    $(".imgslide a:first-child") // 이미지 슬라이드의 첫 번째 자식을
      .fadeOut(1000) // 숨겨줌
      .next("a") // 다음 a 태그를 (두 번째 요소를 불러옴)
      .fadeIn(1000) // 나타나게 함
      .end() // 끝
      .appendTo(".imgslide"); // 선택한 요소를 이미지슬라이드 선택자 요소의 자식 요소로 추가 (다음 요소를 첫 번째 요소로 -> 슬라이드 가능)
  }, 3000); // 3초마다 반복

  // 모달창
  $(".notice li:first").click(function () {
    $("#modal").addClass("active"); // active 클래스 활성화 (css에서 .으로 active 클래스를 만들었기 때문에!)
  });
  $(".btn").click(function () {
    $("#modal").removeClass("active"); // active 클래스 종료
  });
});
