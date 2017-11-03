/*answer-问题详情页*/
$(function(){
	var vm = null;
	var loginToken = readCookie("loginToken");
	var userId = readCookie("userId");
	var askId = wap.getId(window.location.href);
	var teacherId;

	var answerUrl = 'user/askDetail' + '?access_token=' + loginToken;
	if (userId != null && userId != '' && userId != undefined) {
		var data = {
			"access_token": loginToken,
			"user_id": userId,
			"ask_id": askId
		}
	} else {
		var data = {
			"access_token": '',
			"user_id": "0",
			"ask_id": askId
		}
	}
		
	
	wap.post(answerUrl, data, function(data){
		vm = new Vue({
			el: "#answerDetail",
			data: {
				datas: data,
				ask: data.ask,
				press: data.press,
				teachers: data.teachers,
				randAsk: data.randAsk
			}
		})
		teacherId = data.ask.answer_uid;
		setData(data);
		pressNum();
	});

	function setData(data) {
		Vue.set(data.ask, 'answer_time', getLocalTime(data.ask.answer_time));
		if (data.ask.answer != null) {
			Vue.set(data.ask, 'answer', audioUrlLength(data.ask.answer));
		}
		if (data.ask.image != '') {
			Vue.set(data.ask, 'image', images(data.ask.image));
		}
		if (data.randAsk != null) {
			Vue.set(data.randAsk, 'ask_time', getLocalTime(data.randAsk.ask_time));
			Vue.set(data.randAsk, 'answer', audioUrlLength(data.randAsk.answer));
		}
		if (data.press) {
			for(var i=0;i<data.press.length;i++){
				Vue.set(data.press[i], 'answer_time', getLocalTime(data.press[i].answer_time));
				Vue.set(data.press[i], 'media_url', audioUrlLength(data.press[i].media_url));
			}
		}				
		for(var j=0;j<data.teachers.length;j++){
			Vue.set(data.teachers[j], 'star', starNum(data.teachers[j].star));
		}
		var touting = readCookie("touting");
		Vue.set(data.ask, "jiage", touting);
		return data;
	}

	$(document).on('click', '#pressBtn', function(){
		if ($(this).hasClass('disabled')) {
			alertTip("每个问题最多追问两次！", "确定");
		} else {
			$(".answer-detail6").show();
		}
	})

	$(document).on('click', "#pressSubmit", function(){
		var text = $("#textBody").val();
		if (text != '') {
			var pressUrl = 'user/press' + '?access_token=' + loginToken;
			var pressData = {
				"access_token": loginToken,
				"uid": userId,
				"answer_uid": teacherId,
				"question": text,
				"ask_id": askId
			}
			wap.post(pressUrl, pressData, function(data){
				alertBox("追问成功！","确定", function(){
					$(".answer-detail6").hide();
					Vue.nextTick(function () {
						console.log(data.press);
						vm.press = data.press;
					})
					setData(data);
					var pressLength = parseInt($(".pressNum").length);
					if (pressLength >= 1) {
						$("#pressBtn").addClass('disabled');
					}
				})
			})
		}	
		else {
			alertTip("请输入您要追问的内容", "确定");
		}		
	})

	$(document).on('click', '#close', function(){
		$(".answer-detail6").hide();
	})

	$(document).on("click", ".ask-btn", function(){
		var id = $(this).attr("data-id");
		if (ifLogin() == true) {
			window.location.href = 'post-question.html?id=' + id;
		}
	})

	function pressNum(){
		var pressLength = parseInt($(".pressNum").length);
		if (pressLength >= 2) {
			$("#pressBtn").addClass('disabled');
		}
	}
})
