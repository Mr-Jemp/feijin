/**************团队文化*****************/ ;
(function() {
  var $li = $(".team-3 .team3-nav li");
  var $photo = $(".team-3 .team3-photo-list");
  var index;
  $li.click(function() {
    index = $(this).index();
    $(this).addClass("active").siblings("li").removeClass("active");
    $photo.stop(true, true).fadeOut().eq(index).stop(true, true).fadeIn();
  })
})();
