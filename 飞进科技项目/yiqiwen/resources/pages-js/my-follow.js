
/*个人中心-my-follow页面*/
$(function(){

	var loginToken = readCookie("loginToken");
	var userId = readCookie("userId");

	var vm = null;
	var page = 1;
	var url = 'user/myFollows?p=' + page;
	var data = {
		"access_token": loginToken,
		"user_id": userId
	}
	wap.post(url, data, function(data){
		vm = new Vue({
			el: '#followList',
			data: {
				datas: data
			}
		});
	});

	$('#followList').dropload({
        scrollArea : window,
        loadDownFn : function(me){
        	page++;
			var url = 'user/myFollows?p=' + page;
			wap.post(url, data, function(data){
				if (data.data.length > 0) {
					return;
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