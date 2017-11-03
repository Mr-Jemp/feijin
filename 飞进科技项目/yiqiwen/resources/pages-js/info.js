/*个人中心-info*/

var loginToken = readCookie("loginToken");

$(function(){

	var vm = null;
	var infoUrl = "user/profile?access_token=" + loginToken;
	var data = {
		"access_token": loginToken
	}
	wap.post(infoUrl, data, function(data){
		vm = new Vue({
			el: '#info',
			data: data
		})
	})		
})

function setImagePreview(file) {
    var preview, localImag, file_head = document.getElementById("file_head"),  
    picture = file_head.value;
    if (file.files[0].size / 1000 > 5120) {
    	alertTip("请勿上传超过5M的图片","确定");
    	return;
    }  
    if (!picture.match(/.jpg|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择！"),  
    !1;  
    preview = $("#preview");

	if(!file.files || !file.files[0]){
		return;
	}
	var reader = new FileReader();
	reader.onload = function(evt){
		var avatar = evt.target.result;
		var avatarUrl = 'user/uploadAvatar';
		var avatarData = {
			"access_token": loginToken,
			"avatar": avatar
		}
		$("#loading").show();
		wap.post(avatarUrl, avatarData, function(data){
			preview.attr('src',data.avatar);
			alertTip("头像上传成功！","确定");
			$("#loading").hide();
		},function(data){
			$("#loading").hide();
		})
	}
	reader.readAsDataURL(file.files[0]);
    if (file_head.files && file_head.files[0]){
        return;	        
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