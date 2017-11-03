/*易起问-限时免费*/
$(function(){

	var vm = null;
	var page = 1;
	var url = 'index/limits?p=' + page;
	wap.get(url, function(data){
		vm = new Vue({
			el: "#questionList",
			data: {
				datas: data.data
			}
		})
		setData(data.data);
	})

	var dropload = $('.content').dropload({
	    scrollArea : window,
	    loadDownFn : function(me){
	    	page++;
			var url = 'index/limits?p=' + page;
	    	wap.get(url, function(data){
	    		if (data.data.length > 0) {
	    			setData(data.data);
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
		for(var i=0;i<data.length;i++){
			Vue.set(data[i], 'answer_time', getLocalTime(data[i].answer_time));
			Vue.set(data[i], 'answer', audioUrlLength(data[i].answer));
			Vue.set(data[i], 'limit_time', getDateDiff(data[i].limit_time));
			if (data[i].image != '') {
				Vue.set(data[i], 'image', images(data[i].image));
			}
		}
	}
})