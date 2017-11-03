/*个人中心-充值结果*/
$(function(){

	var returnUrl = 'user/recharge';
	var loginToken = readCookie("loginToken");
	var orderId = readCookie("orderId");
	var returnData = {
		"access_token": loginToken,
		"order_no": orderId
	}
	$.ajax({
		type: "POST",
		url: api_domain + returnUrl,
		dataType: "json",
		contentType: "application/json",
		data: JSON.stringify(returnData),
		async: true,
		success: function(data) {
			if (data["status"] != 1) {	
				$("#error").show();
				$("#success").hide();
				return;
			} else {
				$("#success").show();
				$("#error").hide();
			}					
		},
		error: function(data) {		
			alertTip(data.msg, "确定");
		}
	});	

	/*function timeReturn(){
		setTimeout(
			window.location.href = url
		)
	}*/
})