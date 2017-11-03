//头部下拉 
$("#nav-ul").on("hover", "li", function () {
    $(this).addClass("active").siblings("li").removeClass("active");
    var name = $(this).data("name");
    var $product = $("#product");
    var $resolve = $("#resolve");
    if (name == "product") {
        $resolve.hide();
        $product.show();
    } else if (name == "resolve") {
        $product.hide();
        $resolve.show();
    } else {
        $product.hide();
        $resolve.hide();

    }


});

//弹窗显示和隐藏
var pop_switchover = function (obj) {
    var $pop = $(obj);
    $pop.is(":hidden") ? $pop.show() : $pop.hide()
};


var TengHou = {
    pc: function () {
        console.log("pc");
        var js_productBox = $(".js_productBox");
        if (js_productBox.length != 0) {
            var resizeInit = function () {
                var window_height = $(window).height();
                js_productBox.css({ "height": window_height + 'px' });
            }
            resizeInit();
            $(window).resize(resizeInit);
        }

        //pc端显示pc图片
        $(".js_phoneBanner[data-pc]").each(function () {
            var url = $(this).attr("data-pc");
            $(this).css({ "background-image": "url(" + url + ")" });
        });
    },
    phone: function () {
        console.log("phone");

        //手机端显示手机图片
        $(".js_phoneBanner[data-phone]").each(function () {
            var url = $(this).attr("data-phone");
            $(this).css({ "background-image": "url(" + url + ")" });
        });
    },
    init: function () {

        //切换侧栏
        $(".side-toggle-btn").click(function () {
            $("body").toggleClass("side-switch")
        });
        $(".header-menu-layout .menu-mask").click(function () {
            $("body").removeClass("side-switch");
        });

        //图片懒加载
        if ($("img[data-original]").length != 0) $("img[data-original]").lazyload();
    }
}


$(function () {


    var browser = {
        versions: function () {
            var u = navigator.userAgent, app = navigator.appVersion;
            return {//移动终端浏览器版本信息
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    }

    TengHou.init();

    //判断是否手机端
    if (browser.versions.android || browser.versions.iPhone) {
        TengHou.phone()
    } else {
        TengHou.pc();
    }


    //.js_swiperBox 的属性说明
    //data-row 为显示的列数，默认为1
    //data-loop 为循环轮番，默认为true
    //data-autoplay 为自动轮番，默认为0

    //.js_swiper 控制不同swiper的调用
    //.js_pagination 控制不同swiper页数 切换
    //.js_prev  控制上一页
    //.js_next  控制下一页
    var swiper = [];
    var js_swiperBox = $(".js_swiperBox");
    if (js_swiperBox.length != 0) {
        js_swiperBox.each(function (index) {
            var row;
            var autoplay;
            var loop;

            //判断是否移动端
            if (browser.versions.android || browser.versions.iPhone) {
                row = 1;
            } else {
                typeof $(this).attr("data-row") == "string" ? row = Number($(this).attr("data-row")) : row = 1;
            }
            //得到列数,默认为1
            if ($(this).find(".swiper-slide").length > row) {
                $(this).attr("data-loop") == "false" ? loop = false : loop = true;								//是否循环，默认为true
                //得到自动时间，默认为0
                typeof $(this).attr("data-autoplay") == "string" ? autoplay = $(this).attr("data-autoplay") : autoplay = 0;
                $(this).find(".js_swiper").addClass("js_swiper" + index);
                $(this).find(".js_pagination").addClass("js_pagination" + index);
                swiper[index] = new Swiper('.js_swiper' + index, {
                    slidesPerView: row,
                    loop: loop,
                    autoplay: autoplay,
                    autoplayDisableOnInteraction: false,
                    pagination: '.js_pagination' + index,
                    paginationClickable: true,
                    onSlideChangeEnd: function () {
                        var js_employList = $(".js_employList");
                        if (js_employList.length != 0) {
                            var text = $(".js_employList .swiper-slide-active").attr("data-text");
                            $(".js_employList .employ-show-text").text(text);
                        }
                    }
                });
                $(this).find(".js_prev").click(function (e) {
                    e.preventDefault();
                    swiper[index].swipePrev();
                });
                $(this).find(".js_next").click(function (e) {
                    e.preventDefault()
                    swiper[index].swipeNext();
                });
                $(this).mouseenter(function () {
                    swiper[index].stopAutoplay();
                });
                $(this).mouseleave(function () {
                    swiper[index].startAutoplay();
                });
            } else {
                $(this).find(".swiper-slide").css({ "width": 100 / row + "%" });
                $(this).find(".js_prev").hide();
                $(this).find(".js_next").hide();
            }
        });
    }




})