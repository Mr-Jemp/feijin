/*个人中心-我的资产*/
$(function(){
	var vm = null;
	var loginToken = readCookie("loginToken");
	var url = 'user/myGold';
	var data = {
		"access_token": loginToken
	}
	wap.post(url, data, function(data){
		vm = new Vue({
			el: '#money',
			data: data
		});
	})
})