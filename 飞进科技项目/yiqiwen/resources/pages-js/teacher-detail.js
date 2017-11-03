//老师详情页
$(function(){

	var teacherId = wap.getId(window.location.href);
	var teacherAnswerUrl;
	var page = 1;
	var type;

	var vm1 = null;
	var vm2 = null;
	var loginToken = readCookie("loginToken");
	var teacherUrl = "index/teacher?user_id=" + teacherId;
	wap.get(teacherUrl, function(data){
		vm1 = new Vue({
			el: '#teacherDetail',
			data: data
		});
		Vue.set(data, 'star', starNum(data.star));
	});

	type = 1;
	teacherAnswerUrl = 'index/answersByTeacher?user_id=' + teacherId + '&type=' + type + '&p=' + page + 'access_token' + loginToken;
	wap.get(teacherAnswerUrl, function(data){
		vm2 = new Vue({
			el: '#teacherAnswerDetail',
			data: {
				datas: data.data
			}
		});
		setData(data);				
	})

	var dropload = $('.content').dropload({
        scrollArea : window,
        loadDownFn : function(me){
        	page++;
        	teacherAnswerUrl = 'index/answersByTeacher?user_id=' + teacherId + '&type=' + type + '&p=' + page + 'access_token' + loginToken;
        	wap.get(teacherAnswerUrl, function(data){
        		if (data.data.length > 0) {
        			setData(data);
					setTimeout(function(){vm2.datas = vm2.datas.concat(data.data);},200);
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
			Vue.set(data.data[i], 'answer', audioUrlLength(data.data[i].answer));
			var touting = readCookie("touting");
			Vue.set(data.data[i], "jiage", touting);
		};
		return data;
	}

	//最新、默认切换
	$(document).on('click', '.tab', function(){
		if (!$(this).hasClass('active')) {
			dropload.unlock();
	        dropload.setHasData(true);
			dropload.resetload();
			if (this.id == "newAnswer") {				
				type = 2;
				page = 1;
				$("#morenAnswer").removeClass('active');
				$(this).addClass('active');	
			}
			if (this.id == "morenAnswer") {
				type = 1;
				page = 1;
				$("#newAnswer").removeClass('active');
				$(this).addClass('active');	
			}	
			teacherAnswerUrl = 'index/answersByTeacher?user_id=' + teacherId + '&type=' + type + '&p=' + page + 'access_token' + loginToken;
			wap.get(teacherAnswerUrl, function(data){
				data = setData(data);
				Vue.nextTick(function () {
					vm2.datas = data.data;
				})
			});
		}
	})	

	$(".view-more").toggle(function(){
		$(this).prev(".autograph").addClass("height-auto");
		$(this).addClass("shouqi");
	},function(){
		$(this).prev(".autograph").removeClass("height-auto");
		$(this).removeClass("shouqi");
	});

	$(".question-btn").click(function(){
		var id = $(this).attr("data-id");
		if (ifLogin() == true) {
			window.location.href = '../answer/post-question.html?id=' + id;
		}
	})		    
})