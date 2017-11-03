/*登录页面js*/
$(function() {
	$(document).on("focus", "input", function() {
		$(".header").addClass("pos-rel");
		$(".fot-menu").addClass("pos-rel");
	}).on("focusout", "input", function() {
		$(".fot-menu").removeClass("pos-rel");
		$(".header").removeClass("pos-rel");
	});

	var token, username, vailcode, password;
	var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	var tokenurl = 'login/tokenX';
	wap.get(tokenurl, function(data) {
		token = data.token;
	})

	$("#register").click(function() {
		if ($(this).hasClass('active')) {
			var channel = readCookie("channel");
			username = $("#username2").val();
			vailcode = $("#vailcode").val();
			password = $("#password2").val();
			if (username.replace(/(^s*)|(s*$)/g, "").length == 0) {
				alertTip("请输入手机号码", "确定");
				return false;
			} else if (username.length < 11) {
				alertTip("请输入正确的手机号码", "确定");
				return false;
			} else if (!myreg.test(username)) {
				alertTip("请输入正确的手机号码", "确定");
				return false;
			} else if (vailcode.replace(/(^s*)|(s*$)/g, "").length == 0) {
				alertTip("请输入验证码", "确定");
				return false;
			} else if (password.replace(/(^s*)|(s*$)/g, "").length == 0) {
				alertTip("请输入密码", "确定");
				return false;
			} else if (ifCheck() == false) {
				alertTip("请勾选用户协议！", "确定");
				return false;
			}

			var registerUrl = 'login/register';
			var registerData = {
				"token": token,
				"channel": channel,
				"phone": username,
				"code": vailcode,
				"password": password
			}
			wap.post(registerUrl, registerData, function() {
				alertBox("注册成功", "前往登录", function() {
					$("#username1").val(username);
					haveUser();
				});
			})
		} else {
			$("#loginForm").hide();
			$("#registerForm").show();
			$(this).addClass("active").html("确认注册");
			$("#login").hide();
			$(".header-title").html("注册");
			$("#register-password").hide();
			$("#tologin").show();
		}

	})

	$("#login").click(function() {
		username = $("#username1").val();
		password = $("#password1").val();
		if (username.replace(/(^s*)|(s*$)/g, "").length == 0) {
			alertTip("请输入手机号码", "确定");
			return false;
		} else if (username.length < 11) {
			alertTip("请输入正确的手机号码", "确定");
			return false;
		} else if (!myreg.test(username)) {
			alertTip("请输入正确的手机号码", "确定");
			return false;
		} else if (password.replace(/(^s*)|(s*$)/g, "").length == 0) {
			alertTip("请输入密码", "确定");
			return false;
		} else if (ifCheck() == false) {
			alertTip("请勾选用户协议！", "确定");
			return false;
		}

		var loginUrl = 'login/login';
		var loginData = {
			"account": username,
			"password": password
		}
		wap.post(loginUrl, loginData, function(data) {
			setCookie("loginToken", data.access_token);
			setCookie("userId", data.user.user_id);
			console.log(data.user.is_first_consume);
			setCookie("firstQuestion", data.user.is_first_consume);
			window.location.href = "../index.html";
		})
	})

	$("#gainCode").click(function() {
		username = $("#username2").val();
		if (username == '' || username.length == 0) {
			alertBox("请输入手机号", "确定", function() {
				$("#username").focus();
			});
			return false;
		} else if (username.length < 11) {
			alertBox("请输入正确的手机号", "确定", function() {
				$("#username").focus();
			});
			return false;
		} else if (!myreg.test(username)) {
			alertTip("请输入正确的手机号码", "确定");
			return false;
		} else if (!$(this).hasClass("disabled")) {
			var codeUrl = 'login/sendPhoneCode';
			var data = {
				"token": token,
				"phone": username
			}
			wap.post(codeUrl, data, function(data) {
				time();
				alertTip("验证码已发送", "确定");
			})
		} else {
			return false;
		}
	})

	//已有账号
	$("#tologin").click(function() {
		haveUser();
	})

	function haveUser() {
		$("#registerForm").hide();
		$("#loginForm").show();
		$("#login").show();
		$("#register").removeClass("active").html("注册");
		$("#register-password").show();
		$("#tologin").hide();
		$(".header-title").html("登录");
	}

	function ifCheck() {
		if ($("#check").is(":checked")) {
			return true;
		} else {
			return false;
		}
	}
})