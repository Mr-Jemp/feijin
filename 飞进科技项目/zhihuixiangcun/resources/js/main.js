//倒计时
var wait = 60;
var t = null;
function time() {
	var btn = document.getElementById("gainCode");
    if (wait == 0) {
    	removeClass(btn,"disabled");
        wait = 60;
    } else {
    	addClass(btn,"disabled");
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