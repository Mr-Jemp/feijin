/*个人中心-账户信息*/
$(function(){

	var submitBtn = $("#submit");

	$(".input-text").bind('input', function(){
		newName = $("#newName").val();
		var res = newName.replace(/(^s*)|(s*$)/g, "").length;
		if (res != 0 && res >= 5 && res <= 24) {
			submitBtn.removeClass('disabled');
		}		
		else {
			submitBtn.addClass('disabled');
		}
	})

	submitBtn.click(function(){
		var loginToken = readCookie("loginToken");
		if (!$(this).hasClass("disabled")) {
			Newname = $("#Newname").val();
			var url = 'user/setProfile';
			var data = {
				"access_token": loginToken,
				"nickname": newName
			}
			wap.post(url, data, function(data){
				alertBox("修改成功","确定",function(){
					window.location.href = "info.html";
				});					
			})
		}
	})
})