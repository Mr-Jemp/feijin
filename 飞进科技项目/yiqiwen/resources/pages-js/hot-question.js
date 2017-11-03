/*易起问-热门问题*/

$(function(){

	var vm = null;
	var page = 1;
	var url;
	var loginToken = readCookie("loginToken");
	url = 'index/hot?p=' + page + '?access_token=' + loginToken;
	wap.get(url, function(data){
		vm = new Vue({
			el: '#answerList',
			data: {
				datas: data.data
			}
		});
		setData(data);
	})

	$(".nav-item").click(function(){
		dropload.unlock();
        dropload.setHasData(true);
		dropload.resetload();
		page = 1;
		if (this.id == "hotQuestion") {
			page = 1;
			url = 'index/hot?p=' + page + '?access_token=' + loginToken;
			$("#newQuestion").removeClass('active');
		}
		if (this.id == "newQuestion") {
			page = 1;
			url = 'index/news?p=' + page + '?access_token=' + loginToken;
			$("#hotQuestion").removeClass('active');
		}
		$(this).addClass('active');
		wap.get(url, function(data){
			data = setData(data);
			Vue.nextTick(function () {
				vm.datas = data.data;
			})
		})
	})

	var dropload = $('.content').dropload({
        scrollArea : window,
        loadDownFn : function(me){
        	page++;
        	if ($("#hotQuestion").hasClass('active')) {
        		url = 'index/hot?p=' + page + '?access_token=' + loginToken;
        	} else {
        		url = 'index/news?p=' + page + '?access_token=' + loginToken;
        	}
        	wap.get(url, function(data){
        		if (data.data.length > 0) {
        			setData(data);
					setTimeout(function(){vm.datas = vm.datas.concat(data.data);},200); 
        		} else {
                    me.lock();
                    me.setHasData(false);
        		}    			
        		me.resetload();
			});
        }
    });

	function setData(data){
		for(var i=0;i<data.data.length;i++){
			Vue.set(data.data[i], 'ask_time', getLocalTime(data.data[i].ask_time));
			if (data.data[i].answer != '') {
				Vue.set(data.data[i], 'answer', audioUrlLength(data.data[i].answer));
			}				
			if (data.data[i].image != '') {
				Vue.set(data.data[i], 'image', images(data.data[i].image));
			}
			var touting = readCookie("touting");
			Vue.set(data.data[i], "jiage", touting);
		};
		return data;
	}
		
})