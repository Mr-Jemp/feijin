//window.onload = function() {
//	mui('.regImg').each(function(){
//		//alert(this.width + "+" + this.height);
//		if(this.width >= this.height) {
//			this.style.height = '100%';
//		} else {
//			this.style.width = '100%';
//		}
//	});
//}

//倒计时
var wait=90;
var t = null;
function time() {
	var btn = document.getElementById("gainCode");
    if (wait == 0) {
    	removeClass(btn,"disabled");
    	//btn.removeClass('disabled')          
        btn.innerText = "获取验证码";
        wait = 90;
    } else {
    	addClass(btn,"disabled");
    	//btn.classList.add('disabled');
        btn.innerText = "重新发送(" + wait + ")";
        wait--;
        t = setTimeout(function() {
            time();
        },
        1000)
    }
}

function clearTime() {
    if (t != null) {
        clearTimeout(t);
    }
    var btn = document.getElementById("gainCode");
    removeClass(btn,"disabled");
    btn.innerText = "获取验证码";
    wait = 0;
}

function hasClass(obj, cls) {
	return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
}
function addClass(obj, cls) {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;  
}
function removeClass(obj, cls) {  
    if (hasClass(obj, cls)) {  
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
        obj.className = obj.className.replace(reg, ' ');  
    }
}

//var $$ = jQuery.noConflict();
/*$(function(){
	$(".gainCode").click(function(){
		time();
	})

    //光标定位输入框末尾
    $(".textRight").click(function(){
        var val = $(this).val();
        $(this).focus();
        $(this).val('');
        $(this).val(val);
    })


});


//风险测评结果
function level(){
    var score = $("#score").text();
    $(".anchor").css('left',score+'%');
    $(".level").css('width',score+'%');
} */   

