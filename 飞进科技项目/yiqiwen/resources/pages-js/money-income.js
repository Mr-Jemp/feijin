/*个人中心-交易记录money-income*/
$(function(){

	var vm2 = null;
	var page2 = 1;

	var loginToken = readCookie("loginToken");
	var userId = readCookie("userId");

	url = 'user/myIncome?p=' + page2;
	var data = {
		"access_token": loginToken,
		"user_id": userId
	}
	wap.post(url, data, function(data){
		vm2 = new Vue({
			el: "#incomeList",
			data: {
				datas: data.data
			}
		})
		setData2(data.data);
	})

	function setData2(data){
		for(var i=0;i<data.length;i++){
			if (data[i].create_at != null) {
				Vue.set(data[i], 'create_at', getLocalTime(data[i].create_at));
			}				
		};	
		return data;
	}

	var dropload2 = $('.content').dropload({
        scrollArea : window,
        loadDownFn : function(me){
        	page2++;
			url = 'user/myIncome?p=' + page2;
			wap.post(url, data, function(data){
				if (data.data.length > 0) {
					setData2(data);
				} else {
					me.lock();
                    me.setHasData(false);
        		} 
               	setTimeout(function(){vm2.datas = vm2.datas.concat(data.data);},200);   			
        		me.resetload();
			});
		}
	});
});