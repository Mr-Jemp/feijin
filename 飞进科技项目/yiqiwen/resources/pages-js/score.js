/*answer-score页面*/
$(function(){

	var vm = null;
	var url = 'user/comment';
	var loginToken = readCookie("loginToken");
	var id = wap.getId(window.location.href);
	var star;

	$(".xing span").click(function(){
		$(this).siblings("span").removeClass('true');
		var self = $(this);
		self.addClass('true');
		self.prevAll("span").addClass('true');
		star = parseInt(this.id.substr(1, this.id.length));			
	})

	$(".submit").click(function(){
		if (star != undefined) {
			var data = {
				"access_token": loginToken,
				"ask_id": id,
				"star": star
			}
			wap.post(url, data, function(data){
				alertBox("评价成功！","确定",function(){
					window.location.href = "javascript:history.back()";
				})
			})
		} else {
			alertTip("您还没有评分！", "确定");
		}
	})			
})