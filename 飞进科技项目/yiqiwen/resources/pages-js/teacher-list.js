/*老师列表页*/
$(function(){
	var vm1 = null;
	var vm2 = null;
	var vm3 = null;
	var page = 1;
	var cateId;
	var url;
	var cateUrl = 'index/indexCates';
	
	var sort_type = "level";	//排序的类型，一开始默认是level
	var sequence = " asc";	//升序或者降序
	
	wap.get(cateUrl, function(data){
		vm1 = new Vue({
			el: '#nav',
			data: {
				data: data
			}
		});
		$(".nav-item:first").addClass('active');
		cateId = $(".nav-item:first").attr('data-id');
		if (cateId != '') {
			getList(cateId);
		}			
	})

	var noticeUrl = 'index/notice';
	wap.get(noticeUrl, function(data){
		vm2 = new Vue({
			el: "#noticeList",
			data: {
				data: data
			}
		})
	    setTimeout(scrollTip, 5000);
	})
	
	function getList(cateId){
		url = "index/teachers?cate_id=" + cateId + "&sort=level asc&p=" + page;
		wap.get(url, function(data){
			vm3 = new Vue({
				el: '#teacherList',
				data: {
					datas: data.data,
				}
			});
			setData(data.data);
		});
	}			

	var dropload = $('.content').dropload({
        scrollArea : window,
        loadDownFn : function(me){
        	page++;
			url = "index/teachers?cate_id=" + cateId + "&sort="+ sort_type + sequence +"&p=" + page;
			wap.get(url, function(data){
				if (data.data.length > 0) {
					setData(data.data);
               		setTimeout(function(){vm3.datas = vm3.datas.concat(data.data);},200); 
				} else {
					me.lock();
                    me.setHasData(false);
        		}
        		me.resetload();
			});
		}
	});

	function setData(data){
		for (var i = 0; i < data.length; i++) {
			Vue.set(data[i], 'star', starNum(data[i].star));
			Vue.set(data[i], 'ask_money', parseInt(data[i].ask_money));							
			if (data[i].skills != null) {
				var array = data[i].skills.split("，");
				var html = '';
				for (var j = 0; j < array.length; j++) {
					var span = '<span>' + array[j] + '</span>';
					html += span;
				}
				Vue.set(data[i], 'skills', html);
			}
		}
		return data;
	}

	$(document).on('click', '.nav-item', function(){
		dropload.unlock();
        dropload.setHasData(true);
		dropload.resetload();
		cateId = $(this).attr("data-id");
		console.log(cateId);
		page = 1;
		$("#level").addClass('active').siblings(".list-nav").removeClass('active');
		sort_type = "level";
		sequence = " asc";
		
		$(this).siblings(".nav-item").removeClass('active');
		$(this).addClass('active');
		//url = "index/teachers?cate_id=" + cateId + "&sort=level asc&p=" + page;	
		url = "index/teachers?cate_id=" + cateId + "&sort="+ sort_type + sequence + "&p=" + page;	
		wap.get(url, function(data){
			Vue.nextTick(function () {
				vm3.datas = data.data;
			})
			setData(data.data);
		});
	})

	$(".list-nav").click(function(){
		dropload.unlock();
        dropload.setHasData(true);
		dropload.resetload();
		var sort;
		var self = $(this);
		//sort_type = $(this).attr('id');
		sort_type = this.id;
		page = 1;	
		self.siblings(".list-nav").removeClass('active');
		self.addClass('active');
		if (this.id != 'level' && this.id != 'ask_money') {
			sort = this.id + ' desc';
			sequence = " desc";
		} else {
			if (self.hasClass('shunxu')) {
				sort = this.id + ' desc';
				self.removeClass('shunxu');
				sequence = " desc";
			} else {
				sort = this.id + " asc";
				self.addClass('shunxu');
				sequence = " asc";
			}
		}
		url = "index/teachers?cate_id=" + cateId + "&sort=" + sort +"&p=" + page;
		wap.get(url, function(data){
			Vue.nextTick(function () {
				vm3.datas = data.data;
			})
			setData(data.data);
		})
	})
});