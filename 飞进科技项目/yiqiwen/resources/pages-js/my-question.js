/*个人中心-我的问题my-question*/
$(function(){

	var loginToken = readCookie("loginToken");
	var userId = readCookie("userId");

	var vm = null;
	var page = 1;
	var url = 'user/myAsks?p=' + page;
	var data = {
		"access_token": loginToken,
		"user_id": userId
	}
	wap.post(url, data, function(data){
		vm = new Vue({
			el: '#questionList',
			data: {
				datas: data.data
			}
		});
		setData(data.data);
	});

	var dropload = $('.content').dropload({
        scrollArea : window,
        loadDownFn : function(me){
        	page++;
			var url = 'user/myAsks?p=' + page;
			wap.post(url, data, function(data){
				if (data.data.length > 0) {
					setData(data.data);
				} else {
					me.lock();
                    me.setHasData(false);
        		} 
               	setTimeout(function(){vm.datas = vm.datas.concat(data.data);},200);   			
        		me.resetload();
			});
		}
	});

	function setData(data){
		for(var i=0;i<data.length;i++){
			Vue.set(data[i], 'ask_time', getLocalTime(data[i].ask_time));
			Vue.set(data[i], 'ask_money', parseInt(data[i].ask_money));
		}
	}
})