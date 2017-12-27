(function() {
  /************操作头部导航区的样式************/
  var oHeader = document.getElementsByClassName("public-header")[0];
  var oLogo = oHeader.getElementsByClassName("logo")[0];
  var oImg = oLogo.getElementsByTagName("img")[0];
  var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
  if(scrollTop > 20) { //页面刷新保留header的样式操作
    oHeader.style.backgroundColor = "#fff";
    oHeader.style.color = "#000";
    oImg.src = "./resources/img/logo_color.png";
  }

  function setHeadStyle() {
    //实时获取滚动条距离顶部的值
    scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    if(scrollTop > 20) {
      oHeader.style.backgroundColor = "#fff";
      oHeader.style.color = "#000";
      oImg.src = "./resources/img/logo_color.png";
    } else {
      oHeader.style.backgroundColor = "transparent";
      oHeader.style.color = "#fff";
      oImg.src = "./resources/img/logo.png";
    }
  }
  //firefox
  if(document.addEventListener) {
    document.addEventListener("DOMMouseScroll", setHeadStyle, false);
  }
  //IE、Opera、Chrome
  window.onscroll = document.onscroll = setHeadStyle;
})();

/********************案例***********************/
(function() {
  let oIndexBox = $(".index-3");

  let oLeftLi = $(".index-3 .left-nav li");
  let oLeftI = $(".index-3 .left-nav li i");

  let oRightTitle = $(".index-3 .right-content .right-caption");
  let oRightTxt = $(".index-3 .right-content .right-text");

  let obj = {
    imgArr: ["./resources/img/index_bg1.png", "./resources/img/index_bg2.png", "./resources/img/index_bg3.png", "./resources/img/index_bg4.png",
      "./resources/img/index_bg5.png", "./resources/img/index_bg6.png", "./resources/img/index_bg7.png", "./resources/img/index_bg8.png",
      "./resources/img/index_bg9.png", "./resources/img/index_bg10.png",
    ],
    colorArr: ["#3874f4", "#5bcf47", "#ff9f26", "#a842d6", "#0ebe90", "#00baff", "#fa514a", "#f45c91", "#cfa972", "#136771"],
    bgBlue: ["-10px -216px", "-73px -10px", "-190px -62px", "-116px -111px", "-10px -59px", "-242px -10px", "-115px -164px", "-10px -164px", "-242px -118px", "-10px -111px"],
    bgWhite: ["-190px -114px", "-10px -10px", "-190px -10px", "-64px -111px", "-66px -59px", "-242px -64px", "-168px -164px", "-62px -164px", "-292px -10px", "-137px -10px"]
  };
  let index;
  oLeftLi.click(function() {
    index = $(this).index();
    oIndexBox.css({
      "opacity": "0",
      "transition": ".5s"
    });
    setTimeout(function() {
      oIndexBox.css({
        "opacity": "1",
        "background": "url(" + obj.imgArr[index] + ")",
        "transition": ".5s"
      });
    }, 30)
    for(let i = 0; i < obj.colorArr.length; i++) {
      oLeftLi.eq(i).css({
        "background-color": "#fff",
        "transition": ".5s"
      });
      oLeftLi.eq(i).find("i").css("background-position", obj.bgBlue[i]);
    }
    $(this).css("background", obj.colorArr[index]).addClass("active").siblings("li").removeClass("active");
    $(this).find("i").css("background-position", obj.bgWhite[index]);
    if(index == 0) {
      oRightTitle.text("电商类");
      oRightTxt.html("适用于O2O、B2B、B2C、B2B2C电子商务模式<br />" +
        "定制APP开发、支持IOS/安卓双系统<br />" +
        "支持商家端/客户端 双端开发<br />" +
        "支持对接ERP系统、物流系统、CRM系统<br />" +
        "支持APP+PC+web+微信四合一全网开发")
    } else if(index == 1) {
      oRightTitle.text("金融类");
      oRightTxt.html("适用于P2P、 网贷、 众筹、 金融超市等 < br / > " +
        "定制APP开发、支持IOS/安卓双系统<br />" +
        "支持商家端/客户端 双端开发<br />" +
        "支持APP+PC+web+微信四合一全网开发")
    } else if(index == 2) {
      oRightTitle.text("旅游类");
      oRightTxt.html("适用于酒店预订、景点门票购买、旅行游记<br />"+
                    "定制APP开发、支持IOS/安卓双系统<br />"+
                    "支持商家端/客户端 双端开发<br />"+
                    "支持APP+PC+web+微信四合一全网开发")
    } else if(index == 3) {
      oRightTitle.text("医疗类");
      oRightTxt.html("功能：在线咨询、寻找医生、个人档案、<br />"+
                    "定制APP开发、支持IOS/安卓双系统<br />"+
                    "支持医生端/用户端/后台端 三端开发<br />"+
                    "支持APP+PC+web+微信四合一全网开发")
    } else if(index == 4) {
      oRightTitle.text("租赁类");
      oRightTxt.html("适用于房地产中介、租赁平台等<br />"+
                    "定制APP开发、支持IOS/安卓双系统<br />"+
                    "支持商家端/客户端 双端开发<br />"+
                    "支持APP+PC+web+微信四合一全网开发")
    } else if(index == 5) {
      oRightTitle.text("餐饮类");
      oRightTxt.html("适用于在线点餐、外卖送餐、食堂点餐<br />"+
                    "定制APP开发、支持IOS/安卓双系统<br />"+
                    "支持商家端/客户端 双端开发<br />"+
                    "支持APP+PC+web+微信四合一全网开发")
    } else if(index == 6) {
      oRightTitle.text("社交类");
      oRightTxt.html("功能：查看个人信息、IM功能、GPS附近的人、社区；<br />"+
                    "定制APP开发、支持IOS/安卓双系统<br />"+
                    "支持商家端/客户端 双端开发<br />"+
                    "支持APP+PC+web+微信四合一全网开发")
    } else if(index == 7) {
      oRightTitle.text("家政类");
      oRightTxt.html("功能：线上线下结合、O2O服务；<br />"+
                    "定制APP开发、支持IOS/安卓双系统<br />"+
                    "支持商家端/客户端 双端开发<br />"+
                    "支持对接各大ERP系统和物流系统<br />"+
                    "支持APP+PC+web+微信四合一全网开发")
    } else if(index == 8) {
      oRightTitle.text("资讯类");
      oRightTxt.html("适用于新闻资讯、娱乐资讯等<br />"+
                    "定制APP开发、支持IOS/安卓双系统<br />"+
                    "支持商家端/客户端 双端开发<br />"+
                    "支持APP+PC+web+微信四合一全网开发")
    } else if(index == 9) {
      oRightTitle.text("智能类");
      oRightTxt.html("适用于物联网、软硬件对接；<br />"+
                    "定制APP开发、支持IOS/安卓双系统<br />"+
                    "支持商家端/客户端 双端开发<br />"+
                    "支持APP+PC+web+微信四合一全网开发")
    }

  })

})();

/**********************最新资讯***********************/
(function() {
  let $li = $(".index-5 .nav>li");
  let $tab = $(".index-5 .list");
  let index;
  $li.click(function() {
    index = $(this).index();
    $(this).addClass("active").siblings("li").removeClass("active");
    $tab.stop(true, true).fadeOut().eq(index).stop(true, true).fadeIn();
  })
})()