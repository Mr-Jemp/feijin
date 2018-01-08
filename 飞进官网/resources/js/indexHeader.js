(function() {
    /************操作头部导航区的样式************/
    var oHeader = $(".public-header");
    var oLogo = $(".public-header img");
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    if(scrollTop > 20) { //页面刷新保留header的样式操作
        oHeader.css({
            "background-color": "#fff",
            "color": "#000"
        });
        oLogo.attr("src", "./resources/img/logo_color.png");
    }

    function setHeadStyle() {
        //实时获取滚动条距离顶部的值
        scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if(scrollTop > 20) {
            oHeader.css({
                "background-color": "#fff",
                "color": "#000"
            });
            oLogo.attr("src", "./resources/img/logo_color.png");
        } else {
            oHeader.css({
                "background-color": "transparent",
                "color": "#fff"
            });
            oLogo.attr("src", "./resources/img/logo.png");
        }
    }
    $(window).on("scroll", setHeadStyle)
})();