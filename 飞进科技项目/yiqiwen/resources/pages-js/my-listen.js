/*个人中心-我的偷听my-listen*/

$(function(){

	var vm = null;
	var page = 1;
	var loginToken = readCookie("loginToken");
	var userId = readCookie("userId");

	var url = 'user/myToutings?p=' + page;
	var data = {
		"access_token": loginToken,
		"user_id": userId
	}
	wap.post(url, data, function(data){
		vm = new Vue({
			el: "#listenList",
			data: {
				datas: data.data
			}
		})
		setData(data.data);
	})

	function setData(data){
		for(var i=0;i<data.length;i++){
			Vue.set(data[i], 'created_time', getLocalTime(data[i].created_time));
			Vue.set(data[i], 'touting_money', parseInt(data[i].touting_money));
		};
		return data;
	}

	$('#listenList').dropload({
        scrollArea : window,
        loadDownFn : function(me){
        	page++;
			var url = 'user/myToutings?p=' + page;
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
})