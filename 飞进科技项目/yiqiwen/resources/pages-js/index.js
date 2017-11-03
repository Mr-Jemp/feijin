/*首页index*/
$(function () {

	//检测channel判断并保存到本地
	(function () {
		var curUrl = window.location.href;
		var isFlag = curUrl.indexOf('channel', 0);
		if (isFlag != -1) {
			var channel = getChannel();
			setCookie("channel", channel);
		}
	})();

	//toutingUrl();
	var touting = readCookie("touting");

	var vm1 = null;
	var cateUrl = 'index/indexCates';
	wap.get(cateUrl, function (data) {
		vm1 = new Vue({
			el: '#nav',
			data: {
				data: data
			}
		});
	})

	var vm2 = null;
	var loginToken = readCookie("loginToken");
	var indexUrl = 'index/index?access_token=' + loginToken;
	wap.get(indexUrl, function (data) {
		vm2 = new Vue({
			el: "#answerlist",
			data: data
		});
		setData(data);
	})

	function setData(data) {
		for (var i = 0; i < data.limits.length; i++) {
			Vue.set(data.limits[i], 'answer_time', getLocalTime(data.limits[i].answer_time));
			Vue.set(data.limits[i], 'answer', audioUrlLength(data.limits[i].answer));
			Vue.set(data.limits[i], 'limit_time', getDateDiff(data.limits[i].limit_time));
			if (data.limits[i].image != '') {
				Vue.set(data.limits[i], 'image', images(data.limits[i].image));
			}
		}
		for (var j = 0; j < data.hots.length; j++) {
			Vue.set(data.hots[j], 'answer_time', getLocalTime(data.hots[j].answer_time));
			Vue.set(data.hots[j], 'answer', audioUrlLength(data.hots[j].answer));
			if (data.hots[j].image != '') {
				Vue.set(data.hots[j], 'image', images(data.hots[j].image));
			}
			Vue.set(data.hots[j], "jiage", touting);
		}
		return data;
	}

	var vm3 = null;
	var bannerUrl = 'index/banner';
	wap.get(bannerUrl, function (data) {
		vm3 = new Vue({
			el: "#bannerList",
			data: {
				data: data
			}
		})
		setTimeout(bannerSlide(), 500);
	})

	function bannerSlide() {
		new Swiper('.swiper-container', {
			loop: true,
			pagination: '.swiper-pagination-banner',
			paginationClickable: true,
			preloadImages: false,
			speed: 300,
			autoplay: 3000
		});
	}

	var vm4 = null;
	var noticeUrl = 'index/notice';
	wap.get(noticeUrl, function (data) {
		vm4 = new Vue({
			el: "#noticeList",
			data: {
				data: data
			}
		})
	})
	setTimeout(scrollTip, 5000);
})

/*window.onbeforeunload = function(){
	window.close();
}*/