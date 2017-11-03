/*忘记密码*/
$(function(){
	var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
	var token,username,vailcode,password;
	wap.get('login/tokenX', function(data){
		token = data.token;
	})

	$("#login").click(function(){
		username = $("#username").val();
		vailcode = $("#vailcode").val();
		password = $("#password").val();
		if (username.replace(/(^s*)|(s*$)/g, "").length == 0) {
			alertTip("请输入手机号码","确定");
			return false;
		}
		else if (username.length < 11) {
			alertTip("请输入正确的手机号码","确定");
			return false;	
		}
		else if (!myreg.test(username)) {
			alertTip("请输入正确的手机号码","确定");
			return false;
		}
		else if (vailcode.replace(/(^s*)|(s*$)/g, "").length == 0) {
			alertTip("请输入验证码","确定");
			return false;
		}
		else if (password.replace(/(^s*)|(s*$)/g, "").length == 0) {
			alertTip("请输入新密码","确定");
			return false;
		}

		var registerUrl = 'login/forgot';
		var data = {
			"token": token,
			"phone": username,
			"code": vailcode,
			"password": password
		}
		wap.post(registerUrl, data, function(){
			alertBox("找回密码成功","前往登录",function(){
				window.location.href = "login.html";
			});
		})
	})


	$("#gainCode").click(function(){
		username = $("#username").val();
		if (username == '' || username.length == 0) {
			alertBox("请输入手机号","确定",function(){
				$("#username").focus();
			});
			return false;
		}
		if (username.length < 11) {
			alertBox("请输入正确的手机号","确定",function(){
				$("#username").focus();
			});
			return false;
		}
		else if (!myreg.test(username)) {
			alertTip("请输入正确的手机号码","确定");
			return false;
		}
		if (!$(this).hasClass("disabled")) {
			var codeUrl = 'login/sendPhoneCode';
			var data = {
				"token": token,
				"phone": username
			}
			wap.post(codeUrl, data, function(){
				time();
				alertTip("验证码已发送","确定"); 
			})
		} else {
			return false;
		}				
	})
})