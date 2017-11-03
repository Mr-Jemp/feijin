/*易起问  question-classfication  */
$(function() {

	var vm1 = null;
	var vm2 = null;
	var page = 1;
	var id = wap.getId(window.location.href);

	var cateUrl = 'index/indexCates';
	wap.get(cateUrl, function(data) {
		vm1 = new Vue({
			el: '#nav',
			data: {
				data: data
			}
		});
		setCur();
	})

	var loginToken = readCookie("loginToken");
	var questionUrl = 'index/listByCate?cate_id=' + id + '&p=' + page + '&access_token=' + loginToken;
	wap.get(questionUrl, function(data) {
		vm2 = new Vue({
			el: '#questionList',
			data: {
				datas: data.data
			}
		});
		setData(data.data);
	})

	var dropload = $('.content').dropload({
		scrollArea: window,
		loadDownFn: function(me) {
			page++;
			questionUrl = 'index/listByCate?cate_id=' + id + '&p=' + page + '&access_token=' + loginToken;
			wap.get(questionUrl, function(data) {
				if (data.data.length > 0) {
					setData(data.data);
					setTimeout(function() {
						vm2.datas = vm2.datas.concat(data.data);
					}, 200);
				} else {
					me.lock();
					me.setHasData(false);
				}
				me.resetload();
			});
		}
	});

	function setData(data) {
		for (var i = 0; i < data.length; i++) {
			Vue.set(data[i], 'ask_time', getLocalTime(data[i].ask_time));
			Vue.set(data[i], 'answer', audioUrlLength(data[i].answer));
			if (data[i].image != '') {
				Vue.set(data[i], 'image', images(data[i].image));
			}
			var touting = readCookie("touting");
			Vue.set(data[i], "jiage", touting);
		};
		return data;
	}

	function setCur() {
		$(".nav-item").each(function() {
			var self = $(this);
			self.removeClass('active');
			var navId = $(this).attr('data-id');
			if (navId != '' || navId.length > 0) {
				if (navId == id) {
					self.addClass('active');
				}
			}

		})
	}

	var vm3 = null;
	var bannerUrl = 'index/banner';
	wap.get(bannerUrl, function(data) {
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

	$(document).on('click', '.child-item', function() {
		dropload.unlock();
		dropload.setHasData(true);
		dropload.resetload();
		page = 1;
		$(".child-item").removeClass('active');
		$(this).addClass('active');
		id = $(this).attr('data-id');
		var childUrl = 'index/listByCate?cate_id=' + id + '&p=' + page + '&access_token=' + loginToken;
		wap.get(childUrl, function(data) {
			data = setData(data.data);
			Vue.nextTick(function() {
				vm2.datas = data;
			})
		});
	})
})