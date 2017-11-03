/*个人中心-手机绑定*/
$(function(){

	var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
	var phone,vailcode,token;
	wap.get('login/tokenX', function(data){
		token = data.token;
	})

	var submitBtn = $("#submit");

	$(".input-text").bind('keyup', function(){
		phone = $("#phone").val();
		vailcode = $("#vailcode").val();
		if (phone.replace(/(^s*)|(s*$)/g, "").length != 0 && vailcode.replace(/(^s*)|(s*$)/g, "").length != 0) {
			submitBtn.removeClass('disabled');
		}
		else {
			submitBtn.addClass('disabled');
		}
	})

	$("#gainCode").click(function(){
		phone = $("#phone").val();
		if (phone == '' || phone.length == 0) {
			alertBox("请输入手机号","确定",function(){
				$("#phone").focus();
			});
			return false;
		}
		else if (phone.length < 11) {
			alertBox("请输入正确的手机号","确定",function(){
				$("#phone").focus();
			});
			return false;
		}
		else if (!myreg.test(phone)) {
			alertTip("请输入正确的手机号码","确定");
			return false;
		}
		else if (!$(this).hasClass("disabled")) {
			phone = $("#phone").val();
			var codeUrl = 'login/sendPhoneCode';
			var data = {
				"token": token,
				"phone": phone
			}
			wap.post(codeUrl, data, function(){
				time();
				alertTip("验证码已发送","确定");
			})
		} else {
			return false;
		}
	})
		
	submitBtn.click(function(){
		if (!$(this).hasClass("disabled")) {
			vailcode = $("#vailcode").val();
			phone = $("#phone").val();
			var loginToken = readCookie("loginToken");
			var phoneUrl = 'login/bindPhone';
			var data = {
				"access_token": loginToken,
				"tokenx": token,
				"phone": phone,
				"code": vailcode
			}		
			wap.post(phoneUrl, data, function(data){
				alertBox("您的手机已成功绑定易起问！","确定",function(){
					window.location.href = "info.html";	
				});
			})
		}
	})			
})