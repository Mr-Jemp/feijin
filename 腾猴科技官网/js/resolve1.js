/*课程设计思路tab切换*/
function changeTab(){
  var tabChange = $(".tab-change");
  var oLi = $('.classify li');
  var oA = $(".classify a");
  oLi.click(function(){
    
    for(var i=0;i<oLi.length;i++){
      oA.eq(i).removeClass("active");
      tabChange.eq(i).removeClass("show");
      
      $(this).find('a').addClass("active");
      tabChange.eq($(this).index()).addClass("show");
    }
  })
}
changeTab();


/*综合教育课tab切换*/
function changeCut(){
  var navBtn = $(".content5-nav li");
  var leftUl = $(".content5-left ul");
  var rightUl = $(".content5-right");
  console.log(leftUl)
  console.log(rightUl)
  navBtn.click(function(){
    $(this).addClass("active").siblings("li").removeClass("active");
    for(var i=0;i<navBtn.length;i++){
      leftUl.eq(i).removeClass("show");
      rightUl.eq(i).removeClass("show")
      leftUl.eq($(this).index()).addClass("show");
      rightUl.eq($(this).index()).addClass("show");
    }
  })
}
changeCut();
