;(function(){
  var $nav = $(".case-2 .case2-nav>li");
  var $list = $(".case-2 .case2-list");
  var $bread = $(".case-2 .bread-nav .change");
  var index;
  $nav.click(function(){
  	$bread.text($(this).text()).attr("title",$(this).text());
    index = $(this).index();
    $(this).addClass("active").siblings("li").removeClass("active");
    $list.stop(true,true).fadeOut(200).eq(index).stop(true,true).fadeIn(500);
  })
})()
