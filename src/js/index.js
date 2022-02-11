require.config({
  baseUrl: "../js/lib", // 基础路径
  paths: {
    jquery: "jquery",
    axios: "axios",
  },
  shim: {},
});

require(["jquery"], function ($) {
  $(function () {
    const url = [
      "../html/template/sub-nav1.html",
      "../html/template/sub-nav2.html",
      "../html/template/sub-nav3.html",
      "../html/template/sub-nav4.html",
      "../html/template/sub-nav5.html",
      "../html/template/sub-nav6.html",
      "../html/template/sub-nav7.html",
    ];
    $(".template>li").on("mouseover", function () {
      let index = $(".template>li").index(this);
      // console.log(1);
      if (index == 7 || index == 8) return;

      $(".box").load(url[index], function () {});

      $(".box").animate(
        {
          height: "250px",
        },
        200
      );
    });

    $("ul").on("mouseleave", function () {
      $(".box").animate(
        {
          height: "0px",
        },
        200
      );
    });

    $(".delete,.nav-category").on("mouseover", function () {
      $(".box").animate(
        {
          height: "0px",
        },
        200
      );
    });
  });
});

// require(["jquery"], function ($) {
//   $(function () {
//     $(".nav-banner>ul>li").on("mouseenter", function () {
//       let index = $(".nav-banner>ul>li").index(this);
//       $(".sub-content").load("./template/banner-nav.html");
//     });
//     $(".nav-banner>ul").on("mouseleave", function () {
//       $(".sub-content").empty();
//     });
//   });
// });
