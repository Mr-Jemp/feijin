(function(){
  var $nav = $(".info-2 .info2-nav>li");
  var $list = $(".info-2 .list-1");
  var $bread = $(".info-2 .bread-nav .change");
  var index;
  $nav.click(function(){
  	$bread.text($(this).text()).attr("title",$(this).text());
    index = $(this).index();
    $(this).addClass("active").siblings("li").removeClass("active");
    $list.stop(true,true).fadeOut(200).eq(index).stop(true,true).fadeIn(500);
  })
})()
