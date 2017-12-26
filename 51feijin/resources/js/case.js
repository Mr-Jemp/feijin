;(function(){
  var $nav = $(".case-2 .case2-nav>li");
  var $list = $(".case-2 .case2-list");
  var index;
  $nav.click(function(){
    index = $(this).index();
    $(this).addClass("active").siblings("li").removeClass("active");
    $list.stop(true,true).fadeOut(300).eq(index).stop(true,true).fadeIn(300);
  })
})()
