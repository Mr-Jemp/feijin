/*个人中心-修改密码*/
$(function(){
	var password,newPassword;
	var submitBtn = $("#submit");
	$(".input-text").bind('keyup', function(){
		password = $("#password").val();
		newPassword = $("#newPassword").val();
		if (password.replace(/(^s*)|(s*$)/g, "").length != 0 && newPassword.replace(/(^s*)|(s*$)/g, "").length != 0) {
			submitBtn.removeClass('disabled');
		}
		else {
			submitBtn.addClass('disabled');
		}
	})
		
	submitBtn.click(function(){
		if (!$(this).hasClass("disabled")) {
			password = $("#password").val();
			newPassword = $("#newPassword").val();
			var loginToken = readCookie("loginToken");
			var url = 'user/changePassword';
			var data = {
				"access_token": loginToken,
				"password": password,
				"confirm_password": newPassword
			}
			wap.post(url, data, function(data){
				alertBox("修改成功","确定",function(){
					window.location.href = "info.html";
				});								
			})
		}
	})			
})