$(function () {
  $(".lorr>span").on("click", function () {
    let index = $(".lorr>span").index(this);
    console.log($(this).hasClass("active"));
    if ($(this).hasClass("active")) return;
    $(".lorr>span").removeClass("active");
    $(this).addClass("active");

    if (index == 0) {
      $(".login").animate({
        left: "30px",
      });
      $(".register").animate({
        left: "460px",
      });
      $(".lorr>i").animate({
        left: "0px",
      });
    } else {
      $(".login").animate({
        left: "-460px",
      });
      $(".register").animate({
        left: "30px",
      });
      $(".lorr>i").animate({
        left: "70px",
      });
    }
  });
});

$(function () {
  $(".template input").on("focus", function () {
    $(this).prev().css("fontSize", "6px").css("top", "25px");
  });
  $(".template input").on("blur", function () {
    if (!$(this).val()) {
      $(this)
        .prev()
        .css("fontSize", "14px")
        .css("top", "40px")
        .css("color", "red");
      $(this)
        .css("box-shadow", "0 0 3px 3px #ff5c00")
        .css("background-color", "rgba(255, 0, 0, 0.137)");
    } else {
      $(this).css("box-shadow", "none").css("background-color", "#f9f9f9");
      $(this).prev().css("color", "black");
    }
  });
});
