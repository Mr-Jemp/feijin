var api_domain = "http://localhost/api/";

//注册
var registerApi = api_domain + "security/register"

//获取验证码
var codeApi = api_domain + "mobile/code";

//登录
var loginApi = api_domain + "security/login";

//首页
var homeApi = api_domain + "home/";

//退出登录
var logoutApi = api_domain + "security/logout";

/**
 * post请求
 * @param {Object} requestUrl 请求地址
 * @param {Object} param 请求参数
 * @param {Object} callback 成功回调函数
 */
function post(requestUrl, param, callback) {
	$.ajax({
		type: "POST",
		url: requestUrl,
		dataType: "json",
		contentType: "application/json",
		data: JSON.stringify(param),
		async: true,
		success: function(data) {
			callback(data);
		},
		error: function() {
			toast("网络连接失败，请重试");
		}
	});
}

/**
 * get请求
 * @param {Object} requestUrl 请求地址
 * @param {Object} callback 成功回调函数
 */
function get(requestUrl, callback) {
	$.ajax({
		type: "GET",
		url: requestUrl,
		dataType: "json",
		async: true,
		success: function(data) {
			callback(data);
		},
		error: function() {
			toast("网络连接失败，请重试");
		}
	});
}

/**
 * 弹出通知框
 * @param {Object} msg  显示的文本内容
 * @param {Object} time  显示的时间（可选）
 */
function toast(msg, time) {
	//显示之前去掉页面上所有的，或者正在显示的toast
	$(".toast").remove();
	$("body").append("<div class='toast' style='minWidth: 100px; maxWidth: 600px; margin: 0 auto; padding: 10px 40px; borderRadius: 6px; backgroundColor: rgba(0, 0, 0, 0.8); color: #fff; fontSize: 14px; textAlign: center; lineHeight: 20px; position: fixed; top: 86% ; left: 50% ; transform: translateX(-50%); zIndex: 999;'>" + msg + "</div>");
	if(!time) {
		time = 2000;
	}
	setTimeout(function() {
		$(".toast").remove();
	}, time);
}