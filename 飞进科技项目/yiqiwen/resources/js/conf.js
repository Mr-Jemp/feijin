var api_domain = "http://localhost/wapapi/";
//var api_domain = "http://apiyqw.51feijin.com/api/";
var return_url = "http://apiyqw.51feijin.com/wap/";
var img_url = "http://apiyqw.51feijin.com/";

var wap = {
	post: function(requestUrl, param, callback, callback3){
		$.ajax({
			type: "POST",
			url: api_domain + requestUrl,
			dataType: "json",
			contentType: "application/json",
			data: JSON.stringify(param),
			async: true,
			success: function(data) {
				if (data["status"] != 1 && data["status"] != 102 && data["status"] != 105) {					
					alertTip(data.msg, "确定");
					return;
				}				
				if (data["status"] == 105) {
					callback(data.data);
					return;
				}	
				if (data["status"] == 102) {
					alertConfirm("未登录或登录超时！", "重新登录", function(){
						localStorage.removeItem("loginToken");
						localStorage.removeItem("userId");						
						window.location.href = "../login/login.html";
					})
					return;
				}
				callback(data.data);
			},
			error: function(data) {	
				if (callback3) {
					callback3();
				} else {
					alertTip(data.msg, "确定");
				}				
			}
		});
	},
	get: function(requestUrl, callback) {
		this.request(requestUrl, callback);
	},
	request: function(requestUrl, callback) {
		$.ajax({
			type: "GET",
			url: api_domain + requestUrl,
			dataType: "json",
			async: true,
			success: function(data) {
				if (data["status"] != 1 && data["status"] != 102 && data["status"] != 105) {					
					alertTip(data.msg, "确定");
					return;
				}	
				if (data["status"] == 105) {
					callback(data.data);
					return;
				}
				if (data["status"] == 102) {
					alertConfirm("未登录或登录超时！", "重新登录", function(){
						localStorage.removeItem("loginToken");
						localStorage.removeItem("userId");						
						window.location.href = "../login/login.html";
					})
					return;
				}		
				callback(data.data);
			}
		});
	},
	getId: function(url) {
		var params = url.split('?')[1]; //获取问号之后的值
		if (!params || params.split("=").length == 0) {
			return "";
		}
		return params.split("=")[1]; //获取等于号之后的值
	}
}

//获取url上的查询字符串公共方法
function getSearchParams(search){
	var isFlag = search.indexOf('&',0);
	if(isFlag == -1){
		var res = {};
		var parts = search.split("=");
		res[parts[0]] = parts[1];
 		return res;
	}
    var params = search.split("&");
    return params.reduce(function(res,items){
        var parts = items.split("=");
        res[parts[0]] = parts[1];
        return res;
    },{});
}

//获取当前页面中的渠道号channel字符串
function getChannel(){
    var curSearch = window.location.search.substring(1);
    if(curSearch && getSearchParams(curSearch)["channel"]){
        return getSearchParams(curSearch)["channel"];
    }
}

function toutingUrl(){
	var ttUrl = 'index/getFeeTouting';
	$.ajax({
		type: "GET",
		url: api_domain + ttUrl,
		dataType: "json",
		async: true,
		success: function(data) {
			setCookie("touting", data.fee_touting);	
		}
	});
}

function getCookie(c_name){
    if (document.cookie.length>0){ 
        c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1){ 
            c_start=c_start + c_name.length+1 ;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end));
        } 
    }
    return null;
}

function setCookie(val, key){
	try {
		return localStorage.setItem(val,key);
	} catch(error) {
		return document.cookie = val + "=" + key;
	}    
}

function readCookie(name){
	try {
		return localStorage.getItem(name);
	} catch(error) {
		return getCookie(name);
	}    
}

function alertTip(txt,btnText){
	var html = '<div id="alertBox" class="alertBox"><div class="transparentBg"></div><div class="tip-content"><div class="body"><p>' + txt + '</p><button class="cache" onclick="closeAlert()">' + btnText + '</button></div></div></div>'
	$('body').append(html);
}

function alertBox(txt,btnText,callback){
	var html = '<div id="alertBox" class="alertBox"><div class="transparentBg"></div><div class="tip-content"><div class="body"><p>' + txt + '</p><button id="todosomething" class="cache">' + btnText + '</button></div></div></div>'
	$('body').append(html);
	todo(callback);
}

function alertConfirm(txt,btnText,callback){
	var html = '<div id="alertBox" class="alertBox"><div class="transparentBg"></div><div class="tip-content"><div class="body confirm"><p>' + txt + '</p><button id="todosomething" class="cache">' + btnText + '</button><button onclick="closeAlert()" class="cache">取消</button></div></div></div>'
	$('body').append(html);
	todo(callback);
}

function alertTouting(money,callback){
	var html = '<div id="alertTouting" class="alertBox"><div class="transparentBg"></div><div class="tip-content"><div class="body"><p>确定花费' + money + '元宝偷听此回答？</p><div class="buttons"><a onclick="closeAlertTouting()">取消</a><a id="giveMoney">确定</a></div></div></div></div>'
	$('body').append(html);
	fufei(callback);
}

function alertLoading(){
	var html = '<div id="loading" class="alertBox loading"><div class="transparentBg"></div><div class="tip-content"><img src="../resources/images/loading.gif" alt=""><p>正在加载...</p></div></div>';
	$('body').append(html);
}

function moneyBz(){
	var url = window.location.href;
	url = url.substr(url.length-10, url.length);
	if (url == 'index.html') {
		var html = '<div id="alertBox" class="alertBox post-question9" style="display:block;"><div class="transparentBg"></div><div class="tip-content"><div class="body"><i class="i-shibai"></i><h2>偷听失败</h2><p>您目前的金币不足，</p><p>是否前往充值？</p><div class="buttons"><a onclick="closeAlert()">取消</a><a href="personal/recharge.html">充值</a></div></div></div></div>';
	} else {
		var html = '<div id="alertBox" class="alertBox post-question9" style="display:block;"><div class="transparentBg"></div><div class="tip-content"><div class="body"><i class="i-shibai"></i><h2>偷听失败</h2><p>您目前的金币不足，</p><p>是否前往充值？</p><div class="buttons"><a onclick="closeAlert()">取消</a><a href="../personal/recharge.html">充值</a></div></div></div></div>';
	}
	$('body').append(html);
}

var todo = function(callback) {
	$("#todosomething").click(function(){
		$("#alertBox").remove();
		if (typeof (callback) == 'function') {  
            callback();  
        } 
	})
}

function closeAlert(){
	$("#alertBox").remove();
}

function closeAlertTouting(){
	$("#alertTouting").remove();
}

var fufei = function(callback) {
	$("#giveMoney").click(function(){
		$("#alertTouting").remove();
		if (typeof (callback) == 'function') {  
            callback();  
        } 
	})
}

$(document).on("click", "a", function(){
	$(".audioBtn").each(function(){
		$(this)[0].pause();
		$(this).next(".audio").removeClass("play");
	})
})

function ifLogin(){
	var loginToken = readCookie("loginToken");
	if (loginToken == '' || loginToken == null || loginToken == undefined) {
		alertConfirm("未登录或登录超时！", "重新登录", function(){
			localStorage.removeItem("loginToken");
			localStorage.removeItem("userId");	
			var url = window.location.href;
			url = url.substr(url.length-10, url.length);
			if (url == 'index.html') {
				window.location.href = "login/login.html";
			} else {				
				window.location.href = "../login/login.html";
			}
		})
		return false;
	} else {
		return true;
	}
}

//音频播放与暂停
$(function(){
	$(document).on('click', ".audio", function(){
		var thisAudio = $(this);
		var audio = $(this).prev(".audioBtn")[0];
		var audioArray = $(".audioBtn");			
		if (thisAudio.hasClass('notTouting')) {
			return;
		}
		if (audio != null) {
			if (audio.paused) {
				audioArray.each(function(){
					$(this)[0].pause();
					$(this).next(".audio").removeClass("play");
				})	
				if ($(this).hasClass("touting")) {
					var askId = $(this).attr("data-id");
					var channel = readCookie("channel");
					var type = ifLogin();
					if (type == true) {
						var touting = readCookie("touting");
						alertTouting(touting, function(){	
							var toutingUrl = api_domain + 'user/touting';
							var loginToken = readCookie("loginToken");
							var userId = readCookie("userId");
							var toutingData = {
								"access_token": loginToken,
								"uid": userId,
								"ask_id": askId,
								"channel":channel
							};
							alertLoading();
							$.ajax({
								type: "POST",
								url: toutingUrl,
								dataType: "json",
								contentType: "application/json",
								data: JSON.stringify(toutingData),
								async: true,
								success: function(data) {
									if (data["status"] == 102) {
										alertConfirm("未登录或登录超时！", "重新登录", function(){
											localStorage.removeItem("loginToken");
											localStorage.removeItem("userId");						
											window.location.href = "../login/login.html";
										})
										$("#loading").remove();
										return;
									}
									if (data["status"] == 104) {					
										moneyBz();
										$("#loading").remove();
										return;
									}
									audio.src = audioUrlLength(data.data.answer);
									audio.play();
									$("#loading").remove();
									thisAudio.addClass('play');
									thisAudio.removeClass('touting');
									thisAudio.text("点击播放").removeClass('eavesdropping');
									var num = thisAudio.parents("li").children(".foot").children(".listen-num").html();
									num = parseInt(num.substr(0,num.length-4)) + 1;
									thisAudio.parents("li").children(".foot").children(".listen-num").html(num+"人已偷听");
								},
								error: function(data) {
									$("#loading").remove();		
									alertTip(data.msg, "确定");
								}
							});
						})							
					}							
				} else {
					audio.play();
					thisAudio.addClass('play');
				}					  
			} else {
				audio.pause();
				$(".audio").removeClass('play');
			}
			audio.addEventListener('ended', function () {  
				thisAudio.removeClass('play');
			})
		} 
	})
})

//音频路径截取
function audioUrlLength(url){
	return url.substr(1,url.length-1);
}

function images(imgString){
	if (imgString != '') {
		var html = '';
		var array = imgString.split(",");
		for (var i = 0; i < array.length; i++) {
			var img = '<p><img src="' + img_url + array[i] + '"></p>';
			html += img;
		}
		return html;
	}
}

//时间戳转换
function getLocalTime(nS) {       
    return  new Date(parseInt(nS) * 1000).Format("yyyy-MM-dd hh:mm");    
}       
Date.prototype.Format = function (fmt) {  
    var o = {  
        "M+": this.getMonth() + 1,   
        "d+": this.getDate(),  
        "h+": this.getHours(),  
        "m+": this.getMinutes(),   
        "s+": this.getSeconds(),  
        "q+": Math.floor((this.getMonth() + 3) / 3),  
        "S": this.getMilliseconds()  
    };  
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));  
    for (var k in o)  
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));  
    return fmt;  
}

function getDateDiff(dateTimeStamp){
	var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var halfamonth = day * 15;
	var month = day * 30;
	var now = parseInt((new Date()).valueOf());
	var diffValue = dateTimeStamp * 1000 - now;
	if(diffValue < 0){return;}
	var monthC =diffValue/month;
	var weekC =diffValue/(7*day);
	var dayC =diffValue/day;
	var hourC =diffValue/hour;
	var minC =diffValue/minute;
	if(monthC>=1){
		result="" + parseInt(monthC) + "月后";
	}
	else if(weekC>=1){
		result="" + parseInt(weekC) + "周后";
	}
	else if(dayC>=1){
		result=""+ parseInt(dayC) +"天后";
	}
	else if(hourC>=1){
		result=""+ parseInt(hourC) +"小时后";
	}
	else if(minC>=1){
		result=""+ parseInt(minC) +"分钟后";
	}else
	result="即将";
	return result;
}

function starNum(num) {
	var html = '';
	if (num == 5) {
		html = '<span class="true"></span><span class="true"></span><span class="true"></span><span class="true"></span><span class="true"></span>';	
	}
	if (num == 4) {
		html = '<span class="true"></span><span class="true"></span><span class="true"></span><span class="true"></span><span></span>';	
	}
	if (num == 3) {
		html = '<span class="true"></span><span class="true"></span><span class="true"></span><span></span><span></span>';	
	}
	if (num == 2) {
		html = '<span class="true"></span><span class="true"></span><span></span><span></span><span></span>';	
	}
	if (num == 1) {
		html = '<span class="true"></span><span></span><span></span><span></span><span></span>';	
	}
	if (num == 0) {
		html = '<span></span><span></span><span></span><span></span><span></span>';	
	}
	if (num > 0 && num < 1) {
		html = '<span class="ban"></span><span></span><span></span><span></span><span></span>';	
	}
	if (num > 1 && num < 2) {
		html = '<span class="true"></span><span class="ban"></span><span></span><span></span><span></span>';	
	}
	if (num > 2 && num < 3) {
		html = '<span class="true"></span><span class="true"></span><span class="ban"></span><span></span><span></span>';	
	}
	if (num > 3 && num < 4) {
		html = '<span class="true"></span><span class="true"></span><span class="true"></span><span class="ban"></span><span></span>';	
	}
	if (num > 4 && num < 5) {
		html = '<span class="true"></span><span class="true"></span><span class="true"></span><span class="true"></span><span class="ban"></span>';	
	}
	if (num == null) {
		html = null;
	} else {
		html += '<label>' + num + '星</label>';
	}	
	return html;
}

var wait=90;
var t = null;
function time() {
	var btn = $("#gainCode");
    if (wait == 0) {
    	btn.removeClass("disabled");         
        btn.html("获取验证码");
        wait = 90;
    } else {
    	btn.addClass('disabled');
        btn.html("重新发送(" + wait + ")");
        wait--;
        t = setTimeout(function() {
            time();
        },
        1000)
    }
}

function clearTime() {
    if (t != null) {
        clearTimeout(t);
    }
    var btn = $("#gainCode");
    btn.removeClass("disabled");
    btn.html("获取验证码");
    wait = 0;
}

$.fn.toggle = function( fn, fn2 ) {
	var args = arguments,guid = fn.guid || $.guid++,i=0,
	toggle = function( event ) {
	  var lastToggle = ( $._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
	  $._data( this, "lastToggle" + fn.guid, lastToggle + 1 );
	  event.preventDefault();
	  return args[ lastToggle ].apply( this, arguments ) || false;
	};
	toggle.guid = guid;
	while ( i < args.length ) {
	  args[ i++ ].guid = guid;
	}
	return this.click( toggle );
};

//公告滚动效果
function scrollTip(){
	var item = $("#noticeWarp p");
	var tip_height = item.height();
	if (item.length > 1) {
		new Scroll('noticeWarp', tip_height, 5);
	} else{
		return false;
	}		
}
//类创建函数
var Class={
    create:function(){
        return function(){
            this.initialize.apply(this,arguments);
        }
    }
}
//对象属性方法扩展
Function.prototype.bind=function(object){
    var method=this;
    return function(){
        method.apply(object,arguments);
    }
}
var Scroll=Class.create();
Scroll.prototype={
    //第一个参数定义要滚动的区域,第二个参数定义每次滚动的高度
    initialize:function(element,height,delay){
        this.element=document.getElementById(element);
        this.element.innerHTML+=this.element.innerHTML;
        this.height=height;
        this.delay=delay*1000;
        this.maxHeight=this.element.scrollHeight/2;
        this.counter=0;
        this.scroll();
        this.timer="";
        //this.element.onmouseover=this.stop.bind(this);
        this.element.onmouseout=function(){this.timer=setTimeout(this.scroll.bind(this),1000);}.bind(this);
    },
    scroll:function(){
        if(this.element.scrollTop<this.maxHeight){
            this.element.scrollTop++;
            this.counter++;
        }else{
            this.element.scrollTop=0;
            this.counter=0;
        }
         
        if(this.counter<this.height){
            this.timer=setTimeout(this.scroll.bind(this),5);
        }else{
            this.counter=0;
            this.timer=setTimeout(this.scroll.bind(this),this.delay);
        }
    },
    stop:function(){
        clearTimeout(this.timer);
    }
}


