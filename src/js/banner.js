$(function () {
  var index = 0; // 初始化索引
  var lock = true;

  const nameSpace = {}; // 命名空间

  $(".zeroPoint li").click(function () {
    index = $(this).index();
    // 获取索引
    $(this).addClass("active").siblings().removeClass("active");
    $(".img-warp li").eq(index).fadeIn().siblings().fadeOut();
    resetTime();
  });

  $("#nextArrow").click(function () {
    if (lock) {
      index++;
      if (index > 2) {
        index = 0;
      }
      $(".zeroPoint li")
        .eq(index)
        .addClass("active")
        .siblings()
        .removeClass("active");
      $(".img-warp li").eq(index).fadeIn().siblings().fadeOut();
      lock = false;
      resetTime();
    }
  });

  $("#prevArrow").click(function () {
    if (lock) {
      index--;
      if (index < 0) {
        index = 2;
      }
      $(".zeroPoint li")
        .eq(index)
        .addClass("active")
        .siblings()
        .removeClass("active");
      $(".img-warp li").eq(index).fadeIn().siblings().fadeOut();
      lock = false;
      resetTime();
    }
  });

  function autoplay() {
    nameSpace.timer = setInterval(function () {
      //定时器，达到自动轮播的效果
      index++; //循环++
      if (index > 2) {
        //当循环到最后一个就再从第一个开始
        index = 0;
      }
      $(".zeroPoint li")
        .eq(index)
        .addClass("active")
        .siblings()
        .removeClass("active"); //设置小圆点
      $(".img-warp li").eq(index).fadeIn().siblings().fadeOut(); //设置图片
    }, 5000);
  }
  // 节流锁
  function lockTime() {
    setTimeout(function () {
      lock = true;
    }, 500);
  }

  // 函数防抖
  function resetTime() {
    clearInterval(nameSpace.timer);
    lockTime();
    autoplay();
  }
  // 自动播放函数
  autoplay();
});
