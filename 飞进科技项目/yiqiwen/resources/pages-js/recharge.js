/*个人中心-充值中心*/
$(function(){

	var vm = null;
	var loginToken = readCookie("loginToken");
	var moneyUrl = 'user/myGold';
	var data = {
		"access_token": loginToken
	}
	wap.post(moneyUrl, data, function(data){
		vm = new Vue({
			el: '#money',
			data: data
		});
	})		

	var price;
	var returnUrl;

	/*$(".input-radio").click(function(){
		alertTip("暂时只支持支付宝充值","确定");
		$(".check").removeClass('checked');
		$(this).siblings(".check").addClass('checked');
	});*/

	$(".money-item").click(function(){
		$(this).siblings(".money-item").removeClass("active");
		$(this).addClass("active");
		price = $(this).find('span').text();
	})

	$(".submit").click(function(){
		if (price != undefined) {
			var priceUrl = 'user/createPay';
			var data = {
				"access_token": loginToken,
				"price": price,
				"return_url": return_url + "personal/recharge-result.html"
			}
			wap.post(priceUrl, data, function(data){
				setCookie("orderId",data.order_id);
				window.location.href = data.url;
			})
		} else {
			alertTip("请选择充值金额", "确定");
		}				
	})
})