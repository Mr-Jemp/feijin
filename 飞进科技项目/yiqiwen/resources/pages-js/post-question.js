/*answer-提问*/
var images = [];
var text = $("#textBody");
$(function(){

	var curMoney;
	var askMoney;
	var type;
	
	text.bind("input", function(){
		excute();
	});

	var huancunText = readCookie("textBody");
	//var huancunImg = readCookie("userImg");
	if (huancunText != null) {
		text.html(huancunText);
		excute();
	}
	/*if (huancunImg != null) {
		var imgArr = huancunImg.split(",");
		for (var i = 0; i < imgArr.length; i++) {
			var html = '<li id="li' + i + '"><em class="close"></em><img id="img' + i + '" src="data:image/png;base64,' + imgArr[i] + '" alt=""></li>';
			//console.log(imgArr[1]);
			$("#preview").append(html);
		}
	}*/			

	var vm1 = null;
	var cateUrl = 'index/indexCates';
	wap.get(cateUrl, function(data){
		vm1 = new Vue({
			el: '#nav',
			data: {
				data: data
			}
		});
		$(".tag-item:first").addClass("active");
	})

	var vm;		
	var loginToken = readCookie("loginToken");
	var userId = readCookie("userId");
	var firstQuestion = readCookie("firstQuestion");

	//获取渠道号
	var channel = readCookie("channel");
	var teacherId = wap.getId(window.location.href);
	var teacherUrl = "index/teacher?user_id=" + teacherId;
	wap.get(teacherUrl, function(data){
		vm = new Vue({
			el: '#teacherDetail',
			data: data
		});
		Vue.set(data, 'ask_money', parseInt(data.ask_money));
		Vue.set(data, 'ask_private_money', parseInt(data.ask_private_money));
		Vue.set(data, 'star', starNum(data.star));
		if (firstQuestion == 1) {
			$("#jiage").html(data.ask_money / 2);
		} else {
			$("#submit").html('提问<span id="jiage">' + data.ask_money + '</span>元宝');
		}				
		askMoney = data.ask_money;
	});


	//发起问题
	var submit = $("#submit");
	submit.click(function(){
		var textBody = $("#textBody").val();
		if (textBody == '' || textBody.length == 0) {
			alertTip("请输入提问内容！","确定");
			return;
		}
		if (textBody.length < 5) {
			alertTip("内容至少五个字符！","确定");
			return;
		}
		submit.attr('disabled', true);
		var moneyUrl = 'user/myGold';
		var moneyData = {
			"access_token": loginToken
		}
		wap.post(moneyUrl, moneyData, function(data){
			curMoney =  data.coin;
			alertConfirm("确定提交？", "确定", function(){
				if (curMoney > askMoney) {
					var cateId = $(".tag .active").attr("data-id");
					type = $(".price.active").attr("data-type");
					if ($(".switch").hasClass('true')) {
						var public = 1;
					} else {
						var public = 0;
					}

					var postUrl = 'user/ask';

					if (images.length > 0) {
						var result = [];
						for(a=0;a<images.length;a=a+1){
							var item = "'"+(a) + "':'" + images[a] + "'";				
							result.push(item);
						}
						var json = "{"+ result.join(",") +"}";
					} else {
						images = '';
					}
					alertLoading();

					var data = {
						"access_token": loginToken,
						"uid": userId,
						"type": type,
						"answer_uid": teacherId,
						"ask": textBody,
						"cate_id": cateId,
						"channel":channel,
						"is_public": public,
						"images": eval('(' + json + ')')
					}
					wap.post(postUrl, data, function(data){
						$("#loading").remove();
						submit.attr('disabled', false);
			    		setCookie("firstQuestion","2");
			    		localStorage.removeItem("textBody");
			    		//localStorage.removeItem("userImg");
						window.location.href = "success.html";					
					},function(){
						$("#loading").remove();
						submit.attr('disabled', false);
						localStorage.removeItem("textBody");
			    		//localStorage.removeItem("userImg");
					})
				} else {
					$(".post-question9").show();
				    setCookie("textBody",textBody);
				    //setCookie("userImg",images);
				}
			})
			submit.attr('disabled', false);
		},function(){
			submit.attr('disabled', false);
		})				
	})

	$(".cacheAlert").click(function(){
		$(".post-question9").hide();
		submit.attr('disabled', false);
	})

	$(".switch").click(function(){
		var self = $(this);
		if (!self.hasClass("true")) {
			self.children('i').stop().animate({'left': '0.644rem'},{duration: 300});				
			self.addClass("true");
		} else {
			self.children('i').stop().animate({'left': '0.062rem'},{duration: 300});
			self.removeClass("true");
		}
	})

	$(document).on('click', '.tag-item', function(){
		$(this).siblings('span').removeClass('active');
		$(this).addClass('active');
	})

	$(document).on('click', '.price', function(){
		$(this).siblings(".price").removeClass('active');
		$(this).addClass('active');
		askMoney = this.id;
		if (firstQuestion == 1) {
			$("#jiage").html(askMoney / 2);
		} else {
			$("#jiage").html(askMoney);
		}
	})

	$(".view-more").toggle(function(){
		$(this).prev(".autograph").addClass("height-auto");
		//$(this).prev(".autograph").stop().animate({height: "auto"},{duration: 500});
		$(this).addClass("shouqi");
	},function(){
		$(this).prev(".autograph").removeClass("height-auto");
		$(this).removeClass("shouqi");
	});

	$("#preview").on('click', '.close', function(){
		$(this).parents("li").remove();
	})
})

function excute(){
    var num = text.val().length;
    if(num > 200){
        text.html(text.val().substring(0,200));
        po_Last_Div(text);
        num = 200;
    }

    var rest = 200 - num;
    $("#rest").html(rest);
    if (rest <= 0) {
    	alertTip("文本最多输入200个字！","确定");
    	return;
    }
}

function po_Last_Div(obj) {
    if (window.getSelection) {
        obj.focus();
        var range = window.getSelection();
        //range.selectAllChildren(obj);
        range.collapseToEnd();
    }
    else if (document.selection) {
        var range = document.selection.createRange();
        range.moveToElementText(obj);
        range.collapse(false);
        range.select();
    }
}

var imgItem = 0;
var imageUrl;
var imagesItem;
function setImagePreview(file) {
    var preview, localImag, file_head = document.getElementById("file_head"),  
    picture = file_head.value;  
    var imgLength = $("#preview").children("li").length;
    if (imgLength == 3) {
    	alertTip("最多上传三张图片","确定");
    	return;
    }
    if (file.files[0].size / 1000 > 5120) {
    	alertTip("请勿上传超过5M的图片","确定");
    	return;
    }
    if (!picture.match(/.jpg|.png|.bmp/i)) return alertTip("您上传的图片格式不正确，请重新选择！","确定"),  
    !1;
	var html = '<li id="li' + imgItem + '"><em class="close"></em><img id="img' + imgItem + '" src="" alt=""></li>';
    $("#preview").append(html);
	preview = $("#img" + imgItem);

	if(!file.files || !file.files[0]){
		return;
	}
	var reader = new FileReader();
	reader.onload = function(evt){
		preview.src = evt.target.result;
		imageUrl = evt.target.result;
		images.push(imageUrl);
        imgItem++;
	}
	reader.readAsDataURL(file.files[0]);
	
    if (file_head.files && file_head.files[0]){
        preview.attr('src', window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[0]) : window.URL.createObjectURL(file_head.files[0]));
    }
    else {    
        try {  
            localImag.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)",  
            localImag.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = img_txt
        } catch(f) {  
            return alert("您上传的图片格式不正确，请重新选择！"),  
            !1  
        }
    }
}