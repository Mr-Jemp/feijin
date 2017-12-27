/**************团队文化*****************/ ;
(function() {
  let $li = $(".team-3 .team3-nav>li");
  let $photo = $(".team-3 .team3-photo-list");
  let index;
  $li.click(function() {
    index = $(this).index();
    $(this).addClass("active").siblings("li").removeClass("active");
    $photo.stop(true, true).fadeOut().eq(index).stop(true, true).fadeIn();
  })
})();
