/*个人中心-支付,money-pay*/
$(function(){

	var vm1 = null;
	var page1 = 1;

	var loginToken = readCookie("loginToken");
	var userId = readCookie("userId");

	var url = 'user/myPayment?p=' + page1;
	var data = {
		"access_token": loginToken,
		"user_id": userId
	}
	wap.post(url, data, function(data){
		vm1 = new Vue({
			el: "#payList",
			data: {
				datas: data.data
			}
		})
		setData1(data.data);
	})

	function setData1(data){
		for(var i=0;i<data.length;i++){
			Vue.set(data[i], 'created_time', getLocalTime(data[i].created_time));
		};	
		return data;
	}

	var dropload1 = $('.content').dropload({
        scrollArea : window,
        loadDownFn : function(me){
        	page1++;
			var url = 'user/myPayment?p=' + page1;
			var data = {
				"access_token": loginToken,
				"user_id": userId
			}
			wap.post(url, data, function(data){
				if (data.data.length > 0) {
					setData1(data.data);
               		setTimeout(function(){vm1.datas = vm1.datas.concat(data.data);},200);
				} else {
					me.lock();
                    me.setHasData(false);
        		}    			
        		me.resetload();
			});
		}
	});
});