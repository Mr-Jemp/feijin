/*个人中心-首页*/
$(function(){

	if (readCookie("loginToken") != true) {
		$("#transparent").hide();
		$(".login-btn").hide();
		$(".name").removeClass('hide');
	} else {
		window.location.href = "../login/login.html";
	}

	var vm = null;
	var loginToken = readCookie("loginToken");
	var infoUrl = 'user/profile?access_token=' + loginToken;
	wap.get(infoUrl, function(data){
		vm = new Vue({
			el: '#info',
			data: data
		})
		$("#hide").removeClass('hide');
	})

	$("#logout").click(function(){
		var loginToken = readCookie("loginToken");
		var logoutUrl = 'login/logout';
		var data = {
			"access_token": loginToken
		}
		wap.post(logoutUrl, data, function(data){
			if (data.logout == true) {
				localStorage.removeItem("loginToken");
				localStorage.removeItem("userId");
				window.location.href = "../login/login.html";
			}			
		},function(){
			alertConfirm("未登录或登录超时！", "重新登录", function(){
				localStorage.removeItem("loginToken");
				localStorage.removeItem("userId");						
				window.location.href = "../login/login.html";
			})
		})
	})		

	$(document).on('click', '.cache', function(){
		$("#hide").removeClass('hide');
		$("#info").css("cssText","display:block!important");
		$(".portrait").hide();
		$("#transparent").show();
		$(".login-btn").show();
		$(".name").addClass('hide');
		$("#logout").hide();
	})	

	$("#transparent").click(function(){
		alertTip("请先登录！", "确定");
	})
})